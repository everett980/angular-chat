// This object describes the URL of the page we're on!
console.log(window.location.origin);
var socket = io(window.location.origin);


console.log("Hey you hit the js file")
// $('form').submit(function(){
// 	socket.emit('chat message', $('#m').val());
// 	$('#m').val('');
// 	return false;
// });



socket.on('chat message', function(message) {
	$('#messages').append($('<li>').text(message));
});