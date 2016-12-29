import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-elvis',
  templateUrl: './directive-elvis.component.html',
  styleUrls: ['./directive-elvis.component.css']
})
export class DirectiveElvisComponent implements OnInit {
  task: any = {
    desc: 'Task description',
    responsible: {
      user: null
    }
  };
  constructor() { }

  ngOnInit() {
  }

}
