
export class Hex {
    // Initial data for a single hex

    private points = [[30,15], [23,28], [8,28], [0,15], [8,2], [23,2]];

    svgPoints() {
        // return the points array as a string "30,15 23,28 8,28 0,15 8,2 23,2"
        let outStr:string = '';
        this.points.forEach((item, index) => {
            outStr = outStr.concat(item[0].toString(), ",",  item[1].toString(), " ");
        });
        return outStr.trim();
    }

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