import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Tile } from '../../models/tile';

@Component({
    selector: '[hex-tile]',
    templateUrl: './hex.component.html'
})
export class HexComponent implements AfterViewInit {

    // @Input() width: number;
    // @Input() height: number;
    // @Input()  x: number;
    // @Input() y: number;
    // @Input() horizontal: boolean;
    @Input() meta: Tile;
    @Input() tile: Array<number>;
    @ViewChild('hex') hex: ElementRef;

    constructor() {}

    ngAfterViewInit() {
        // console.log(this.meta, this.tile, this.hex);
        TweenMax.set(this.hex.nativeElement, {
            attr: {
            points: this.setPointsHorizontal()
            },        
            x: this.tile[0],
            y: this.tile[1]
        });
     }

    setPointsHorizontal() {
        // Use the y attribut to determine height and width
        const quarter = Math.floor(this.meta.width * 0.25);
        const threeQuarter = Math.floor(this.meta.width * 0.75);
        let halfHeight: number; // start and end of "flat-top" tile
        let theHeight: number;
        if (this.meta.height) {
            halfHeight = Math.floor(this.meta.height / 2);
            theHeight = this.meta.height;
        } else {
            halfHeight = Math.floor(this.meta.width / 2);
            theHeight = this.meta.width;
        }
        
        let outStr: string;
        outStr = '0,' + halfHeight.toString() + ' ';
        outStr += quarter.toString() + ',0' + ' ';
        outStr += threeQuarter.toString() + ',0' + ' ';
        outStr += this.meta.width.toString() + ',' + halfHeight.toString() + ' ';
        outStr += threeQuarter.toString() + ',' + theHeight + ' ';
        outStr += quarter.toString() + ',' + theHeight + ' ';

        return outStr;
    }
}