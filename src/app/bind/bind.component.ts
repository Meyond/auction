import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.scss']
})
export class BindComponent implements OnInit {
  imgUrl = 'http://via.placeholder.com/400x220';
  isAddClass = true;

  constructor() {}

  ngOnInit() {}

  doOnClick(event) {
    console.log(event);
    this.isAddClass = !this.isAddClass;
  }

  doOnInput(event) {
    // DOM属性值
    console.log(event.target.value);
    // HTML属性值,不一定跟DOM属性一致
    console.log(event.target.getAttribute('value'));
  }
}
