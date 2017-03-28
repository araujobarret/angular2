import {Component, OnInit} from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {WorkoutService} from "../../app/services/workout.service";
import {TabsPage} from "../tabs/tabs";

@Component({
  selector: 'page-workout-detail',
  templateUrl: 'workout-detail.html'
})
export class WorkoutDetailPage implements OnInit {
  private workout: any;
  private result: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _workoutService: WorkoutService){
  }

  ngOnInit(){
    this.workout = this.navParams.get('workout');
  }

  deleteWorkout(workoutId){
    this._workoutService.deleteWorkout(workoutId)
      .subscribe(data=> this.result,
      err => console.log(err),
      () => console.log("Workout deleted"));

    this.navCtrl.setRoot(TabsPage);
  }
}
