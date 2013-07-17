var io = require('socket.io').listen(require('http').createServer(function(req, res){ io.sockets.emit('ref', { }) && res.end('ok')}).listen(1337)).set('log level', 0).set('reconnection delay',50);var i=1;
io.sockets.on('connection', function(){
	io.sockets.emit('hb',{});
	console.log('!hb '+(i++));
});
