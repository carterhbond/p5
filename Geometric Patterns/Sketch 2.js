const colors = ['#f04924', '#fcce09', '#408ac9'];
const strokeColor = '#2e2925';
const bgColor = '#ffffff';

function setup() {
  createCanvas(4000, 4000);
  background(bgColor);
  strokeWeight(3);
  stroke(strokeColor);
  generatePattern();
}

function generatePattern() {
  const numShapes = 25;
  const shapeSize = width / numShapes;
  
  for (let x = 0; x < numShapes; x++) {
    for (let y = 0; y < numShapes; y++) {
      const centerX = x * shapeSize + shapeSize / 2;
      const centerY = y * shapeSize + shapeSize / 2;
      
      const rand = random();
      if (rand < 0.33) {
        // draw a rectangle
        const c = random(colors);
        fill(c);
        rect(centerX, centerY, shapeSize * 0.8, shapeSize * 0.8);
      } else if (rand < 0.66) {
        // draw a triangle
        const c = random(colors);
        fill(c);
        triangle(centerX - shapeSize / 2, centerY + shapeSize / 2, 
                 centerX + shapeSize / 2, centerY + shapeSize / 2, 
                 centerX, centerY - shapeSize / 2);
      } else {
        // draw a circle
        const c = random(colors);
        fill(c);
        ellipse(centerX, centerY, shapeSize * 0.8, shapeSize * 0.8);
      }
    }
  }
}

