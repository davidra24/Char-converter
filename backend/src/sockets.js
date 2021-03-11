const fetch = require('node-fetch');

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('sendMessage', (data) => {
      //let returnData = data
      const newData = JSON.parse(data);
      const msg = newData.message.split(' ');
      if (msg[0] === '/c' || msg[0] === '/C') {
        const convert = `http://api.currencylayer.com/live?access_key=7e354d651d04a765843f115dc1ed4d7c&from=${msg[1]}&to=${msg[2]}&amount=${msg[3]}`;
        fetch(convert)
          .then((res) => res.json())
          .then((body) => {
            const response = body.quotes[`${msg[1]}${msg[2]}`]
            console.log(response);
            const newMessage = `$${msg[3]} in ${msg[1]} to ${msg[2]} is $${response}`;
            const returnData = { ...newData, message: newMessage };
            io.sockets.emit('reciveMessage', JSON.stringify(returnData));
          });
      } else {
        io.sockets.emit('reciveMessage', data);
      }
    });
  });
};
