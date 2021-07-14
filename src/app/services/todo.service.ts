
import { ToDo } from './../components/ToDo';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  //add todo to localstorage...remember localstorage stores an array...so you'll have to put your things in an array before setting then in localstorage
  setToDo(data:ToDo){
    // check if theres something in loclstorage already.....if not put your arguments inside an array ang set it[localstorage stores an array of strings only]
    if(JSON.parse(localStorage.getItem('todos'))==null){
      let todoArr: any=[];
      todoArr.push(data)
      localStorage.setItem('todos', JSON.stringify(todoArr))
    }
    //else get them from localstorage and put them inside an array and add your new changes to the array and set them again
    else{
      let todoArr: any[]= JSON.parse(localStorage.getItem('todos'));
      todoArr.push(data)
      localStorage.setItem('todos', JSON.stringify(todoArr))
    }
  }

  //get ToDos
  getToDo():Observable<any[]>{
    return of (JSON.parse(localStorage.getItem('todos')))
  }

}
