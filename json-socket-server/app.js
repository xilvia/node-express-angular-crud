// Connect to the server.
const socketUrl = "ws://localhost:8080";
let exampleSocket = new WebSocket(socketUrl);

// Listen connection events.
exampleSocket.onopen = (ev) => {
  console.log('Socket opened: ', ev);
};
exampleSocket.onmessage = (m) => {
  let message = JSON.parse(m.data);
  console.log('Message: ', message);
};
exampleSocket.onclose = (ev) => {
  console.log('Socket closed: ', ev);
};

exampleSocket.send(JSON.stringify({ type: 'read', path: 'users' }));

exampleSocket.send(JSON.stringify({ type: 'read', path: 'users', id: 1 }));

exampleSocket.send(
  JSON.stringify(
    {
      type: 'create',
      path: 'users',
      data: {
        name: 'Paco Rabanne',
        email: 'paco@example.com'
      }
    }
  )
);


exampleSocket.send(
  JSON.stringify(
    {
      type: 'update',
      path: 'users',
      id: 5,
      data: {
        id: 5,
        name: 'Josh',
        age: 20
      }
    }
  )
);

{
  type: "update",
    path: "users",
      data: [
        {
          id: 2,
          name: "Paco Rabanne",
        }
      ]
};
