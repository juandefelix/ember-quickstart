import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return { musicos: ["Johan Sebastian Bach", "Jim Hall", "John Abercrombie"] }
  }
});
