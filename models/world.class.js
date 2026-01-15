class World {
    level_1 = level_1
    character = new Character();
    enemies = level_1.enemies;
    background = level_1.background;
    backgroundassets = level_1.backgroundassets;
    backgroundassetsunderworld = level_1.backgroundassetsunderworld;
    statusBar = new StatusBar();
    manaBar = new ManaBar();
    collecableBar = new CollectableBar();
    coins = level_1.coins;
    strong = level_1.strong;
    live = level_1.live;
    attack = [];
    intervals = [];

    manaSound = SOUNDS.collectables.MANA;
    coinSound = SOUNDS.collectables.COIN;
    liveSound = SOUNDS.collectables.LIVE;
    damageSound = SOUNDS.character.DAMAGE;

    keyboard;
    ctx;
    camera_x = 0;
    constructor(canvas, keyboard){

        this.setWorld();
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard
        this.draw();
        this.runSlow();
        this.runFast();
    }
    
    setWorld() {
        this.character.world = this; 
    }
    
    runSlow(){
       let slowinterval = setInterval(() => {
            this.checkCollisions();
            this.collecableBar.setPercentage(this.character.coin);
            this.manaBar.setPercentage(this.character.mana);
            this.statusBar.setPercentage(this.character.live);
            this.checkFallDamage
            this.canJumpAttack()
            winOrLoseOverlay();
        }, 1000 / 5);
        this.intervals.push(slowinterval);
    }  

    runFast(){
        let fastinterval = setInterval(() => {
            this.checkAttack();
            this.checkCollect();
            this.checkAttackHit();
            this.checkJumpAttack();
        },1000 / 60)
        this.intervals.push(fastinterval);
    }
       
    checkCollisions(){
    this.level_1.enemies.forEach((enemy) => {
                if(this.character.isColliding(enemy) &&!enemy.dead){
                    this.character.hit(enemy.damage)
                    this.statusBar.setPercentage(this.character.live)        
                }})} 

    checkCollect(){
        const collectables = [
            { items: this.level_1.coins, type: 'coin', statBar: this.collecableBar, amount: 10, collectItem: this.character.coin, charItem: 'coin', sound: this.coinSound },
            { items: this.level_1.strong, type: 'strong', statBar: this.manaBar, amount: 20, collectItem: this.character.mana, charItem: 'mana', sound: this.manaSound},
            { items: this.level_1.live, type: 'live', statBar: this.statusBar, amount: 20, collectItem: this.character.live, charItem: 'live', sound: this.liveSound}
        ];

        collectables.forEach(({items, type, statBar, amount, collectItem, charItem, sound}) => {
            items.forEach((item, index) => {
                if(this.character.isColliding(item)){
                    this.character.collect(charItem, amount);
                    statBar.setPercentage(collectItem);
                    items.splice(index, 1);
                   playSound(sound)
                }
            });
        });
    }

    checkJumpAttack(){
        this.level_1.enemies.forEach((enemy, index) => {
            if(this.character.isColliding(enemy) && this.canJumpAttack() &&this.character.y <= 200 && !enemy.dead && Math.abs(this.character.x - enemy.x) <= 25){
                enemy.live -= 25;
                if (enemy.live <= 0 && !enemy.dead) {
                    this.enemyDead(enemy)
                }
                this.character.setSpeedY(10)
            }
        });
    }

    canJumpAttack() {
    if (!this.character.lastHit) return true;
        const now = Date.now();
        return now - this.character.lastHit > 500; 
    }


    checkAttack() {
        if (this.keyboard.SPACE && this.character.mana > 0) {
        let newattack = new Attack(this.character.x, this.character.y, this.character.otherDirection);
        this.attack.push(newattack);
        this.character.mana -= 5
        this.keyboard.SPACE = false;
        playSoundloop(this.damageSound)
        }
    }

    checkAttackHit() { 
    this.attack.forEach((attackObj, attackIndex) => {
        this.level_1.enemies.forEach((enemy, enemyIndex) => {
            if (attackObj.isColliding(enemy)) {
                if (!attackObj.hitEnemies) {
                    attackObj.hitEnemies = [];
                }
                
                if (!attackObj.hitEnemies.includes(enemy)) {
                    enemy.live -= attackObj.damage * (enemy.damageMultiplier || 1);
                    attackObj.hitEnemies.push(enemy);
                    
                    if (enemy.live <= 0 && !enemy.dead) {
                        this.enemyDead(enemy)
                    }
                }
            }
        });
    });
}

    enemyDead(enemy){
        enemy.dead = true;
        console.log(enemy.dead)
        enemy.stopInterval();
        setTimeout(() => {
            const index = this.level_1.enemies.indexOf(enemy);
            if (index > -1) {
                this.level_1.enemies.splice(index, 1);
            }
        }, 3000);
    }

    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height) //cleart die funktion

        this.ctx.translate(this.camera_x, 0)

        this.addObjectsToMap(this.background);
        this.addObjectsToMap(this.backgroundassets);
        this.addObjectsToMap(this.backgroundassetsunderworld);
        this.addObjectsToMap(this.attack);
        this.addToMap(this.character);
        this.addObjectsToMap(this.coins)
        this.addObjectsToMap(this.strong)
        this.addObjectsToMap(this.live)

        
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.addToMap(this.manaBar);
        this.addToMap(this.collecableBar);
        this.ctx.translate(this.camera_x, 0)


        this.addObjectsToMap(this.enemies);
        this.ctx.translate(-this.camera_x, 0);
        
        let self = this;
        requestAnimationFrame(function() {
            self.draw()
        });

    }

    addObjectsToMap(objects){
        objects.forEach(o => {
            this.addToMap(o)
        })

    }

    addToMap(item, x) {
        if (item.otherDirection) {
            this.ctx.save();
            this.ctx.translate(item.width, 0);
            this.ctx.scale(-1, 1);
            item.x = item.x * -1;    
        }
        
        item.drawItem(this.ctx);
        if (this.debugMode) {
            item.drawFrame(this.ctx);
        }

        if (item.otherDirection) {
            item.x = item.x * -1 ;
            this.ctx.restore();   
        }
    }

}
