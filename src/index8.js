class classA {
    constructor (x,y) {
        this.x = x;
        this.y = y;
    }
    sayYes() {
        console.log(`this is ${this.x} and ${this.y}`)
    }
}
class classB extends classA {
    constructor (x,y,z) {
        super(x, y);
        this.z = z;
    }
    sayYes2() {
        console.log(`this is ${this.x} and ${this.y} ${this.z}`)
    }
}

let c = new classB(1,2,3);
c.sayYes2();