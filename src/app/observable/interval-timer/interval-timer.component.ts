import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { take,toArray } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-interval-timer',
  templateUrl: './interval-timer.component.html',
  styleUrls: ['./interval-timer.component.scss']
})
export class IntervalTimerComponent implements OnInit {
  inMsg;
  interSubscription:Subscription;
  interSubscriptionA:Subscription;

  constructor(private dus:DesignUtilityService) { }
  

  ngOnInit() {
   let broadcast = interval(1000);
   this.interSubscription=broadcast.subscribe((res)=>{
     this.inMsg='Video'+res;
     this.dus.print('videoList',this.inMsg)
     this.dus.print('videoList1',this.inMsg)
     this.dus.print('videoList2',this.inMsg)
     if(res>5){
       this.interSubscription.unsubscribe();
     }
   });
  



  let broadcastA = interval(1000);//toArray Version
  this.interSubscriptionA=broadcastA.pipe(take(6),toArray()).subscribe((res)=>{//pipe for chaining operatos,take to limit,toarray to covert
    console.log('resA',res);
  
  });
 }

}
