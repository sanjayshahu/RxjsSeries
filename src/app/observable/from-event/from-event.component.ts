import { Component, OnInit ,ViewChild,ElementRef,AfterViewInit} from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';
@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit,AfterViewInit {
  

  constructor(private dus:DesignUtilityService) { }
  @ViewChild('addVideo' ,{ static: false }) addVideo: ElementRef;

  ngOnInit() {
  }
  ngAfterViewInit(){
    let count=1;
    console.log("aB",this.addVideo);
    fromEvent(this.addVideo.nativeElement,'click').subscribe((res)=>{
      let videoCount='video'+count++;
      console.log("res",videoCount);
      this.dus.print('videoList',videoCount);
      this.dus.print('videoList1',videoCount);

    }

    )

  }

 

  
}
