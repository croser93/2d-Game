class CollectableLive extends CollectableItem {

        IMAGE_LIVE = [
        "gameassets/Collectable Object/Life.png"];
        
        hitboxOffsetX = 8;
        hitboxOffsetY = 8;
        hitboxWidth = 15;
        hitboxHeight = 15;



    constructor(){
        super().loadImage('gameassets/Collectable Object/Life.png')
        this.loadImages(this.IMAGE_LIVE);
        this.x = 400 + Math.random() * 3000;
        this.animateCollectable();
    }
/**
 * play life animet loop
 */
    animateCollectable() {
        setInterval(() => {
            this.playAnimationLoop(this.IMAGE_LIVE)
        },1000 / 10);
    }


}