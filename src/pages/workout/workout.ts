import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WorkoutService } from '../../providers/workout-service';
import { WorkoutDetailsPage } from '../workout-details/workout-details';

/*
  Generated class for the Workout page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-workout',
  templateUrl: 'workout.html'
})
export class WorkoutPage {

  workouts:any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private _service:WorkoutService) {
    
  }

  ionViewDidLoad() {
      this._service.getWorkouts().subscribe(workouts => {    	
    	this.workouts = workouts;
    });
  }

  workoutSelected(event,workout):void{
  	this.navCtrl.push(WorkoutDetailsPage,{workout:workout});
  }

}
