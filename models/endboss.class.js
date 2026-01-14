class Endboss extends MovableObject {

    IMAGES_IDLE = [
            'gameassets/Hell_Knight/PNG/PNG Sequences/Idle/0_Hell_Knight_Idle_000.png',
            'gameassets/Hell_Knight/PNG/PNG Sequences/Idle/0_Hell_Knight_Idle_001.png',
            'gameassets/Hell_Knight/PNG/PNG Sequences/Idle/0_Hell_Knight_Idle_002.png',
            'gameassets/Hell_Knight/PNG/PNG Sequences/Idle/0_Hell_Knight_Idle_003.png',
            'gameassets/Hell_Knight/PNG/PNG Sequences/Idle/0_Hell_Knight_Idle_004.png',
            'gameassets/Hell_Knight/PNG/PNG Sequences/Idle/0_Hell_Knight_Idle_005.png',
            'gameassets/Hell_Knight/PNG/PNG Sequences/Idle/0_Hell_Knight_Idle_006.png',
            'gameassets/Hell_Knight/PNG/PNG Sequences/Idle/0_Hell_Knight_Idle_007.png',
            'gameassets/Hell_Knight/PNG/PNG Sequences/Idle/0_Hell_Knight_Idle_008.png',
            'gameassets/Hell_Knight/PNG/PNG Sequences/Idle/0_Hell_Knight_Idle_009.png',
            'gameassets/Hell_Knight/PNG/PNG Sequences/Idle/0_Hell_Knight_Idle_010.png',
            'gameassets/Hell_Knight/PNG/PNG Sequences/Idle/0_Hell_Knight_Idle_011.png',
            'gameassets/Hell_Knight/PNG/PNG Sequences/Idle/0_Hell_Knight_Idle_012.png',
            'gameassets/Hell_Knight/PNG/PNG Sequences/Idle/0_Hell_Knight_Idle_013.png',
            'gameassets/Hell_Knight/PNG/PNG Sequences/Idle/0_Hell_Knight_Idle_014.png',
            'gameassets/Hell_Knight/PNG/PNG Sequences/Idle/0_Hell_Knight_Idle_015.png',
            'gameassets/Hell_Knight/PNG/PNG Sequences/Idle/0_Hell_Knight_Idle_016.png',
            'gameassets/Hell_Knight/PNG/PNG Sequences/Idle/0_Hell_Knight_Idle_017.png',
    ];

    IMAGES_DYING = [
            'gameassets/Hell_Knight/PNG/PNG Sequences/Dying/0_Hell_Knight_Dying_000.png',
            'gameassets/Hell_Knight/PNG/PNG Sequences/Dying/0_Hell_Knight_Dying_001.png',
            'gameassets/Hell_Knight/PNG/PNG Sequences/Dying/0_Hell_Knight_Dying_002.png',
            'gameassets/Hell_Knight/PNG/PNG Sequences/Dying/0_Hell_Knight_Dying_003.png',
            'gameassets/Hell_Knight/PNG/PNG Sequences/Dying/0_Hell_Knight_Dying_004.png',
            'gameassets/Hell_Knight/PNG/PNG Sequences/Dying/0_Hell_Knight_Dying_005.png',
            'gameassets/Hell_Knight/PNG/PNG Sequences/Dying/0_Hell_Knight_Dying_006.png',
            'gameassets/Hell_Knight/PNG/PNG Sequences/Dying/0_Hell_Knight_Dying_007.png',
            'gameassets/Hell_Knight/PNG/PNG Sequences/Dying/0_Hell_Knight_Dying_008.png',
            'gameassets/Hell_Knight/PNG/PNG Sequences/Dying/0_Hell_Knight_Dying_009.png',
            'gameassets/Hell_Knight/PNG/PNG Sequences/Dying/0_Hell_Knight_Dying_010.png',
            'gameassets/Hell_Knight/PNG/PNG Sequences/Dying/0_Hell_Knight_Dying_011.png',
            'gameassets/Hell_Knight/PNG/PNG Sequences/Dying/0_Hell_Knight_Dying_012.png',
            'gameassets/Hell_Knight/PNG/PNG Sequences/Dying/0_Hell_Knight_Dying_013.png',
            'gameassets/Hell_Knight/PNG/PNG Sequences/Dying/0_Hell_Knight_Dying_014.png',

    ];

    IMAGES_WALK= [
        'gameassets/Hell_Knight/PNG/PNG Sequences/Walking/0_Hell_Knight_Walking_000.png',
        'gameassets/Hell_Knight/PNG/PNG Sequences/Walking/0_Hell_Knight_Walking_001.png',
        'gameassets/Hell_Knight/PNG/PNG Sequences/Walking/0_Hell_Knight_Walking_002.png',
        'gameassets/Hell_Knight/PNG/PNG Sequences/Walking/0_Hell_Knight_Walking_003.png',
        'gameassets/Hell_Knight/PNG/PNG Sequences/Walking/0_Hell_Knight_Walking_004.png',
        'gameassets/Hell_Knight/PNG/PNG Sequences/Walking/0_Hell_Knight_Walking_005.png',
        'gameassets/Hell_Knight/PNG/PNG Sequences/Walking/0_Hell_Knight_Walking_006.png',
        'gameassets/Hell_Knight/PNG/PNG Sequences/Walking/0_Hell_Knight_Walking_007.png',
        'gameassets/Hell_Knight/PNG/PNG Sequences/Walking/0_Hell_Knight_Walking_008.png',
        'gameassets/Hell_Knight/PNG/PNG Sequences/Walking/0_Hell_Knight_Walking_009.png',
        'gameassets/Hell_Knight/PNG/PNG Sequences/Walking/0_Hell_Knight_Walking_010.png',
        'gameassets/Hell_Knight/PNG/PNG Sequences/Walking/0_Hell_Knight_Walking_011.png',
        'gameassets/Hell_Knight/PNG/PNG Sequences/Walking/0_Hell_Knight_Walking_012.png',
        'gameassets/Hell_Knight/PNG/PNG Sequences/Walking/0_Hell_Knight_Walking_013.png',
        'gameassets/Hell_Knight/PNG/PNG Sequences/Walking/0_Hell_Knight_Walking_014.png',
        'gameassets/Hell_Knight/PNG/PNG Sequences/Walking/0_Hell_Knight_Walking_015.png',
        'gameassets/Hell_Knight/PNG/PNG Sequences/Walking/0_Hell_Knight_Walking_016.png',
        'gameassets/Hell_Knight/PNG/PNG Sequences/Walking/0_Hell_Knight_Walking_017.png',
        'gameassets/Hell_Knight/PNG/PNG Sequences/Walking/0_Hell_Knight_Walking_018.png',
        'gameassets/Hell_Knight/PNG/PNG Sequences/Walking/0_Hell_Knight_Walking_019.png',
        'gameassets/Hell_Knight/PNG/PNG Sequences/Walking/0_Hell_Knight_Walking_020.png',
        'gameassets/Hell_Knight/PNG/PNG Sequences/Walking/0_Hell_Knight_Walking_021.png',
        'gameassets/Hell_Knight/PNG/PNG Sequences/Walking/0_Hell_Knight_Walking_022.png',
        'gameassets/Hell_Knight/PNG/PNG Sequences/Walking/0_Hell_Knight_Walking_023.png',

    ];

    IMAGES_ATTACK= [
        'gameassets/Hell_Knight/PNG/PNG Sequences/Slashing/0_Hell_Knight_Slashing_000.png',
        'gameassets/Hell_Knight/PNG/PNG Sequences/Slashing/0_Hell_Knight_Slashing_001.png',
        'gameassets/Hell_Knight/PNG/PNG Sequences/Slashing/0_Hell_Knight_Slashing_002.png',
        'gameassets/Hell_Knight/PNG/PNG Sequences/Slashing/0_Hell_Knight_Slashing_003.png',
        'gameassets/Hell_Knight/PNG/PNG Sequences/Slashing/0_Hell_Knight_Slashing_004.png',
        'gameassets/Hell_Knight/PNG/PNG Sequences/Slashing/0_Hell_Knight_Slashing_005.png',
        'gameassets/Hell_Knight/PNG/PNG Sequences/Slashing/0_Hell_Knight_Slashing_006.png',
        'gameassets/Hell_Knight/PNG/PNG Sequences/Slashing/0_Hell_Knight_Slashing_007.png',
        'gameassets/Hell_Knight/PNG/PNG Sequences/Slashing/0_Hell_Knight_Slashing_008.png',
        'gameassets/Hell_Knight/PNG/PNG Sequences/Slashing/0_Hell_Knight_Slashing_009.png',
        'gameassets/Hell_Knight/PNG/PNG Sequences/Slashing/0_Hell_Knight_Slashing_010.png',
        'gameassets/Hell_Knight/PNG/PNG Sequences/Slashing/0_Hell_Knight_Slashing_011.png',

    ];
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

    constructor() {
        super().loadImage('gameassets/Hell_Knight/PNG/PNG Sequences/Idle/0_Hell_Knight_Idle_000.png')
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_DYING);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_WALK);
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
        this.playAnimationLoop(this.IMAGES_ATTACK);
    }

    walkState() {
        this.hitboxOffsetX = 80;
        this.hitboxWidth = 140;
        this.isAttacking = false;
        this.moveLeft(1);
        this.playAnimationLoop(this.IMAGES_WALK);
    }

    idleState() {
        this.isAttacking = false;
        this.playAnimationLoop(this.IMAGES_IDLE);
    }

    
    stopInterval(){
            this.intervals.forEach(clearInterval)
            this.playAnimationOnce(this.IMAGES_DYING);
        }
}
