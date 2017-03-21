/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { it, describe, expect, injectAsync, TestComponentBuilder } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavigationComponent } from './navigation.component';

describe('Component: Navigation', () =>{
  it('should render its HTML partial', injectAsync([], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(NavigationComponent
      .then(fixture => {
        let element = fixture.nativeElement;
        fixture.detectChanges();
        expect(element.innerHTML).toContain('Seek');
      }));
  }));
});

// describe('NavigationComponent', () => {
//   let component: NavigationComponent;
//   let fixture: ComponentFixture<NavigationComponent>;
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ NavigationComponent ]
//     })
//     .compileComponents();
//   }));
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(NavigationComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
