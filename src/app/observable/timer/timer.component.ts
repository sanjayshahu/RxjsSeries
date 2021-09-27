import { Component, OnInit } from '@angular/core';
import { timer, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  inMsg;
  interSubscription:Subscription;

  constructor(private dus:DesignUtilityService) { }
  

  ngOnInit() {
   let broadcast = timer(5000,1000);//additional delay
   this.interSubscription=broadcast.subscribe((res)=>{
     this.inMsg='Video'+res;
     this.dus.print('videoList',this.inMsg)
     this.dus.print('videoList1',this.inMsg)
     this.dus.print('videoList2',this.inMsg)
     if(res>5){
       this.interSubscription.unsubscribe();
     }
   });
  }

}