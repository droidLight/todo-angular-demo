import { Component, OnChanges, OnInit } from '@angular/core';
import { TodoService } from './services/todoservices/todo.service';
import { UserServices } from './services/userservices/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  authorName:string="";

  constructor(private userServices:UserServices){}

  ngOnInit(){
    this.userServices.userObservable.subscribe((name)=>{
      this.authorName = name;
      console.log(`name updated: ${this.authorName}`);
    })
  }
}
