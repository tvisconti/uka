export class UserDataService {
    todoList: any[] = [];
    defaultTodoList: any[] = [
    {
      //Add "Categories" later and allow use to filter
      Date_Created: new Date('03/09/2018'),
      Due_Date: '03/09/2018',
      Title: 'Build ToDo Component',
      Description: 'Component will display, edit, save, and delete todo items.',
      Status: 'Complete'
    },
    {
      Date_Created: new Date('03/09/2018'),
      Due_Date: '03/09/2018',
      Title: 'Build Login Component',
      Description: 'Component will allow the user to log in with an existing account.',
      Status: 'Complete'
    },
    {
      Date_Created: new Date('03/09/2018'),
      Due_Date: '03/09/2018',
      Title: 'Build Register Component',
      Description: 'Component will allow the user to register an account',
      Status: 'Complete'
    },
    {
      Date_Created: new Date('03/09/2018'),
      Due_Date: '03/09/2018',
      Title: 'Use LocalStorage As DB',
      Description: 'Use localstorage to simulate a database ',
      Status: 'Open'
    },
    {
      Date_Created: new Date('03/09/2018'),
      Due_Date: '03/09/2018',
      Title: 'Mock API call',
      Description: 'Use a stub (or similar means) to mock an API call',
      Status: 'Open'
    },
    {
      Date_Created: new Date('03/09/2018'),
      Due_Date: '03/09/2018',
      Title: 'Add Task',
      Description: 'Ability to add and edit a task with a title and description and due date',
      Status: 'Open'
    },
    {
      Date_Created: new Date('03/09/2018'),
      Due_Date: '03/09/2018',
      Title: 'Edit Task',
      Description: 'Ability to add and edit a task with a title and description and due date',
      Status: 'Open'
    },
    {
      Date_Created: new Date('03/09/2018'),
      Due_Date: '03/09/2018',
      Title: 'Add user signup and login',
      Description: 'Don\'t worry too much about auth strategies since there is no backend to this project',
      Status: 'Open'
    }
  ];
  //or userId:number ?
    getUserData(userId: number) {
        this.todoList = JSON.parse(localStorage.getItem('todo-' + userId));
        //console.log(this.todoList);
        return this.todoList;
    }

    setUserData(userId: number) {
        console.log(this.todoList);
        localStorage.setItem('todo-' + userId, JSON.stringify(this.todoList));
    }
}