module.exports = ({io, activeUsers}) => {

  io.on('connection', (socket) => {
    socket.on('disconnect', () => {

    });

    socket.on('enter-lobby', () => {
      console.log('enter lobby clicked from client');
    });

    socket.on('remove-criteria', () => {

    });

    socket.on('add-criteria', () => {

    });

    socket.on('call-established', ()=>{

    });

    socket.on('call-end', ()=>{

    });

    socket.on('send-msg', ()=>{
      
    });

  });
  
};