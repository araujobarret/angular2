import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WorkoutService {
  apiKey: string = "HivqQ5CFDcASSxmLJYMcNjcXyerK-Po7";
  workoutsUrl: string = "https://api.mlab.com/api/1/databases/myworkoutsapp/collections/workouts";

  constructor(private http: Http){
  }

  getWorkouts(){
    return this.http.get(this.workoutsUrl + "?apiKey=" + this.apiKey)
      .map(res => res.json());
  }

  addWorkout(workout){
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post(this.workoutsUrl+"?apiKey="+this.apiKey, JSON.stringify(workout), {headers: headers})
      .map((res) => res.json);
  }

  deleteWorkout(workoutId){
    return this.http.delete(this.workoutsUrl+"/"+workoutId+"?apiKey=" + this.apiKey)
      .map(res => res.json());
  }
}
