//mongo collection
Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
	//finding tasks
	Template.body.helpers({
		tasks: function() {
			return Tasks.find({},{sort: {checked: 1, created: -1}});
		}
	});

	//inserting tasks
	Template.insert.events({
		'submit .insert': function (event) {
			//This function is called when the new task form is submitted
			var text = event.target.text.value;

			Tasks.insert({
				text: text,
				created: new Date()  //current time
			});

			//clear form
			event.target.text.value = "";

			//prevent submit
			return false;
		}
	});

	Template.task.events({
		"click .toggle-checked": function(){
			Tasks.update(this._id, {$set: {checked: ! this.checked}});
		},
		"click .delete": function () {
    	Tasks.remove(this._id);
  	}
	});
}

if (Meteor.isServer) {

}
