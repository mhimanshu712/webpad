var canvas = document.querySelector('canvas');

canvas.height = window.innerHeight;
canvas.width  = window.innerWidth;

c = canvas.getContext('2d');

c.fillStyle = 'rgba(45,34,112,0.5)';
c.fillRect(100,100,100,100);