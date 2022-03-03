import { Component } from '@angular/core';
import {Users, Phone} from './models/users'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  arrayUsers: Users[] = [];
  name:string = '';
  email:string = '';
  UserSelect: Users = new Users();
  title = 'frontkabeli';
  phone:Phone[] = [];
  load:boolean = false;

  constructor(){
    this.arrayUsers = [
      {id:1 , name: "sebastian", email: 'sebastian.s@gmail.com', password: 'hunter2', phone: '213213213'},
      {id:2 , name: "viviana", email: 'viviana.s@gmail.com', password: 'hunter3', phone: '1212121'},
    ]
  }
  ngOnInit(): void {

this.loadF()
  }

  loadF(){
    setTimeout(() => {
      this.load = true;
    }, 200);
  }

  add(){
    // if(this.UserSelect.name === ' ' || this.UserSelect.email === '' || this.UserSelect.name == undefined){
    //   alert('debe de colocar un nombre');
    // }
     if(this.UserSelect.id === 0 ){
      this.UserSelect.id = this.arrayUsers.length + 1 ;
      this.arrayUsers.push(this.UserSelect)
    }


    this.UserSelect = new Users();
  }
  edit(user:any){
    console.log(user)
    this.UserSelect = user;

  }

  listenDelete(e:any){
    console.log(e)
    if(confirm('estas seguro de querer eliminar a ' + e.name + '?')){

      this.arrayUsers =  this.arrayUsers.filter( u => u.id != e.id)
    }
  }
  listenEdit(e:any){
    console.log(e)
    this.UserSelect = e;
  }
  deletee(user:Users){
    console.log(user)
    if(confirm('estas seguro de querer eliminar a ' + user.name + '?')){

      this.arrayUsers =  this.arrayUsers.filter( u => u.id != user.id)
    }
    console.log(user.id);
  }
}
