import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {WorkoutService} from "../../app/services/workout.service";
import {WorkoutsPage} from "../workouts/workouts";
import {TabsPage} from "../tabs/tabs";

@Component({
  selector: 'page-add-workout',
  templateUrl: 'add-workout.html'
})
export class AddWorkoutPage {
  title: string;
  note: string;
  type: string;
  result: any;
  constructor(public navCtrl: NavController, private _workoutService: WorkoutService) {
  }

  onSubmit(){
    var workout = {
      title: this.title,
      note: this.note,
      type: this.type
    }
    this._workoutService.addWorkout(workout)
      .subscribe((data) => {
        this.result = data;
      },
      err => console.log(err),
      () => console.log('Workout Added'));
    this.navCtrl.setRoot(TabsPage);
  }
}

