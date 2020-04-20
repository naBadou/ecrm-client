export const __REQUESTS = [
  {
    id: 0,
    manager: 100,
    transporter: 200,
  },
];

// when someone send request
//
// create a new REQUEST : {
//    id: 0,
//    manager: 100,
//    transporter: 200,
//  }
// create LOG ---- type: request, responsible: x , to y , label: 'request-sent' ...

// when someone accept request
//
// remove a new REQUEST : {
//    id: 0,
//    manager: 100,
//    transporter: 200,
//  }
// add 100 to __TRANSPORTERS.200.managers
// add 200 to __MANAGER.100.transporters
// create LOG ---- type: request, responsible: x , to: y , label: 'request-accepted' ...

// when someone cancel request
//
// remove a new REQUEST : {
//    id: 0,
//    manager: 100,
//    transporter: 200,
//  }
// create LOG ---- type: request, responsible: x , to: y , label: 'request-canceled' ...
