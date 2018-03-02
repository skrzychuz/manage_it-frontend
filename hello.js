$(function(){

  var $assignee = $('#assignee');
  var $name = $('#name');
  $.ajax({
    type: 'GET',
    url: 'http://localhost:8080/getAssignees',
    success: function(data) {
      $.each(data, function(i, item) {
        $assignee.append('<tr><th scope="row">' + (i+1) + '</th>' +
        '<td>' + item.name +'</td></tr>')

      });
    },
    error: function() {
      alert('loading error')
    }
  });

 
$('#add1').on('click', function(){

  var assignee = {
    name: $name.val(),
  };
  $.ajax({
    headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json' 
    },
    type: 'POST',
    url: 'http://localhost:8080/addAssignee1',
    data: JSON.stringify(assignee),
    dataType: 'json',
    success: function(newAssignee) {
      $assignee.append('<tr><th scope="row"></th>' +
        '<td>' + newAssignee.name +'</td></tr>');

$('#myModal').on('hidden.bs.modal', function () {
  document.location.reload();
});

      },
      error: function(){
        alert('saving error');
      }
      });
  });
  });

$(function(){

  var $tasks = $('#tasks');
    var $name = $('#name');


  $.ajax({
    type: 'GET',
    url: 'http://localhost:8080/getTasks',
    success: function(data) {
      $.each(data, function(i, item) {
        $tasks.append('<tr><th scope="row">' + (i+1) + '</th>' +
        '<td>' + item.name +'</td>' 
        + '<td>' + item.assignee.name +'</td>'
        + '<td>' + item.taskStatus.name +'</td>' 
        + '<td>' + item.dueTime +'</td></tr>')

      });
    }
  });

$('#addTask').on('click', function(){
  var $tasks = $('#tasks');
  var $taskName = $('#taskName');
  var $dateInput = $('#dateInput');
  var $statusSelect = $('#statusSelect');
  var $assigneeList = $('#assigneeList');
  
  var task = {
    name: $taskName.val(),
    dueTime: $dateInput.val(),
    taskStatus: $statusSelect.val(),
    
    assignee: {
    name: $assigneeList.val(),
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
    dataType: 'json',
    success: function (data) {/////
      $.each(data, function(i, item) {
        $tasks.append('<tr><th scope="row">' + (i+1) + '</th>' +
        '<td>' + item.name +'</td>' 
        + '<td>' + item.assignee.name +'</td>' 
        + '<td>' + item.dueTime +'</td></tr>')
      
 });


$('#myModal2').on('hidden.bs.modal', function () {
  document.location.reload();
});

    },

      error: function() {
        alert('saving error')
      }
      });
  });

$('#btn_status')
  .on('click', function(){

  var $tasks = $('#tasks');
//   var status = { 
//     taskStatus: {
//       name: Pending
//   }
// }    
  $.ajax({
    headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json' 
    },
    type: 'GET',
    url: 'http://localhost:8080/getTask123',
    data: {"taskStatus": "Pending"},
    success: function(data) {
      $.each(data, function(i, item) {
        $tasks.append('<tr><th scope="row">' + (i+1) + '</th>' +
        '<td>' + item.name +'</td>' 
        + '<td>' + item.assignee.name +'</td>'
        + '<td>' + item.taskStatus.name +'</td>' 
        + '<td>' + item.dueTime +'</td></tr>')

      });
    }
  });
  });




  });



$(function(){

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

$(function(){

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
  });
  });



