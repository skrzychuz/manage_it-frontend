$(function() {

  var userFilter = {};
  var statusFilter = {};
  var priorityFilter = {};

  $assignee = $('#assignee')
  $tasks = $('#tasks')

  $('#DetailModal')
    .on('show.bs.modal', function(e) {
      var $modal = $(this)
      var assigneeName = e.relatedTarget.id;
      $modal.find('.modal-title')
        .html(assigneeName + " Task");
    })

  $('#addTaskModal')
    .on('show.bs.modal', function(e) {
      getAssignees();
    })

  getAssignees();

  function addAssigneeView(newAssignee) {
    $assignee.append('<tr class="my_row" id=' + (newAssignee.name)
      .toString() + '><td>' +
      newAssignee.name + '</td></tr>');
  }

  function getTask() {

    var $tasks = $('#tasks')
      .html('');
    var $taskRequest = {
      taskStatus: statusFilter,
      assignee: userFilter
    }

    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/getTaskList',
        data: $taskRequest
      })
      .done(function(data) {
        $.each(data, function(i, item) {
          showTask(item)
        });
      })
  }


  function getAssignees() {

    var $assigneeInModal = $('#assigneeList').html('');

    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/getAssignees',
      })
      .done(function(data) {
        $.each(data, function(i, item) {
          $assigneeInModal.append('<option value="' + item.id + '">' + item.name + '</option>')
        })
      })
      .fail(function() {
        alert('saving error - gettask')
      })
  }

  function showTask(item) {
    $tasks.append('<tr data-toggle="modal" id="' + item.assignee.name +
      '"data-target="#DetailModal"><td>' + item.name + '</td>' +
      '<td>' + item.assignee.name + '</td>' +
      '<td>' + item.taskStatus.name + '</td>' +
      '<td>' + item.dueTime + '</td>' +
      '<td>' +
      '</tr>')
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


  $('#addTask')
    .on('click', function() {

      var $tasks = $('#tasks');
      var $taskName = $('#taskName');
      var $dateInput = $('#dateInput');
      var $statusName = $('#statusSelect option:selected').text();
      var $statusId = $('#statusSelect').val();
      var $assigneeName = $('#assigneeList option:selected').text();
      var $assigneeId = $('#assigneeList').val();

      var task = {
        name: $taskName.val(),
        dueTime: $dateInput.val(),
        taskStatus: {
          id: $statusId,
          name: $statusName,
        },
        assignee: {
          id: $assigneeId,
          name: $assigneeName,
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
        .done(function(item) {
          showTask(item)
        })
        .fail(function() {
          alert('saving error - addTask')
        })
    })


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

  $(function() {

    var $status = $('#statusSelect');

    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/getStatuses',
      })
      .done(function(data) {
        $.each(data, function(i, item) {
          $status.append('<option value="' + item.id + '">' + item.name + '</option>')
        })
      })
      .fail(function() {
        alert('loading error - getStatuses')
      })
  })
})
