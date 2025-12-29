// class StatusBar extends DrawableObject{


//     IMAGES_BAR = [
//         "gameassets/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png",
//         "gameassets/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png",
//         "gameassets/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png",
//         "gameassets/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png",
//         "gameassets/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png",
//         "gameassets/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png",
//     ];

//     percentage = 100;


//     constructor(){
//         super();
//         this.loadImages(this.IMAGES_BAR);
//         this.setPercentage(100);
//         this.x = 0;
//         this.y = 0;
//         this.width = 60;
//         this.height = 200;
//     }

//     setPercentage(percentage) {
//         this.percentage = percentage;
//         let path = this.IMAGES_BAR[this.resolveImageIndex()];
//         this.img = this.imageCache[path]
//     }

//     resolveImageIndex(){
//         if (this.percentage == 100) {
//             return 5;
//         } else if (this.percentage > 80){
//             return 4;
//         }else if (this.percentage > 60){
//             return 3;}
//         else if (this.percentage > 40){
//             return 2;}
//         else if (this.percentage > 20){
//             return 1;}
//         else{
//             return 0;
//         }
//     }
// }

class StatusBar extends DrawableObject {
    percentage = 50;
    x = 20;
    y = 20;
    width = 200;
    height = 20;
    backgroundColor = 'rgba(0, 0, 0, 0.5)';
    borderColor = 'white';
    borderWidth = 2;
    gradientColorStart = '#fa4e4eff';
    gradientColorEnd = '#f32323ff';

    constructor() {
        super();
 
    }

    setPercentage(percentage) {
        this.percentage = Math.max(0, Math.min(100, percentage));
    }

    drawItem(ctx) {
        ctx.fillStyle = this.backgroundColor
        ctx.fillRect(this.x, this.y, this.width, this.height);
        
        ctx.strokeStyle = this.borderColor;
        ctx.lineWidth = this.borderWidth;
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        
        const fillWidth = (this.width * this.percentage) / 100;
        const gradient = ctx.createLinearGradient(this.x, 0, this.x + this.width, 0);
        gradient.addColorStop(0, this.gradientColorStart);
        gradient.addColorStop(1, this.gradientColorEnd);
        ctx.fillStyle = gradient;
        ctx.fillRect(this.x, this.y, fillWidth, this.height);}
        
}