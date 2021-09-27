import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { ListComponent } from './observable/list/list.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { TimerComponent } from './observable/timer/timer.component';
import { IntervalTimerComponent } from './observable/interval-timer/interval-timer.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { CustomObservableComponent } from './observable/custom-observable/custom-observable.component';
const routes: Routes = [
  {
    path:'promise', component:PromiseComponent
  },
  {
    path:'observable', component:ObservableComponent,children:[

      {
        path:'', component:ListComponent
      },
      {
        path:'fromEvent', component:FromEventComponent
      },
      {
        path:'timer', component:TimerComponent
      },
      {
        path:'intervalTimer', component:IntervalTimerComponent
      },
      {
        path:'ofFrom', component:OfFromComponent
      },
      {
        path:'customObservable', component:CustomObservableComponent
      }
    ]
    

    
  },
  {
    path:'**', redirectTo:'promise'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
