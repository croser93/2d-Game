class World {
    level_1 = level_1;
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
    debugMode = true;

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
        this.keyboard = keyboard;
        this.draw();
        this.runSlow();
        this.runFast();
    }
    
/**
 * Sets the world reference for the character.
 */
    setWorld() {
        this.character.world = this; 
    }

 /**
 * Runs slow interval checks for game state updates.
 */   
    runSlow(){
       let slowinterval = setInterval(() => {
            this.collecableBar.setPercentage(this.character.coin);
            this.manaBar.setPercentage(this.character.mana);
            this.statusBar.setPercentage(this.character.live);
            this.checkCollisions();
            this.checkFallDamage;
            winOrLoseOverlay();
            this.enemieOutOfMAP()
        }, 1000 / 5);
        this.intervals.push(slowinterval);
    }  

/**
 * Runs fast interval checks for real-time game mechanics.
 */    
    runFast(){
        let fastinterval = setInterval(() => {
            this.checkAttack();
            this.checkCollect();
            this.checkAttackCollisions();
            this.checkJumpAttack();
        },1000 / 60)
        this.intervals.push(fastinterval);
    }

/**
 * Checks for collisions between the character and enemies.
 */    
    checkCollisions(){
    this.level_1.enemies.forEach((enemy) => {
                if(this.character.isColliding(enemy) && !enemy.dead && !this.character.isAboveGround()){
                    this.character.hit(enemy.damage)
                    this.statusBar.setPercentage(this.character.live)        
                }})} 

/**
 * Checks for collection of items by the character.
 */                
    checkCollect(){
        const collectables = [
            { items: this.level_1.coins, type: 'coin', statBar: this.collecableBar, amount: 10, collectItem: this.character.coin, charItem: 'coin', sound: this.coinSound },
            { items: this.level_1.strong, type: 'strong', statBar: this.manaBar, amount: 20, collectItem: this.character.mana, charItem: 'mana', sound: this.manaSound},
            { items: this.level_1.live, type: 'live', statBar: this.statusBar, amount: 20, collectItem: this.character.live, charItem: 'live', sound: this.liveSound}];
        collectables.forEach(({items, type, statBar, amount, collectItem, charItem, sound}) => {
            items.forEach((item, index) => {
                if(this.character.isColliding(item)){
                    this.character.collect(charItem, amount)
                    if (collectItem < 100) {
                        statBar.setPercentage(collectItem);
                        items.splice(index, 1);
                        playSound(sound);
                    }else return
                }
            });
        });
    }

/**
 * Checks if the character can perform a jump attack on enemies.
 */    
    checkJumpAttack(){
        this.level_1.enemies.forEach((enemy, index) => {
            if(this.isJumpingOnEnemy(enemy) && this.character.y > enemy.hitboxTop && !enemy.dead){
                if (enemy.live <= 0 && !enemy.dead) 
                    this.enemyDead(enemy);
                this.character.setSpeedY(12);       
                enemy.live -= 0
            }
        });
    }

isJumpingOnEnemy(enemy) {
    const characterBottom = this.character.y + this.character.hitboxOffsetY + (this.character.hitboxHeight || this.character.height);
    const enemyTop = enemy.y + enemy.hitboxOffsetY;
    const characterCenterX = this.character.x + this.character.hitboxOffsetX + (this.character.hitboxWidth || this.character.width) / 2;
    const enemyCenterX = enemy.x + enemy.hitboxOffsetX + (enemy.hitboxWidth || enemy.width) / 2;
    const maxDistance = (enemy.hitboxWidth || enemy.width) * 0.3;
    
    return characterBottom > enemyTop && 
           characterBottom < enemyTop + 20 &&
           this.character.speedY < 0 &&
           Math.abs(characterCenterX - enemyCenterX) < maxDistance;
}
    


/**
 * Determines if enough time has passed since the last hit to allow a jump attack.
 * @returns {boolean} True if jump attack is allowed, false otherwise.
 */    
    canJumpAttack() {
    if (!this.character.lastHit) return true;
        const now = Date.now();
        return now - this.character.lastHit > 500; 
    }

/**
 * Checks if the player initiates an attack and creates a new attack object.
 */    
    checkAttack() {
        if (this.keyboard.SPACE && this.character.mana > 0) {
            let newattack = new Attack(this.character.x, this.character.y, this.character.otherDirection);
            this.attack.push(newattack);
            this.character.mana -= 5
            this.keyboard.SPACE = false;
            playSoundclone(this.damageSound);
            this.character.resetIdle();
        }
    }

/**
 * Checks if any attack objects hit enemies 
 */
    checkAttackCollisions() {
        this.attack.forEach((attackObj) => {
            const baseDamage = attackObj.damage
             if (attackObj.hasDealtDamage) return;
            this.level_1.enemies.forEach((enemy) => {
                if (attackObj.isColliding(enemy) && !enemy.dead && !attackObj.hasDealtDamage ) {
                    attackObj.hasDealtDamage = true;
                    this.enemieHit(enemy, attackObj, baseDamage);
                } else{setTimeout(() => {
                    this.removeAttack(attackObj);
                }, 2000);}
            });
        });
    }

/**
 * Enemie Hit with Objekt 
 */
   enemieHit(enemy, attackObj, baseDamage) {
        this.calcDamage(enemy, baseDamage);
        clearInterval(attackObj.throwInterval);
        attackObj.speedY = 0;
        attackObj.acceleration = 0;
        attackObj.playExplosion();

        setTimeout(() => {
            this.removeAttack(attackObj);
        }, 1000);
    }

/**
 * Calculate damage from Character and Enemie resistance
 */
    calcDamage(enemy, baseDamage) {
        const finalDamage = baseDamage * enemy.resistance;
        enemy.live -= finalDamage;
        if (enemy.live <= 0) {
            enemy.dead = true;
            this.enemyDead(enemy);
        }
    }

/**
 * Splice attackObj form attack array
 */
    removeAttack(attackObj) {
        const index = this.attack.indexOf(attackObj);
        if (index > -1) {
            this.attack.splice(index, 1);
        }
    }

/**
 * Calculation enemie damage with multiplier
 */
    damageOnEnemie(enemy, attackObj){
        enemy.live -= attackObj.damage * (enemy.damageMultiplier || 1);
        attackObj.hitEnemies.push(enemy);
    }

/**
 * Checks if enemies have fallen out of the map boundaries.
 */
    enemieOutOfMAP(){
        this.level_1.enemies.forEach((enemy) => {
            if(enemy.y >= 300){
            enemy.dead = true        
            this.enemyDead(enemy)}
        }) 
    }

/**
 * Handles enemy death and removal from the game.
 * @param {Object} enemy - The enemy object that has died.
 */    
    enemyDead(enemy){
        enemy.dead = true;
        if (world.enemies.length > 0) {
            enemy.stopInterval();
            setTimeout(() => {
                const index = this.level_1.enemies.indexOf(enemy);
                if (index > -1) {
                    this.level_1.enemies.splice(index, 1);
                }
            }, 5000);        
        }
    }

/**
 * Main draw loop that renders all game objects to the canvas.
 */
    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.translate(this.camera_x, 0)
        this.addObjectsToMap(this.background);
        this.addObjectsToMap(this.backgroundassets);
        this.addObjectsToMap(this.backgroundassetsunderworld);
        this.addObjectsToMap(this.coins)
        this.addObjectsToMap(this.strong)
        this.addObjectsToMap(this.live)
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.addToMap(this.manaBar);
        this.addToMap(this.collecableBar);
        this.ctx.translate(this.camera_x, 0)
        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap(this.attack);
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);    
        let self = this;
        requestAnimationFrame(function() {
            self.draw()
        });
    }

/**
 * Adds multiple objects to the map.
 * @param {Array} objects - Array of objects to be added to the map.
 */    
    addObjectsToMap(objects){
        objects.forEach(o => {
            this.addToMap(o)
        })
    }

/**
 * Adds a single item to the map with proper transformations.
 * @param {Object} item - The item to be added to the map.
 * @param {number} x - Optional x-coordinate parameter.
 */
    addToMap(item, x) {
        if (item.otherDirection) {
            this.ctx.save();
            this.ctx.translate(item.width, 0);
            this.ctx.scale(-1, 1);
            item.x = item.x * -1;    
        }        
        item.drawItem(this.ctx);
        if (this.debugMode) 
            item.drawFrame(this.ctx);
        
        if (item.otherDirection) {
            item.x = item.x * -1 ;
            this.ctx.restore();   
        }
    }

}
