import { Component, AfterViewInit } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Tile } from "../../models/tile";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements AfterViewInit {

  meta: Tile;
  tiles: Array<Array<number>> = [];

  

  constructor(public navCtrl: NavController) {}

  ngAfterViewInit() {
    // HEXOGRAPHER set to width=87 height=88 for the following to work
    this.meta = {
      width: 50,
      height: 50,
      horizontal: true,
      oneQuarter: 0,
      threeQuarter: 0
    };
    if (this.meta.horizontal) {
      this.meta.oneQuarter = Math.floor(this.meta.width * 0.25);
      this.meta.threeQuarter = Math.floor(this.meta.width * 0.75);
    } else {
      this.meta.oneQuarter = Math.floor(this.meta.height * 0.25);
      this.meta.threeQuarter = Math.floor(this.meta.height * 0.75);
    }

  }

  addPoint(loc: Array<number>) {
    // x, y location on a random clicjk depends on mouseclick coords
    console.log(loc);
    if (this.meta.horizontal) {
      this.tiles.push([
        loc[0] * this.meta.threeQuarter, 
        loc[0] % 2 != 0 ? loc[1] * this.meta.height + Math.floor(this.meta.height / 2) : loc[1] * this.meta.height
      ])
    }

  }

  panEvent($event) {
    const x = Math.floor($event.clientX / this.meta.threeQuarter);
    const y = Math.floor(
      x % 2 != 0 ? 
        ($event.clientY - 44 + this.meta.height /2) / this.meta.height - 1:
        ($event.clientY - 44) / this.meta.height
    );
    this.addPoint([x, y]);
  }

}
