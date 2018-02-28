$(function(){

	var $tasks = $('#tasks');


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

  var $assignee = $('#assignee');

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
   var $name = $('#name');
  var assignee = {
    name: $name.val()
  };

  $.ajax({
    type: 'POST',
    ulr: 'http://localhost:8080/postAssignee1',
    data: assignee,
    success: function(newAssignee) {
      $assignee.append('<tr><th scope="row">' + (i+1) + '</th>' +
        '<td>' + newAssignee.name +'</td></tr>');
      },
      error: function(){
        alert('saving error');
      }
      });
  });
  });


