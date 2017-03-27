import {Component, OnInit} from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {WorkoutService} from "../../app/services/workout.service";

@Component({
  selector: 'page-workout-detail',
  templateUrl: 'workout-detail.html'
})
export class WorkoutDetailPage implements OnInit {
  private workout: any;

  constructor(public navCtrl: NavController, public navParams: NavParams){
  }

  ngOnInit(){
    this.workout = this.navParams.get('workout');
  }
}
