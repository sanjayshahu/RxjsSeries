import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }

  print(sel,vC){
    let liElement=document.createElement('li');
    liElement.innerText=vC;
    document.getElementById(sel).appendChild(liElement);

  }
}
