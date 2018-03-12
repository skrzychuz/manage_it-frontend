$(function() {

  $('#DetailModal').on('show.bs.modal', function(e) {
        var $modal = $(this),
        idd = e.relatedTarget.id;
      })

    var $tasks = $('#tasks');

    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/getTask123',

      })
      .done(function(data) {
        $.each(data, function(i, item) {
          // $tasks.append('<tr onclick="myFunction(this)">' +
          $tasks.append('<tr data-toggle="modal" id="55" data-target="#DetailModal">' +
            '<td>' + item.name + '</td>' +
            '<td>' + item.assignee.name + '</td>' +
            '<td>' + item.taskStatus.name + '</td>' +
            '<td>' + item.dueTime + '</td>' +
            '<td>'+
            '</tr>')
        });
      })

  var userFilter = 'all'
  var statusFilter = 'all'
  var priorityFilter = 'all'

function updateFilters() {


    var $tasks = $('#tasks').html('');
    var $taskRequest = taskGenerator();

    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/getTask123',
          data: $taskRequest
          })
      .done(function(data) {
        $.each(data, function(i, item) {
          // $tasks.append('<tr onclick="myFunction(this)">' +
          $tasks.append('<tr data-toggle="modal" id="55" data-target="#DetailModal">' +
            '<td>' + item.name + '</td>' +
            '<td>' + item.assignee.name + '</td>' +
            '<td>' + item.taskStatus.name + '</td>' +
            '<td>' + item.dueTime + '</td>' +
            '<td>'+
            '</tr>')
        });
      })
    }

    function taskGenerator() {

      if (userFilter == 'all') {
        if (statusFilter == 'all') {
          getAllTaskFunction();
        } else {
          $taskRequest = {
             taskStatus: statusFilter
            }
          }
        }
          else {
            $taskRequest = {
              taskStatus: statusFilter,
              assignee: userFilter
            }
          }
           return $taskRequest;
        }
       
   


  


  $('#btn_inProgress')
    .on('click', function() {
    statusFilter = $(this).attr('data-button');
    updateFilters();
    });

  $('#btn_Pending')
    .on('click', function() {
    statusFilter = $(this).attr('data-button');
    updateFilters();
    });

      $('#btn_Done')
    .on('click', function() {
    statusFilter = $(this).attr('data-button');
    updateFilters();
    });


     })
  
