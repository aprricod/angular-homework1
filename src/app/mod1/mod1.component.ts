import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-mod1',
  templateUrl: './mod1.component.html',
  styleUrls: ['./mod1.component.css']
})
export class Mod1Component implements OnInit {
  @Input()
  param1 = '';
  @Output()
  event1 = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  setEmitEvent(value: string) {
    this.event1.emit(value);
    console.log(value);
  }

}
