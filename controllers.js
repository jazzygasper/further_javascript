toDoApp.controller('ToDoController', ['todoFetcher', 'todoFactory', function(todoFetcher, todoFactory) {
  var self = this;

    self.todos = todoFetcher.index();

    self.addToDo = function(todoText) {
      self.todos.push(new Todo(todoText));
    };

    self.removeToDo = function() {
      self.todos.pop();
    };

  }]);
