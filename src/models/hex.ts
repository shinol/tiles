
export class Hex {
    // Initial data for a single hex

    private points = [[30,15], [23,28], [8,28], [0,15], [8,2], [23,2]];
    private _origin: Array<number>;
    private _leftX: number;
    private _rightX: number;
    private _topY: number;
    private _bottomY: number;
    private _right: Array<number>; //make a change

    svgPoints() {
        // return the points array as a string "30,15 23,28 8,28 0,15 8,2 23,2"
        let outStr:string = '';
        this.points.forEach((item, index) => {
            outStr = outStr.concat(item[0].toString(), ",",  item[1].toString(), " ");
        });
        return outStr.trim();
    }

    origin() {
        if (!this._origin) return [0, 0];
        return this._origin;
    }

    topLeft() {
        if (!this._origin) return [0, 0];
        return [this._leftX, this._topY];
    }

    topRight() {
        if (!this._origin) return [0, 0];
        return [this._rightX, this._topY];
    }
    
    bottomLeft() {
        if (!this._origin) return [0, 0];
        return [this._leftX, this._bottomY];
    }

    bottomRight() {
        if (!this._origin) return [0, 0];
        return [this._rightX, this._bottomY];
    }

    setPoints(left: Array<number>) {
        // Use the y attribut to determine height and width
        
        const heightWidth: number = 2 * left[1];
        this._leftX = Math.floor(heightWidth*0.25);
        this._rightX = Math.floor(heightWidth*0.75);
        this._topY = 0;
        this._bottomY = heightWidth;
        this._origin = left;
        this._right = left.slice();
        this._right[1] = heightWidth;

        // flat top hex, left and right points are at max width
        this.points[0] = [heightWidth, left[1]];
        this.points[1] = [this._rightX, heightWidth];
        this.points[2] = [this._leftX, heightWidth];
        this.points[3] = [0, left[1]];
        this.points[4] = [this._leftX, 0]
        this.points[5] = [this._rightX, 0]
    }
}