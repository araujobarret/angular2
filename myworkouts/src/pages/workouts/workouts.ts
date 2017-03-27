import {Component, OnInit} from '@angular/core';

import { NavController } from 'ionic-angular';
import {WorkoutService} from "../../app/services/workout.service";

@Component({
  selector: 'page-workouts',
  templateUrl: 'workouts.html'
})
export class WorkoutsPage implements OnInit {


  constructor(public navCtrl: NavController, private __workoutService: WorkoutService) {
  }

  ngOnInit(){
    this.__workoutService.getWorkouts().subscribe(
      (data) => console.log(data)
    );
  }

}

