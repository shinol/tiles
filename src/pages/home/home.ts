import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Hex } from '../../models/hex';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  @ViewChild('left') left: ElementRef;
  @ViewChild('right') right: ElementRef;
  @ViewChild('hex') hex: ElementRef;
  smallScale: boolean = false;
  hexTile = new Hex;

  constructor(public navCtrl: NavController) {
    
  }

  ngOnInit() {
      this.hexTile.setPoints([0,35]);
      TweenMax.set(this.hex.nativeElement, {
        attr: {
          points: this.hexTile.svgPoints(),
          fill: "#fff"
        },        
        x: 150,
        y: 150
      });
  }

  startAnimate() {
    TweenMax.to(this.left.nativeElement, 1, {
      attr: {
        points: '125,30 125,30 125,30 31.9,30 31.9,230 125,230 125,230 125,230 203.9,186.3 218.1,63.2'
      },
      repeat: -1,
      yoyo: true,
      ease: Cubic.easeInOut
    });
    TweenMax.to(this.right.nativeElement, 1, {
      attr: {
        points: '125,30 125,52.2 125,52.1 125,153.4 125,153.4 125,230 125,230 218.1,230 218.1,30 125,30'
      },
      repeat: -1,
      yoyo: true,
      ease: Cubic.easeInOut
    });
  }

  toggleScale() {
    
    if (this.smallScale) {
      TweenMax.to(this.hex.nativeElement, 0.5, {
        scale: 1,
        x: 250,
        transformOrigin: "50% 50%"
      });
    } else {
      TweenMax.to(this.hex.nativeElement, 0.5, {
        scale: 0.5,
        x: 150,
        transformOrigin: "50% 50%"
      });
    }

    this.smallScale = !this.smallScale;
  }

}
