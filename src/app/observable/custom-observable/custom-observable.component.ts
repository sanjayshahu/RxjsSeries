import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';
@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss']
})
export class CustomObservableComponent implements OnInit ,OnDestroy{
  tempClass;
  tempClass1;
  tempClass2;
  sub:Subscription;
  sub1:Subscription;
  varObservable;
  constructor(private dus:DesignUtilityService) { }
  

  ngOnInit() {
    let customObservable=Observable.create((observer)=>{//observable is container that emits stream wherea observer is used to create this observable
     setTimeout(()=>{observer.next('sanj')},1000) 
     setTimeout(()=>{observer.next('san')},2000) 
     setTimeout(()=>{observer.next('sanjay')},3000) 
     setTimeout(()=>{observer.next('shahu');
    //  observer.error(new Error()); 
    //  this.tempClass='err';
    // observer.complete()
    //both of these will remove the subscription
    },4000) 
     setTimeout(()=>{observer.next('saj');
       observer.complete()
      //  this.tempClass='com';

      //when used here even after error is trigereed ..although subscription is removed settimeout will run thus..tempClass variable is assigned with com value
      //giving it color of completed
    
    },5000) 
    })

    customObservable.subscribe((res)=>{
      // console.log(res);
      this.dus.print('videoList',res)//data block
    },
    (err)=>{
     this.tempClass='err';//error block
     
    },
    ()=>{
        this.tempClass='com';//complete block

    }
    )


    //second Custom\\
    let arr=["s","a","n","j","a","y"];
    let cus2=Observable.create((observer)=>{
      let count=0;//earlier same was achieved using interval...
      setInterval(()=>{
        observer.next(arr[count])
        count++;

        
        // if(count>2){
        //   observer.error(new Error());
          
        // }

        if(count>5){
          observer.complete();
        }
      
      },1000)//for every second data is emiited which used index and gives data from arr array
    })

    this.sub=cus2.subscribe((res)=>{//subscription is needed under variable becuse on destroy we need to unsubscine it
      console.log(res);
      this.dus.print('videoList1',res)//data block
    },
    (err)=>{
     this.tempClass1='err';//error block.
     1
    },
    ()=>{
        this.tempClass1='com';//complete block

    }
    )

    
    //second Custom\\
    let arr1=["sa","an","nj","ja","ay","ys"];
    let cus3=Observable.create((observer)=>{
      let count=0;
      setInterval(()=>{
        observer.next(arr1[count])
        count++;

        
        // if(count>2){
        //   observer.error(new Error());
          
        // }

        if(count>5){
          observer.complete();
        }
      
      },1000)//for every second data is emiited which used index and gives data from arr array
    })

    this.sub1=cus3.subscribe((res)=>{//subscription is needed under variable becuse on destroy we need to unsubscine it
      console.log(res);
      this.varObservable=res//data block
    },
    (err)=>{
     this.tempClass2='err';//error block.
     1
    },
    ()=>{
        this.tempClass2='com';//complete block

    }
    )
    
  }

  ngOnDestroy(){
    this.sub1.unsubscribe();
    this.sub.unsubscribe();//is required becuse even after componentt is destroyed this remains subscribed and due to setInteval data will be streamed..
  }

}
