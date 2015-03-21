if (Meteor.isClient) {
  Template.body.helpers({
    tasks : [
      {text: "This is a task"},
      {text: "This is other task"},
      {text: "an another task"},
    ]
  });
}

if (Meteor.isServer) {

}
