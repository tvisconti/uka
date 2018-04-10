import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../shared/services/userData.service';

@Component({
  selector: 'upkeep-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [UserDataService]
})
export class TodoComponent implements OnInit {

  creatingNewItem: boolean = false;
  name: string = "Tom"; //change to service call.
  items = this.userDataService.getUserData(1);
  test: boolean = true;
  statuses: any[] = [ 
    "In Progress",
    "Waiting on Parts",
    "Pending Approval",
    "Complete",
    "Open",
    "New"
  ]

  constructor(private userDataService: UserDataService) { }




  //BUG EXISTS: Create new item, then delete. refresh page. item still there !! :O

  ngOnInit() {
  }

  //Disable 'x' button if no data in any of the fields.
  checkForData(index: number) {
    if(!this.items[index].Title) {
      return false;
    }
  }

  deleteItem(index: number) {
    console.log(index);
    //Enable the "New" button if user deleted a new entry before saving it.
    if (this.items[index].Editing) {
      this.creatingNewItem = false;
    }

    //Remove the deleted item from the array.
    this.items.splice(index, 1);

    //Save the updated list to the DB.
    console.log(this.items);
    this.save();
  }

  toggleEdit() {
    //If a field is clicked, change style to editable style.
    //onblur, toggle back.  
  }

  toggleComplete(index: number) {
    if (this.items[index].Status === 'Complete') {
      this.items[index].Status = 'Open';
    } else {
      this.items[index].Status = 'Complete';
    }
  }

  save() {
    console.log('save');
    this.userDataService.setUserData(1);
    //console.log(this.userDataService.getUserData(1));
    // this.userDataService.getUserData(1);
  }

  saveItem(index: number) {
    //No longer editing.
    this.items[index].Editing = false;

    //User-friendly console message - replace with alerts later.
    let itemNumber: number = index + 1;
    console.log('saving item ' + itemNumber);

    //Save to DB.
    this.userDataService.setUserData(1);
    console.log(this.userDataService.getUserData(1));
  }

  cancelEdit(index: number) {
    this.items[index].Editing = false;
  }

  createItem() {
    this.creatingNewItem = true;
    this.items.unshift({
      Due_Date: '',
      Title: '',
      Description: '',
      Status: '',
      Editing: true
    });
  }

  updateStatus(index: number, status: string) {
    this.items[index].status = status;
  }

  toggleCompletedStatus() {

  }

  resetTodoList() {
    this.userDataService.todoList = this.userDataService.defaultTodoList;
    this.save();
    this.items = this.userDataService.todoList;
  }

  sortBy(field: string) {
    switch(field) {
      case "Status":
        this.items = this.items;
        break;
      default:
        break;
    }
  }

}

/* Statuses:
'New': Incomplete & Less than or equal to 24 hours old.
'Open': 'Incomplete & more than 24 hours old.
'Complete': Completed.                               */

