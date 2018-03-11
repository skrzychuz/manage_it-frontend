$(function() {

  $('#DetailModal').on('show.bs.modal', function(e) {
        var $modal = $(this),
        idd = e.relatedTarget.id;
      })

  var $assignee = $('#assignee')
    .html("");

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
          var param = $(this)
            .attr('id')
            .split('_');

          alert(param)
        })
    })
    .fail(function() {
      alert('loading error - getAssignees')
    })




  $('#addAssigneeModal')
    .on('click', function() {

      var $name = $('#name');
      var assignee1 = {
        name: $name.val(),
      }
      $.ajax({
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          type: 'POST',
          url: 'http://localhost:8080/addAssignee1',
          data: JSON.stringify(assignee1),
          dataType: 'json'
        })
        .done(function(data) {
          addAssigneeView(data);
          $name.val('');
        })
        .fail(function() {
          alert('loading error')
        });


    });




    var $tasks = $('#tasks');

    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/getTasks'
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


  $('#addTask')
    .on('click', function() {


      var $taskName = $('#taskName');
      var $dateInput = $('#dateInput');
      var $statusSelect = $('#statusSelect');
      var $assigneeName = $('#assigneeList');

      var task = {
        name: $taskName.val(),
        dueTime: $dateInput.val(),
        taskStatus: $statusSelect.val(),
        assignee: {
          name: $assigneeName.val(),
        }
      };
      $.ajax({
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          type: 'POST',
          url: 'http://localhost:8080/addTask',
          data: JSON.stringify(task),
          dataType: 'json'
        })
        .done(function(data) {
          $tasks.append('<tr data-toggle="modal" id="55" data-target="#DetailModal">' +
            '<td>' + data.name + '</td>' +
            '<td>' + data.assignee.name + '</td>' +
            '<td>' + data.taskStatus.name + '</td>' +
            '<td>' + data.dueTime + '</td>' +
            '<td>'+
            '</tr>')

        })

        .fail(function() {
          alert('saving error - addTask')
        })
    })


  $('#btn_inProgress')
    .on('click', function() {

      var $tasks = $('#tasks')
        .html("");
      $.ajax({
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          type: 'GET',
          url: 'http://localhost:8080/getTask123',
          data: {
            "taskStatus": "InProgress"
          }
        })
        .done(function(data) {
          $.each(data, function(i, item) {
            $tasks.append('<tr><th scope="row">' + (i + 1) + '</th>' +
              '<td>' + item.name + '</td>' +
              '<td>' + item.assignee.name + '</td>' +
              '<td>' + item.taskStatus.name + '</td>' +
              '<td>' + item.dueTime + '</td></tr>')

          })
        })
    });

  $('#btn_Pending')
    .on('click', function() {

      var $tasks = $('#tasks')
        .html("");
      $.ajax({
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          type: 'GET',
          url: 'http://localhost:8080/getTask123',
          data: {
            "taskStatus": "Pending"
          }
        })
        .done(function(data) {
          $.each(data, function(i, item) {
            $tasks.append('<tr><th scope="row">' + (i + 1) + '</th>' +
              '<td>' + item.name + '</td>' +
              '<td>' + item.assignee.name + '</td>' +
              '<td>' + item.taskStatus.name + '</td>' +
              '<td>' + item.dueTime + '</td></tr>')

          })
        })
    });

  $('#btn_Done')
    .on('click', function() {

      var $tasks = $('#tasks')
        .html("");
      $.ajax({
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          type: 'GET',
          url: 'http://localhost:8080/getTask123',
          data: {
            "taskStatus": "Done"
          }
        })
        .done(function(data) {
          $.each(data, function(i, item) {
            $tasks.append('<tr><th scope="row">' + (i + 1) + '</th>' +
              '<td>' + item.name + '</td>' +
              '<td>' + item.assignee.name + '</td>' +
              '<td>' + item.taskStatus.name + '</td>' +
              '<td>' + item.dueTime + '</td></tr>')
          })
        })
    })


  $('#btn_Done')
    .on('click', function() {

      var $tasks = $('#tasks')
        .html("");
      $.ajax({
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          type: 'GET',
          url: 'http://localhost:8080/getTask123',
          data: {
            "taskStatus": "Done"
          }
        })
        .done(function(data) {
          $.each(data, function(i, item) {
            $tasks.append('<tr><th scope="row">' + (i + 1) + '</th>' +
              '<td>' + item.name + '</td>' +
              '<td>' + item.assignee.name + '</td>' +
              '<td>' + item.taskStatus.name + '</td>' +
              '<td>' + item.dueTime + '</td></tr>')
          })
        })
    })


      $('#btn_All')
    .on('click', function() {

    var $tasks = $('#tasks').html("");

    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/getTasks'
      })
      .done(function(data) {
        $.each(data, function(i, item) {
          $tasks.append('<tr><th scope="row">' + (i + 1) + '</th>' +
            '<td>' + item.name + '</td>' +
            '<td>' + item.assignee.name + '</td>' +
            '<td>' + item.taskStatus.name + '</td>' +
            '<td>' + item.dueTime + '</td></tr>')
        })
      })
  })


  $(function() {

    var $assignee = $('#assigneeList');

    $.ajax({
      type: 'GET',
      url: 'http://localhost:8080/getAssignees',
      success: function(data) {
        $.each(data, function(i, item) {
          $assignee.append('<option>' + item.name + '</option>')

        });




      },
      error: function() {
        alert('loading error')
      }
    });
  });

  $(function() {

    var $status = $('#statusSelect');

    $.ajax({
      type: 'GET',
      url: 'http://localhost:8080/getStatuses',
      success: function(data) {
        $.each(data, function(i, item) {
          $status.append('<option>' + item.name + '</option>')

        });
      },
      error: function() {
        alert('loading error')
      }
    })
  })
  })




// $('#myModal')
//   .on('hidden.bs.modal', function() {
//     document.location.reload();
//   });
