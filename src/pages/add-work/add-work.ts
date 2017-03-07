import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { WorkoutService } from '../../providers/workout-service';
import { WorkoutPage } from '../workout/workout';

/*
  Generated class for the AddWork page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-work',
  templateUrl: 'add-work.html'
})
export class AddWorkPage {

  title:string;
  note:string;
  type:string;
  result: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private _service:WorkoutService) {}
  
  ionViewDidLoad() {
   }

  onSubmit():void{
  	let workout = {
      title: this.title,
      note:this.note,
      type:this.type
    }

    this._service.addWorkout(workout).subscribe(data => {
      this.result = data;
    }, err => console.log(err)
     , () => {  console.log('Workout Add');
               this.navCtrl.setRoot(WorkoutPage);
              } 
    );

    

  }

}
