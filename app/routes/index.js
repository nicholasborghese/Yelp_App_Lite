import Route from '@ember/routing/route';
import { queryManager } from "ember-apollo-client";
import search from "yelp-lite-app/gql/queries/search";

export default Route.extend({
  apollo: queryManager(),
  
  queryParams: {
    term: {
      refreshModel: true
    }
  },

  model(params) {
    if(params.term) {
      const inputs = { term: params.term };
      return this.apollo.watchQuery(
        { query: search, variables: inputs },
        'search'
      );
    }
  }
});
