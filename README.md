const Team = {
  teamID: 0,
  manager: 900,
  transporters: [
    {
      id: 100,
      on: true/false
    }
  ],
  orders:[
    {
      id: 0,
      current: null,
      product: 0,
      customer: 0,
      responsible: 100,
      posted: dateObject,
      assigned : dateObject,
      delivered : dateObject,
      canceled: {
        by: 'customer/manager/transporter',
        dateObject 
      }
    }
  ],
  inventory:[
    {
      productID:0,
      name: 'Fly box',
      images:[],
      price: 578,
      sold: 0+1 for every delivered
    }
  ],
  customers:
}

_How it works_

0 - ADMIN

admins get logs about registration/login of users


1 - REGISTRATION 

🧮 Logic 
user submit  fullname + phone + password + type to firebase.users and to mongo.type

interfaces, api, redux

2 - LIGIN

🧮 Logic
Firebase listener checks for stored/submited credentials then fetchs user from mongo

3 - FIRST VISITE 

first of all, your real name will appear only for teammates, choose a user name that is displayed on the platform.

choose an account type : manager/transporter

if manager :

- in order to use the platform you must create a team, now give it a name, and avatar. you can change them whenever you want

- do you wanna add people to team ? (optional), input username + type

- Accept Privacy policy.

if Transporter :

- do you have a team to join ?


4 - TEAMING UP

3aks a transporter, a manager is dedicated to one team, focusin on its multiple membres and its overload is the main purpose,
for a transporter, having multiple teams is making his process easier and also reducing its carburent and time costs.

🧮 Logic

The manager creates a team give it an icon and name.
-- he can be own his own.
- Transporter can have multiple teams, manager have only one.
- Teams are public, everyone can see name of team and staff number, also activity.
- manager can recruit members.
- members will chat before joining

🎯 Marketing 

- Ranking teams will motivate the audience
- Puting objectifs to realise as a team
- fake it you make it 
- limiting team members for simple users

5 - 