import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'hex-tile',
    templateUrl: './hex.component.html',
    styleUrls: ['./hex.component.css']
})
export class HexComponent implements OnInit {
    private width: number;
    private x: number;
    private points: Array<Array<number>>; // [[1,2], [2,3], [3,4]] etc...

    constructor(startX:number = 0, width: number = 50) {
        this.width = width;
        this.x = startX;
        this.setPoints([startX, width/2]);
     }

    ngOnInit() { }

    setPoints(left: Array<number>) {
        // Use the y attribut to determine height and width
        const height: number = 2 * left[1];
        const width: number = 2 * left[1];

        // flat top hex, left and right points are at max width
        this.points[0] = [width, left[1]];
        this.points[1] = [width * 0.77, height];
        this.points[2] = [width * 0.27, height];
        this.points[3] = [0, left[1]];
        this.points[4] = [width * 0.27, 0]
        this.points[5] = [width * 0.77, 0]
    }
}