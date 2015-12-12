app.factory('ChatFactory', function ($on, $emit) {
		var factory = {};
		var socket = io.connect();
		factory.messages = [];
		socket.on('chat message', function(message) {
				console.log('from factory: ',message)
				$emit('updateArr', message);
		});
		factory.sendMessage = function(message) {
				console.log('shit happened');
			socket.emit('chat message', message);
		};
		factory.getAllMessages = function() {
				console.log('getting messages');
			return this.messages;
		}
		return factory;
});
