
import { ToDo } from './../components/ToDo';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  array: any[] = JSON.parse(localStorage.getItem('todos'))
  constructor() { }

  //add todo to localstorage...remember localstorage stores an array...so you'll have to put your things in an array before setting then in localstorage
  setToDo(data:any){
    // check if theres something in loclstorage already.....if not put your arguments inside an array ang set it[localstorage stores an array of strings only]
    if(JSON.parse(localStorage.getItem('todos'))==null){
      let array: any=[];
      array.push(data)
      localStorage.setItem('todos', JSON.stringify(array))
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

  //delete ToDo
  delete(id){
    let array: any[] = JSON.parse(localStorage.getItem('todos'))
    array.splice(id, 1)
    localStorage.setItem('todos', JSON.stringify(array))
    console.log([`You are deleting to do number ${id}`]);
  }

  //mark ToDo
  mark(id){
    let array: any[] = JSON.parse(localStorage.getItem('todos'));
    array[id].iscomplete=!array[id].iscomplete;
    localStorage.setItem('todos', JSON.stringify(array))
  }

}
