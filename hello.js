$(document).ready(function () {

	$('.star').on('click', function () {
      $(this).toggleClass('star-checked');
    });

    $('.ckbox label').on('click', function () {
      $(this).parents('tr').toggleClass('selected');
    });

    $('.btn-filter').on('click', function () {
      var $target = $(this).data('target');
      if ($target != 'all') {
        $('.table tr').css('display', 'none');
        $('.table tr[data-status="' + $target + '"]').fadeIn('slow');
      } else {
        $('.table tr').css('display', 'none').fadeIn('slow');
      }
    });

 });

// $(function(){

// 	var $tasks = $('#myArray');

// 	$.ajax({
// 		type: 'GET',
// 		url: 'http://localhost:8080/getTasks',
// 		success: function(data) {
// 			$.each(data, function(i, item) {
// 				$tasks.append('<tr><th scope="row">' + i + '</th>' +
// 				'<td>' + item.name +'</td>' 
// 				+ '<td>' + item.assignee.name +'</td>' 
// 				+ '<td>' + item.dueTime +'</td></tr>')

// 			});
// 		}
// 	});
// });

