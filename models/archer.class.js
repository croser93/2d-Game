class Archer extends Character{
        IMAGES_IDLE = [
            'gameassets/Archer/PNG/PNG Sequences/Idle/0_Archer_Idle_000.png',
            'gameassets/Archer/PNG/PNG Sequences/Idle/0_Archer_Idle_001.png',
            'gameassets/Archer/PNG/PNG Sequences/Idle/0_Archer_Idle_002.png',
            'gameassets/Archer/PNG/PNG Sequences/Idle/0_Archer_Idle_003.png',
            'gameassets/Archer/PNG/PNG Sequences/Idle/0_Archer_Idle_004.png',
            'gameassets/Archer/PNG/PNG Sequences/Idle/0_Archer_Idle_005.png',
            'gameassets/Archer/PNG/PNG Sequences/Idle/0_Archer_Idle_006.png',
            'gameassets/Archer/PNG/PNG Sequences/Idle/0_Archer_Idle_007.png',
            'gameassets/Archer/PNG/PNG Sequences/Idle/0_Archer_Idle_008.png',
            'gameassets/Archer/PNG/PNG Sequences/Idle/0_Archer_Idle_009.png',
            'gameassets/Archer/PNG/PNG Sequences/Idle/0_Archer_Idle_010.png',
            'gameassets/Archer/PNG/PNG Sequences/Idle/0_Archer_Idle_011.png',
            'gameassets/Archer/PNG/PNG Sequences/Idle/0_Archer_Idle_012.png',
            'gameassets/Archer/PNG/PNG Sequences/Idle/0_Archer_Idle_013.png',
            'gameassets/Archer/PNG/PNG Sequences/Idle/0_Archer_Idle_014.png',
            'gameassets/Archer/PNG/PNG Sequences/Idle/0_Archer_Idle_015.png',
            'gameassets/Archer/PNG/PNG Sequences/Idle/0_Archer_Idle_016.png',
            'gameassets/Archer/PNG/PNG Sequences/Idle/0_Archer_Idle_017.png',
    ];

    constructor(){
        super().loadImage('gameassets/Archer/PNG/PNG Sequences/Idle/0_Archer_Idle_000.png')
        this.x = 500 + Math.random() * 150

        this.loadImages(this.IMAGES_IDLE);
        this.animate();
    }
    
}