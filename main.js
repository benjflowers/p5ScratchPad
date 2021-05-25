const width = 2000;
const height = 2000;

let sketch = p5 => {
  p5.setup = () => {
    p5.createCanvas(width, height);
    p5.background(84, 201, 255);

    p5.noLoop();
  };

  p5.draw = () => {
    p5.strokeWeight(30);
    p5.point(width/2, height/2);
  };
};

document.addEventListener('DOMContentLoaded', (e) => {
  let div = document.createElement('div');
  div.className = 'container';
  document.querySelector('div.wrapper').appendChild(div);
  new p5(sketch, div);
})

