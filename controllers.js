toDoApp.controller('ToDoController', ['todoFactory', function(todoFactory) {
  var self = this;

    self.todos = [
      {text:"one", completed:true},
      {text:"two", completed:false}];

    self.addToDo = function(todoText) {
      self.todos.push(new Todo(todoText));
    };

    self.removeToDo = function() {
      self.todos.pop();
    };

  }]);
