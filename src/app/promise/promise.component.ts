import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {
  //promise
  // buyDell(){
  //   return true;

  // }
  // buyHp(){
  //   return false;

  // }
  // dell={
  //   model:"23ab",
  //   price:2000
  // }
  // hp={
  //   model:"23cd",
  //   price:20000
  // }

  // errorObject={
  //   status:"error"
  // }
  
  // promiseObject:any=null;



  //async n await
  dellaw={
    model:"23aw",
  price:2000


  }

  buyLaptop:any=null;

  constructor() { }
 
 

  ngOnInit() {
  //   let buyLaptop=new Promise((resolve,reject)=>{
  //     if(this.buyDell()){
  //       setTimeout(()=>{resolve(this.dell)},3000)
        
  //     }
  //     else if(this.buyHp()){
  //       setTimeout(()=>{resolve(this.hp)},3000)
  //     }
  //     else{
  //       reject(this.errorObject)
  //     }

  //   })

  //   buyLaptop.then((res)=>{
  //     console.log("suc",res);
  //     this.promiseObject=JSON.stringify(res);
  //   }).catch((err)=>{
  //     console.log("err",err);
  //     this.promiseObject=JSON.stringify(err);

  //   })
    
  }

  PromiseFunction(){
    this.buyLaptop=new Promise((resolve,reject)=>{
     
      setTimeout(()=>{resolve(this.dellaw)},3000)
  
  })

  }

 
  fetch1(){
    this.PromiseFunction();
    this.buyLaptop.then(console.log);
   



}

async fetch2(){
  this.PromiseFunction();
  let res= await this.buyLaptop;
  console.log(res);
 

}

fetch3(){


}
}

