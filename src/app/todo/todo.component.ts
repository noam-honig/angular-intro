import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  title: string = 'The meaning of life = ';
  tasks: Task[] = [
    { title: 'Learn Typescript', completed: false },
    { title: 'Learn Html', completed: false },
    { title: 'Learn basic english', completed: true }
  ];
  constructor() { }

  ngOnInit(): void {
    console.table(this.tasks);
  }

}
interface Task {
  title: string;
  completed: boolean;
}