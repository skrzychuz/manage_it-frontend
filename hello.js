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
        + '<td>' + item.dueTime +'</td></tr>')

      });
    }
  });
  });

$(function(){

  var $assignee = $('#select');

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



// $('#myModal').on('hidden.bs.modal', function () {
//   document.location.reload();
// });


