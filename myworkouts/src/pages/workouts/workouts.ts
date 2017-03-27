import {Component, OnInit} from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {WorkoutService} from "../../app/services/workout.service";
import {WorkoutDetailPage} from "../workout-details/workout-details";

@Component({
  selector: 'page-workouts',
  templateUrl: 'workouts.html'
})
export class WorkoutsPage implements OnInit {
  workouts: any[];

  constructor(public navCtrl: NavController, private _workoutService: WorkoutService, private _navParams: NavParams) {
  }

  ngOnInit(){
    this._workoutService.getWorkouts().subscribe(
      (data) => {
        this.workouts = data;
      }
    );
  }

  workoutSelected(workout){
    this.navCtrl.push(WorkoutDetailPage, {workout: workout});
  }

}

