import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { ListComponent } from './observable/list/list.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalTimerComponent } from './observable/interval-timer/interval-timer.component';
import { TimerComponent } from './observable/timer/timer.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { CustomObservableComponent } from './observable/custom-observable/custom-observable.component';

@NgModule({
  declarations: [
    AppComponent,
    PromiseComponent,
    ObservableComponent,
    ListComponent,
    FromEventComponent,
    IntervalTimerComponent,
    TimerComponent,
    OfFromComponent,
    CustomObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
