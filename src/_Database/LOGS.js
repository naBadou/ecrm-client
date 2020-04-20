// a log is created whenever action happens and types are :

// 1 - Account

const logRegistration = {
  id: null,
  type:'account',
  label: 'registration',
  responsible: 900,
  message: 'Thanks for registration'
}

// 2 - Work 

// when a user sends a request to another
const logWork1 = {
  id: null,
  type: 'work',
  label: 'request-sent',
  responsible: 900,
  to: 100,
  message: "responsible sent work request to 100"
}
const logWork = {
  id: null,
  type: 'work',
  label: 'request-accepted',
  responsible: 900,
  to: 100,
  message: "responsib"
}