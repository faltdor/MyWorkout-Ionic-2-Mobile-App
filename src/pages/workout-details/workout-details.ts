import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WorkoutService } from '../../providers/workout-service';
import { WorkoutPage } from '../workout/workout';


/*
  Generated class for the WorkoutDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-workout-details',
  templateUrl: 'workout-details.html'
})
export class WorkoutDetailsPage {
  workout = {};
  result : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private _service:WorkoutService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutDetailsPage');
    this.workout = this.navParams.get('workout');

  }

  deleteWorkout(wId){
    this._service.deleteWorkout(wId).subscribe(data => {
      this.result = data;
    }, err => console.log(err)
     , () => { console.log('Workout Add'); 
             this.navCtrl.setRoot(WorkoutPage);

   });

    

  }

}
