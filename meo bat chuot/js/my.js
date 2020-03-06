function Rat(name, weight, speed) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.isalive = true;
    this.getName = function () {
        return this.name;
    };
    this.getWeight = function () {
        return this.weight;
    };
    this.getSpeed = function () {
        return this.speed;
    };
    this.Dead = function () {
        return that.isalive = false;
    };
    this.chat = function () {
        document.getElementById('chat').innerHTML = 'chit';
    }
}

function Cat(name, weight, maxspeed) {
    this.name = name;
    this.weight = weight;
    this.maxspeed = maxspeed;
    this.getName = function () {
        return this.name;
    };
    this.getWeight = function () {
        return this.weight;
    };
    this.getSpeed = function () {
        return this.maxspeed;
    };
    this.getCatch = function (cat, rat) {
        if (cat.maxspeed > rat.speed) {
            this.Eat(rat);
        } else {
            console.log('khong bat dc chuot')
        }
    };
    this.Eat = function (rat) {
        if(rat.isalive){
            this.weight += rat.weight;
        }
    };
    this.chat = function () {
        document.getElementById('chat').innerHTML = 'meo';
    }
}

let rat = new Rat('chuot',10,10);
let cat = new Cat('meo',30,20);
cat.getCatch(cat,rat);
console.log(cat.getWeight());



