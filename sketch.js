const canvasSketch = require('canvas-sketch');
const p5 = require('p5');
// // const { renderPolylines } = require('canvas-sketch-util/penplot');
// const { clipPolylinesToBox } = require('canvas-sketch-util/geometry')


let nb= 30;
let dimX ;
let dimY ;
// let propX = 0.5;
// let propY = 0.7;
let margin = 10;
let f;
let frequence = 2;
let x , y;
let phase = 0.9;
// let margin2;;

new p5()

const settings = {

  pixelsPerInch: 300,
   // Tell canvas-sketch we're using p5.js
   p5: true,
   // Turn on a render loop (it's off by default in canvas-sketch)
   duration: 3,

    animate: true,
    // We can specify dimensions if we want a fixed size on the first render
    dimensions: [512,512]
  // orientation: 'landscape' // also supports 'portrait'
    //bleed: 1 / 8,
    // attributes: {
    // antialias: true
    // }
};
  


canvasSketch(() => {

    // Inside this is a bit like p5.js 'setup' function

    dimX = (width-2 * margin )/ nb;
    dimY = (height-2 * margin )/ nb;
    angleMode(DEGREES);

 return ({ playhead, width, height }) => {
 // Return a renderer to 'draw' the p5.js content
   // background(255);
   clear()


  
   // noCursor();
    
   
    //noStroke();
   stroke(0)
   // noFill();
   
    rectMode(CENTER);
   
    for (let j = 0; j < nb; j = j + 1) {
   
    for (let i = 0; i <  nb; i = i + 1){
   
   x = margin + dimX/2 + i * dimX;
   y = margin + dimY/2 + j * dimY;
   
   f = sin(frequence * frameCount - phase * dist(width/2, height/2, x, y));
   
   fill(255 * f);
  

   ellipse(x , y, f * dimX, f *dimY);
   

   
     }
   
    
   }
 

 
   
  
  }


}, settings);









