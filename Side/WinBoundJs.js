    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var w = canvas.width;
    var h = canvas.height;
    var angle = 3 * Math.PI / 180;
    var cx = 200;
    var cy = 75;
    var radius = 40;
    
    ctx.fillStyle = "skyblue";
    ctx.strokeStyle = "lightgray";

    function New_open_win()
    {
    Qwek2=window.open("https://omaniamnotgoodwith.computer/side/WindowPullAlt","datshizzle","location=0,status=1,width=700,height=500");
    Qwek2.focus()
    }
    function draw(x, y) {
        ctx.clearRect(0, 0, w, h);
        ctx.save();
        ctx.beginPath();
        ctx.beginPath();
        ctx.rect(x, y, 50, 30)
        ctx.rect(x - 50 / 2, y - 30 / 2, 50, 30)
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    };
    
    //keepDrawing();
    
    function keepDrawing() {
    
    
        draw(newX, newY);
    
    
        setTimeout(keepDrawing, 250)
    }
    
    window.requestAnimFrame = (function (callback) {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
    })();
    
    var fps = 60;
    
    function animate() {
        setTimeout(function () {
            requestAnimationFrame(animate);
    
            // increase the angle of rotation
            angle += 3 * Math.PI / 180;
    
            // calculate the new ball.x / ball.y
            var newX = cx + radius * Math.cos(angle) + 400;
            var newY = cy + radius * Math.sin(angle) + 400;
            // draw
            draw(newX, newY);
            console.log(newX);
	    console.log(newY);
	    Qwek2.moveTo(newX, newY);
            Qwek2.focus()
    
            // draw the centerpoint 
            ctx.beginPath();
            ctx.arc(cx, cy, radius, 0, Math.PI * 2, false);
            ctx.closePath();
            ctx.stroke();
    
        }, 1000 / fps);
    }
    animate();
