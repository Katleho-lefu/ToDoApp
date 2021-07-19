import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoService } from 'src/app/services/todo.service';
import { ToDo } from './../ToDo';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  data: ToDo={
    todo:" ",
    iscomplete: false
  }


  todoArr: any=[]

  constructor(private todo_service: TodoService) { }

  ngOnInit(): void {
    this.getToDo();
    console.log(this.todoArr);
  }

  //Add method
  setToDo(){
      this.todo_service.setToDo(this.data);
      this.getToDo();
  }

  //get method
  getToDo(){
    this.todo_service.getToDo().subscribe(data => {
      this.todoArr = data});
  }

  //delete toDo
  delete(id){
    this.todo_service.delete(id);
    this.getToDo();
  }

  //mark toDo
  mark(id){
    // this.todoArr[id].iscomplete=!this.todoArr[id].iscomplete;
    this.todo_service.mark(id);
    this.getToDo();
  }
    
 
  

  

}
