const width = 300;
const height = 300;

let sketch = p5 => {
  var scale;
  var cols;
  var rows;
  p5.setup = () => {
    p5.createCanvas(width, height);
    p5.background(84, 201, 255);

    p5.noLoop();

    scale = .30;
    console.log(`resolution: ${width/ (width * scale)} x ${height/ (height * scale)}`)
    cols = Math.floor(width/ (width * scale));
    rows = Math.floor(height / (height * scale));
  };

  p5.draw = () => {
    p5.strokeWeight(3);

    for(let i = 1; i < cols; i ++) {
      p5.line(i * (width/cols), 0, i * (width/cols), height);
    }

    for(let i = 1; i < rows; i ++) {
      p5.line(0, i * (height/rows), height, i * (height/rows));
    }
  };
};

document.addEventListener('DOMContentLoaded', (e) => {
  let div = document.createElement('div');
  div.className = 'container';
  document.querySelector('div.wrapper').appendChild(div);
  new p5(sketch, div);
})

