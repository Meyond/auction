import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {

  @Input() // 告诉组件这个属性应该由父组件传递过来
  rating = 0;
  stars: boolean[];

  constructor() { }

  ngOnInit() {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      // rating=3.5, return [false,false,false,true,true ]
      this.stars.push(i > this.rating);
    }
  }
}
