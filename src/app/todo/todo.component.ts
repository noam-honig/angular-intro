import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  title: string = '';
  tasks: Task[] = [
    { title: 'Learn Typescript', completed: false },
    { title: 'Learn Html', completed: false },
    { title: 'Learn basic english', completed: true }
  ];
  constructor() { }
  deleteTask(taskToDelete: Task) {
    this.tasks = this.tasks.filter(task => task != taskToDelete);
    this.save();
  }
  save() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  ngOnInit(): void {
    const tasksAsString = localStorage.getItem("tasks");
    if (tasksAsString)
      this.tasks = JSON.parse(tasksAsString);
    console.table(this.tasks);
  }
  add() {
    this.tasks.push({
      title: this.title,
      completed: false
    })
    this.title = '';
    this.save();
  }

}
interface Task {
  title: string;
  completed: boolean;
}