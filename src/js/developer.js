Class Apple{

    constructor(color, taste){
        this.color = color;
        this.taste = taste;
    }

getstats(){
    console.log(this.color + this.taste);
};

}

let apple = new Apple("red", "sweet");
apple.getstats();
