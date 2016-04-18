toDoApp.service('todoFetcher',['$http', function($http) {
  var self = this;

  self.index = function() {
    var todos = [];
    self._fetchTodosFromApi(todos);
    return todos;
  };

  self._fetchTodosFromApi = function(todos) {
    $http.get('https://quiet-beach-24792.herokuapp.com/todos.json')
      .then(function(resp) {
        self._handleresponse(resp.data, todos);
        console.log(resp)
      }, function(err) {});
    };

  self._handleresponse = function(data, todos) {
    for(var i=0; i<data.length; i++) {
      todos.push(new Todo(data[i].text))
    }
  }


}]);
