import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';
import { WorkoutPage } from '../pages/workout/workout';

import { WorkoutService } from '../providers/workout-service';
import { WorkoutDetailsPage } from '../pages/workout-details/workout-details';

import { AddWorkPage } from '../pages/add-work/add-work';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    TabsPage,
    WorkoutPage,
    AddWorkPage,
    WorkoutDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    TabsPage,
    WorkoutPage,
    AddWorkPage,
    WorkoutDetailsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},WorkoutService]
})
export class AppModule {}

