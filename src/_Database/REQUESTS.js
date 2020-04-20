export const __REQUESTS = [
  {
    id: 0,
    type: "work/feedback/order",
    manager: {
      id: 100,
      accepted: false
    },
    transporter: {
    id: 200,
      accepted: true ,
    }
  },
];

// when someone send request for work
//
// create a new REQUEST : {
//    id: 0,
//    type: "work",
//    manager: 100,
//    transporter: 200,
//  }
// create LOG ---- type: request, responsible: x , to y , label: 'request-sent' ...

// when someone accept request
//
// update REQUEST : {
//    id: 0,
//    manager : ,
//
//  
// add 100 to __TRANSPORTERS.200.managers
// add 200 to __MANAGER.100.transporters
// create LOG ---- type: request, responsible: x , to: y , label: 'request-accepted' ...

// when someone cancel request
//
// remove REQUEST : {
//    id: 0
//  }
// create LOG ---- type: request, responsible: x , to: y , label: 'request-canceled' ...


// when order X is been ended
//
// create a new REQUEST : {
//    id: 0,
//    type:"feedback",
//    manager: 100,
//    transporter: 200,
// }
//
// 
// 