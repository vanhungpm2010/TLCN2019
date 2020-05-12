import socketIO from "socket.io-client";

const SERVER_URL = `https://japaness-2020.herokuapp.com`;

// Initialize Socket IO:
const socket = socketIO(SERVER_URL, {
  forceNew: true,
  transports: ["websocket"],
  jsonp: false,
});

// export the function to connect and use socket IO:
export const startSocketIO = (store) => {
  socket.connect();

  socket.on("connect", () => {
    console.log("connect");
    // console.log('store', store)
    socket.io.opts.query = {
      user_id: store.id,
    };
    socket.connect();
    console.log(socket.connected);
  });
  socket.on("disconnect", () => {
    console.log("connection to server lost.");
  });

  socket.on("reconnect_attempt", () => {
    socket.io.opts.query = {
      user_id: store.id,
    };
  });

  socket.on("NOTIFY_USER", (message) => {
    console.log("NOTIFY_USER", message);
    //   store.dispatch(storePublicMessages([ message ]));
  });
};

export const SocketDisconect = () => {
  socket.disconnect();
}
