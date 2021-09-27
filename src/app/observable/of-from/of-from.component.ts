import { Component, OnInit } from '@angular/core';
import { timer, Subscription,of,from } from 'rxjs';
import { toArray } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {

  constructor(private dus:DesignUtilityService) { }

  ngOnInit() {
    let broadcast = of("s","a","n");
    broadcast.subscribe((res)=>{
      let inMsg='Video'+res;
      this.dus.print('videoList',inMsg)
     
     
    });

    let broadcastT = of("s","a","n");//toAraay
    broadcastT.pipe(toArray()).subscribe((res)=>{
      
      console.log('videoListT',res)
     
     
    });

    let broadcast1 = of({"s":1,"a":2,"n":3});
    broadcast1.subscribe((res)=>{
      let inMsg='Video'+JSON.stringify(res);
      this.dus.print('videoList1',inMsg)
     
     
    });

    let broadcast2 = from([1,2,3]);
    broadcast2.subscribe((res)=>{
      let inMsg='Video'+res;
      this.dus.print('videoList2',inMsg)
     
     
    });

    
    let broadcast2T = from([1,2,3]);
    broadcast2.pipe(toArray()).subscribe((res)=>{
      
      console.log('videoList2T',res)
     
     
    });
    let buyLaptop=new Promise((resolve,reject)=>{
     
      setTimeout(()=>{resolve('promise resolved')},3000)
  
  })

    let broadcast3 = from(buyLaptop)//promise converted to observable
    broadcast3.subscribe((res)=>{
      let inMsg='Video'+res;
      this.dus.print('videoList3',inMsg)
     
     
    });
    let broadcast4 = from("san");//stings to stream
    broadcast4.subscribe((res)=>{
      let inMsg='Video'+res;
      this.dus.print('videoList4',inMsg)
     
     
    });
   }
  }


