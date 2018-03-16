$(function() {

  var userFilter = {};
  var statusFilter = {};
  var priorityFilter = {};

  $assignee = $('#assignee')

  $('#DetailModal')
    .on('show.bs.modal', function(e) {
      var $modal = $(this)
      var assigneeName = e.relatedTarget.id;
      $modal.find('.modal-title')
        .html(assigneeName);
    })

  function addAssigneeView(newAssignee) {
    $assignee.append('<tr class="my_row" id=' + (newAssignee.name)
      .toString() + '><td>' +
      newAssignee.name + '</td></tr>');
  }

  $.ajax({
      type: 'GET',
      url: 'http://localhost:8080/getAssignees'
    })
    .done(function(data) {
      $.each(data, function(i, item) {
        addAssigneeView(item);
      });
      $('.my_row')
        .on("click", function() {

          if (userFilter == $(this)
            .attr('id')) {
            userFilter = {};
            getTask();
          } else {
            userFilter = $(this)
              .attr('id')
            getTask();
          }
        })
    })
    .fail(function() {
      alert('loading error - getAssignees')
    })

  getTask();

  function getTask() {


    var $tasks = $('#tasks')
      .html('');
    var $taskRequest = {
      taskStatus: statusFilter,
      assignee: userFilter
    }

    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/getTask123',
        data: $taskRequest
      })
      .done(function(data) {
        $.each(data, function(i, item) {
          $tasks.append('<tr data-toggle="modal" id="' + item.assignee.name + 
            '"data-target="#DetailModal"><td>' + item.name + '</td>' +
            '<td>' + item.assignee.name + '</td>' +
            '<td>' + item.taskStatus.name + '</td>' +
            '<td>' + item.dueTime + '</td>' +
            '<td>' +
            '</tr>')
        });
      })
  }


  $('#btn_inProgress')
    .on('click', function() {
      if (statusFilter == $(this)
        .attr('data-button')) {
        statusFilter = {};
        getTask();
      } else {
        statusFilter = $(this)
          .attr('data-button')
        getTask();
      }
    })


  $('#btn_Pending')
    .on('click', function() {
      if (statusFilter == $(this)
        .attr('data-button')) {
        statusFilter = {};
        getTask();
      } else {
        statusFilter = $(this)
          .attr('data-button')
        getTask();
      }
    })

  $('#btn_Done')
    .on('click', function() {
      if (statusFilter == $(this)
        .attr('data-button')) {
        statusFilter = {};
        getTask();
      } else {
        statusFilter = $(this)
          .attr('data-button')
        getTask();
      }
    })
})
