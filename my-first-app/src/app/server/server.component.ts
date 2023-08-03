import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl:'./server.component.html',
    styleUrls: ['./server.component.css']
})

export class ServerComponent{

    serverId: number = 10;
    serverStatus: string = 'offline';
    showPara =  false;
    flag = 1;
    i=1;
    logs=[]

    constructor(){

        this.serverStatus = Math.random() >0.5 ? 'online': 'offline';

    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green':'red';
    }

    showDetails(){
        if(this.flag===1)
        {
            this.showPara =true;
            this.flag=0;
        }
        else{
            this.showPara =false;
            this.flag=1;
        
        }
        this.logs.push(this.i++);
        
    }

   



}