import { Component, OnInit, ViewEncapsulation, Output, EventEmitter, Input, TemplateRef, OnDestroy, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-firstday',
  templateUrl: './firstday.component.html',
  styleUrls: ['./firstday.component.css']

})
export class FirstdayComponent implements OnInit, OnDestroy, OnChanges {

  // @Input() embedTem: TemplateRef<any>;
  @Input() h: string = "in child";
  @Output() passValue: EventEmitter<string> = new EventEmitter();

  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');

  }

  ngOnChanges(changes: any) {
    console.log('changes', changes)
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
