// JavaScript Document
// Animation rectangle
var StateBox = function(objectID, state, width, height) {
	this.objectID = objectID ; // The ID of the object
	this.state = state ; // 物体的标签
	this.width = width ; // 宽度
	this.height = height ; // 高度
	this.addToScene = true ; // 是否加入画布
}

// Inheritance and structure function
StateBox.prototype = new AnimatedObject() ;
StateBox.prototype.constructor = StateBox ;

// Set state
StateBox.prototype.setState = function(state) {
	this.state = state ;
}

// Drawing
StateBox.prototype.draw = function(ctx) {
	// Start drawing
	ctx.beginPath() ;
	// Set transparency
	ctx.globalAlpha = 1.0 ;
	// Draw background
	ctx.moveTo(this.x, this.y) ;
	ctx.lineTo(this.x+this.width, this.y) ;
	ctx.lineTo(this.x+this.width, this.y+this.height) ;
	ctx.lineTo(this.x, this.y+this.height) ;
	ctx.fillStyle = this.backgroundColor ;
	ctx.fill() ;
	// Writing text
	ctx.font = "16px Arial" ;
	ctx.textAlign = "left" ;
	ctx.textBaseline = "middle" ;
	ctx.fillStyle = this.foregroundColor ;
	ctx.fillText(this.state, this.x+20, parseInt(this.y+this.height/2)) ;
}