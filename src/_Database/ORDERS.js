export const __ORDERS = [
  {
    id: 1000,
    owner: 999,
    assignedTo: null,
    product: 10,
    customer: 20,
    amount: 159,
    status: "awaiting-assignement", // default
  },
];

// 1 - manager creates order (id + owner + product + customer + amount)
// log: { responsible: "manager", status: "awaiting-assignement", date: "xxxxx" }

// 2- manager assign order to transporter (assignedTo)
// log: { responsible: "manager", status: "assigned", date: "xxxxx" }

// 3 - transporter checks the order and planify for delivry
// log: { responsible: "transporter", status: "out-for-delivery", date: "xxxxx" }

// 4  - order is delivered
// log: { responsible: "transporter", status: "delivered", date: "xxxxx" }

// 5  - order is remboursed
// log: { responsible: "transporter", status: "factured", date: "xxxxx" }

// 6 - order is ended
// log: { responsible: "manager", status: "ended", date: "xxxxx" }

// 41  - order is canceled (by manager or transporter)

// log: { responsible: "manager", status: "canceled", date: "xxxxx" }
// log: { responsible: "transporter", status: "canceled", date: "xxxxx" }
