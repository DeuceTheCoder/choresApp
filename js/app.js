App = Ember.Application.create();

App.Router.map(function() {
  this.route('chores');
  this.resource('chore', {path: '/chores/:name'});
  this.route('residents');
  this.resource('resident', {path: '/residents/:name'});
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
App.ChoresRoute = Ember.Route.extend({
  model: function() {
    return App.CHORES;
  }
});
App.ChoreRoute = Ember.Route.extend({
    model: function(params) {
        var chore = App.CHORES.findBy('name', params.name);
        return chore == null ? {} : chore;
    }
});
App.ResidentsRoute = Ember.Route.extend({
  model: function() {
    return App.RESIDENTS;
  }
});
App.ResidentRoute = Ember.Route.extend({
    model: function(params) {
        return App.RESIDENTS.findBy('name', params.name);
    }
});

App.CHORES = [
  {
    name: 'Sweeping',
    frequency: 'daily',
    description: 'Sweep the kitchen and dining room floors',
    firstChoosers: []
  },
  {
    name: 'Mopping',
    frequency: 'weekly',
    description: 'Mop the kitchen and dining room floors',
    firstChoosers: []
  }
];

App.RESIDENTS = [
  {
    name:'Robert',
    avatarImage: '',
    firstChoices: ['Sweeping', 'Mopping', 'Dishes'],
    assignedChores: []
  }
];
