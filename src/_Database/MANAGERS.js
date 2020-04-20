export const __MANAGERS = [
  {
    id: 999,
    name: "Naoufal Badou",
    city: "Taounat",
    transporters: [],
    orders: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000],
  },
];

// manager id = 100
// transpo id = 200

// when someone send request

// add 100 to __TRANSPORTERS.200.managersPENDING
// add 200 to __MANAGER.100.transportersPENDING

// when someone accept request

// delete 100 to __TRANSPORTERS.200.managersPENDING
// delete 200 to __MANAGER.100.transportersPENDING
// add 100 to __TRANSPORTERS.200.managers
// add 200 to __MANAGER.100.transporters

// when someone cancel request

// delete 100 to __TRANSPORTERS.200.managersPENDING
// delete 200 to __MANAGER.100.transportersPENDING
