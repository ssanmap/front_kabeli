import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lista-user',
  templateUrl: './lista-user.component.html',
  styleUrls: ['./lista-user.component.css']
})
export class ListaUserComponent implements OnInit {
@Input() public arrayUsers:any ;
@Output() public editClicked: EventEmitter<any> = new EventEmitter();
  @Output() public deleteClicked: EventEmitter<any> = new EventEmitter();

  data: any;
  constructor() { }

  ngOnInit(): void {
    console.log('this data', this.data)
  }
  editWasClicked(user:any){
    this.editClicked.emit(user);
  }
  deleteWasClicked(user:any){
    this.deleteClicked.emit(user);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('arra', this.arrayUsers)
    this.data = this.arrayUsers;
    this.data = changes['arrayUsers'].currentValue;
    console.log(changes['arrayUsers'].currentValue)
  }

}
