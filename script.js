window.addEventListener('load', () => {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    const clearCanvas = document.getElementById('reset');
    const colorChange = document.getElementById('color');
    const backColorbtn = document.getElementById('background-color');
    const pavyonmod = document.getElementById('pavyon');
    let interval

  
  
    // Yeniden boyutlandırma
    canvas.height = window.innerHeight - 100;
    canvas.width = window.innerWidth - 100;
  
    // Değişkenler
    let painting = false;
  
  
    const startPosition = (e) => {
      painting = true;
      draw(e);
    }
  
    const finishedPosition = () => {
      painting = false;
      ctx.beginPath();
    }
  
    function eraseCanvas() {
    document.querySelector('canvas').style.backgroundColor = null;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      clearInterval(interval);
    }
  
  
    const draw = (e) => {
      if (!painting) return;
      ctx.lineWidth = 10;
      ctx.lineCap = 'round';
  
      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.clientX, e.clientY);
    }
  
  
    // Event Listenerlar
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw);
    clearCanvas.addEventListener('click', eraseCanvas);
  
    function changeColor() {
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
  
      var cssColor = 'rgb(' + r + ', ' + g + ',' + b + ')';
      ctx.strokeStyle = cssColor;
    }
  
    function changebackColor() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
    
        var backColor = 'rgb(' + r + ', ' + g + ',' + b + ')';
        document.querySelector('canvas').style.backgroundColor = backColor;
  
    }

    function pavyonmodu() {    
        if(interval) {
            clearInterval(interval);
        }
        else {
            interval = setInterval(function(){ 
                changebackColor(); 
                changeColor();
            }, 500);
        }
     }
    
  
    backColorbtn.addEventListener('click', changebackColor);
    colorChange.addEventListener('click', changeColor);
    pavyonmod.addEventListener('click', pavyonmodu)
  });
  
  
  
  
  
  window.addEventListener('resize, ')