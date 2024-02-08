import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const savedTasks = localStorage.getItem('savedTasks');
    if (savedTasks) {
      this.taskList = JSON.parse(savedTasks);
    }
  }
 
  pageTitle = 'ToDo List using Angular';
  taskList: any[] = [];
  filteredTasks: any[] = [];

  addTask(newTask: string) {
    const taskItem = { id: this.taskList.length + 1, name: newTask };
    this.taskList.push(taskItem);
    localStorage.setItem('savedTasks', JSON.stringify(this.taskList));
  }
  
  removeTask(taskId: number) {
    this.taskList = this.taskList.filter(task => task.id !== taskId);
    localStorage.setItem('savedTasks', JSON.stringify(this.taskList));
  }

  searchTasks(searchTerm: string) {
    this.filteredTasks = this.taskList.filter(task => task.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
}
