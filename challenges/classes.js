class CuboidMaker {
    constructor(attrs){
        this.length = attrs.length,
        this.width = attrs.width,
        this.height = attrs.height
    };

    volume(length, width, height) {
        this.volume = this.length * this.width * this.height;
        return this.volume;
    };

    surfaceArea(length, width, height) {
        this.surfaceArea = 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
        return this.surfaceArea;
    };
};

const Cuboid = new CuboidMaker({
    length: 5,
    width: 4,
    height: 5
});



console.log(Cuboid.volume()); // 100
console.log(Cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.