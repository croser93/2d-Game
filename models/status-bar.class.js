class StatusBar extends DrawableObject {
    percentage = 100;
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