import { Injectable } from '@angular/core';
import { Http ,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import  { Observable } from 'rxjs/Observable';




/*
  Generated class for the WorkoutService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class WorkoutService {

  apiKey: string;
  workoutsUrl : string;

  constructor(public http: Http) {
    console.log('Hello WorkoutService Provider');
  	this.apiKey = 'wgxq0kMgZHX0-C9bv6czfb-Cumaa6RUv';
  	this.workoutsUrl = 'https://api.mlab.com/api/1/databases/workoutapp/collections/workouts';

  }

  getWorkouts(){
  	return this.http.get(this.workoutsUrl+'?apiKey='+this.apiKey)
  				.map(res => res.json());
  }

  addWorkout(workout){
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    return this.http.post(this.workoutsUrl+'?apiKey='+this.apiKey,JSON.stringify(workout),
                {headers:headers})
                .map(res => res.json());
  }

  deleteWorkout(id){
    return this.http.delete(this.workoutsUrl+'/'+id+'?apiKey='+this.apiKey)
          .map(res => res.json());
  }

}
