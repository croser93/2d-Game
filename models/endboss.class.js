class Endboss extends MovableObject {
    height = 300;
    width = 300;
    y= 100;
    currentImage = 0;
    world;
    live = 100;
    dead = false;
    intervals = []
    firstContact = false
    world;
    speed = 1;
    damage = 20;

    hitboxOffsetX = 80;
    hitboxOffsetY = 60;
    hitboxWidth = 140;
    hitboxHeight = 200;

    IDLE = MOVABELS.boss.IMAGES_IDLE
    WALK = MOVABELS.boss.IMAGES_WALK
    DYING = MOVABELS.boss.IMAGES_DYING
    ATTACK = MOVABELS.boss.IMAGES_ATTACK

    constructor() {
        super().loadImage('gameassets/Hell_Knight/PNG/PNG Sequences/Idle/0_Hell_Knight_Idle_000.png')
        this.loadImages(this.IDLE);
        this.loadImages(this.DYING);
        this.loadImages(this.ATTACK);
        this.loadImages(this.WALK);
        this.x = 3480;
        this.otherDirection = true;
        this.animateBoss();
    }


    animateBoss() {
    let stateTimer = 0;
    let state = 0;
    
    const animateBoss = setInterval(() => {
        if (world.character.x > 3180) {
            if (!this.firstContact) {
                this.firstContact = true;
                state = 0;
                stateTimer = 0;
            }
            this.updateBossState(state);
            stateTimer += 100;
            
            if (stateTimer >= 5000) {
                state++;
                if (state > 2) state = 0;
                stateTimer = 0;
            }
        } else {
            this.idleState();
        }
    }, 1000 / 20);
    this.intervals.push(animateBoss);
}

    updateBossState(state) {
        if (state === 0) {
            this.walkState();
        } else if (state === 1) {
            this.idleState();
        } else if (state === 2) {
            this.attackState();
        }
    }

    attackState() {
        this.isAttacking = true;
        this.hitboxOffsetX = 20;
        this.hitboxWidth = 200;
        this.playAnimationLoop(this.ATTACK);
    }

    walkState() {
        this.hitboxOffsetX = 80;
        this.hitboxWidth = 140;
        this.isAttacking = false;
        this.moveLeft(1);
        this.playAnimationLoop(this.WALK);
    }

    idleState() {
        this.isAttacking = false;
        this.playAnimationLoop(this.IDLE);
    }

    
    stopInterval(){
            this.intervals.forEach(clearInterval)
            this.playAnimationOnce(this.DYING);
        }
}
