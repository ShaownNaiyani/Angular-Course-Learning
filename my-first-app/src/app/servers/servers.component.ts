import { Component, OnInit } from '@angular/core';
import { timeInterval, timeout } from 'rxjs';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{

  addNewServer = false;
  serverCreationStatus = 'There was no server Created';
  serverName = '';
  userName = '';
  resetButton= false;
  serverCreated = false;

  servers = ['server1','server2']
  

  constructor(){

    setTimeout(() => {
      this.addNewServer = true;
    }, 2000);
  
  }
 
  ngOnInit(){
      
  }

  createServer(){

    this.serverCreationStatus= 'Server Created Successfully'+ this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated= true;

  }
  // onUpdateServerName(event:any){

  //   this.serverName = (<HTMLInputElement>event.target).value;

  // }

  // resetButtonClickable(event:any){

  //   this.userName = (<HTMLInputElement>event.target).value;

  //   if(this.userName.length !== 0){
  //     this.resetButton = true;
  //   }
  // }


}
