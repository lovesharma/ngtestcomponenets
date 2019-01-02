import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  name: string = 'susil';
  ego: string = 'sat';
  name = new FormControl('');

  lo(b) { 
    console.log(b)
  }

  constructor() { }

  ngOnInit() {
  }

}
