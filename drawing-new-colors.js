function setup() { 
  createCanvas(400, 400);
} 

var diameter = 10;

function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}

function keyPressed() {
  print(key);
  if (key == 'R') {
    fill(240, 20, 10);
  } else if (key == 'G') {
    fill(3, 200, 3);
  } else if (key == 'B') {
    fill(14, 24, 220); 
  }else if (key == 'T') {
    fill(0, 128, 128); 
  }else if (key == 'O') {
    fill(255, 165, 0); 
  }else if (key == 'P') {
    fill(128, 0, 128); 
  }
	
}
