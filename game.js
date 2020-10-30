const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Player {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.isAlive = true;
        this.hitCount = 0;
        this.hit = 20;
    }

    attack() {
        this.hitCount++;
        if (this.hitCount == 5) {
            this.hit = 50;
            this.hitCount = 0;
        } else {
            this.hit = 20;
        }

        return this.hit;
    }

    decreaseHealth(amount) {
        this.health -= amount;
    }


    increasehealth(amount){
        this.health += amount;
    }

    isKicking() {
        if (this.health <= 0) {
            this.isAlive = false;
        }
        return this.isAlive;
    }

}

class Enemy {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.isAlive = true;
        this.hit = 20;
    }

    attack() {
        return this.hit;
    }

    decreaseHealth(amount) {
        this.health -= amount;
    }


    isKicking() {
        if (this.health <= 0) {
            this.isAlive = false;
        }
        return this.isAlive;
    }

}

class Game {
    constructor(player, enemy) {
        this.player = player;
        this.enemy = enemy;
        this.rounds = 0;
    }

    start() {
        const question = () => {
            let strikeP = Math.ceil(Math.random() * 100 + 1);
            let strikeE = Math.ceil(Math.random() * 100 + 1);
            let healthIncrase = Math.ceil(Math.random() * 10 + 1);

            rl.question('Do you want to attack?', (answer) => {
                let res = answer.toLowerCase();
                if (res == 'yes') {
                    console.log('-------------------------');
                    console.log(`Player attacking: ${res}`);
                    console.log('-------------------------');

                    console.log('Player strike ', strikeP);
                    console.log('Enemy strike', strikeE);


                    if (strikeP > 0 && strikeP <= 50) {
                        this.enemy.decreaseHealth(this.player.attack());
                        this.status(this.player.name,this.player.health,this.enemy.health);
                    } else {
                        console.log(`${this.player.name}: ........attack missed`);
                    }

                    if (strikeE > 0 && strikeE <= 50) {
                        this.player.decreaseHealth(this.enemy.attack());
                        this.status(this.enemy.name,this.player.health,this.enemy.health);
                    } else {
                        console.log(`${this.enemy.name}: ........attack missed`);
                    }

                    if (this.player.isKicking() == false || this.enemy.isKicking() == false) {
                        console.log(`Game ended in ${this.rounds} rounds`)
                        if(!this.enemy.isKicking()){
                            console.log('Player won');
                        }else{
                            console.log('Enemy won');
                        }
                        rl.close();
                    }

                    this.rounds++;

                    question();
                }else if(res == 'run'){
                    console.log('Player ran away');
                    if (strikeE > 0 && strikeE <= 25) {
                        this.player.decreaseHealth(this.enemy.attack());
                        this.status(this.enemy.name,this.player.health,this.enemy.health);
                    } else {
                        console.log(`${this.enemy.name}: ........attack missed`);
                        console.log(`${this.player.health} has increased by ${healthIncrase}` );
                        this.player.increasehealth(healthIncrase);
                    }
                    question();
                } 
                
                else {
                    rl.close();
                }
            });
        }
        //start the game
        question();
    }

    status(activePlayer,playerHealth,enemyHealth){
        console.log(`\n\n${activePlayer} ....attacking \nPlayer Health: ${playerHealth} \nEnemy Health: ${enemyHealth}\n\n`)
    }
}


//player
let player = new Player('K', 120)

//random Enemy
let healthOptions = [100, 120];
let nameOptions = ['1', '2'];

let randomHealth = Math.round(Math.random());

let enemies = [];
// // number of enemies
// let numOfEnemies = 2;
// for(let i=0;i<numOfEnemies;i++){
//     enemies.push(new Enemy(i,randomHealth));
// }
// console.log('enemies',enemies);

let enemy1 = new Enemy('Enemy 1', healthOptions[randomHealth]);
let enemy2 = new Enemy('Enemy 2', healthOptions[randomHealth]);

enemies.push(enemy1, enemy2);

let game = new Game(player, enemy1);

game.start();