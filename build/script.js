window.onload = main;
function main() {
    // Base Data
    var CANVAS_WIDTH = 900;
    var CANVAS_HEIGHT = 500;
    var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
    context.fillStyle = "#141414"; // HexaDecimal Gris foncé
    context.fillRect(0, 0, // [x,y] supérieur gauche
    CANVAS_WIDTH, CANVAS_HEIGHT // [x,y] inférieur droit
    );
    var left = 1;
    var still = 0;
    var right = -1;
    // Direction Class
    // let directionObject = class {
    //     constructor(left, right, still){
    //         this.left = left;  // q / a / Leftarrow 
    //         this.right = right; // d / RightArrow
    //         this.still = still; // Keydown = NONE // Q && D or A AND D keydown both
    //     }
    // }
    // Player "Class"
    var playerImage = document.querySelector("img.player");
    var playerPos = {
        x: CANVAS_WIDTH / 2,
        y: CANVAS_HEIGHT - 100
    };
    // Alien "Class"
    var image = document.querySelector("img.alien");
    var position = {
        x: 0,
        y: 0
    };
    // Alien Func
    function alienMove() {
        context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        context.fillStyle = "#141414"; // HexaDecimal Gris foncé
        context.fillRect(0, 0, // [x,y] supérieur gauche
        CANVAS_WIDTH, CANVAS_HEIGHT // [x,y] inférieur droit
        );
        context.drawImage(image, position.x, position.y, image.width, image.height);
        position.y += 1;
    }
    function playerMove() {
        context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        context.fillStyle = "#141414"; // HexaDecimal Gris foncé
        context.fillRect(0, 0, // [x,y] supérieur gauche
        CANVAS_WIDTH, CANVAS_HEIGHT // [x,y] inférieur droit
        );
        context.drawImage(playerImage, playerPos.x, playerPos.y, playerImage.width, playerImage.height);
        // if(left){
        playerPos.x += 1;
        // }
        // if(right){
        //     playerPos.x -= 1;
        // }
    }
    setInterval(alienMove, 10);
    // DEBUG INPUTS 
    // Azerty keyboards registers Q for A (Case : Safari MacOS, Apple Aluminium French AZERTY layout)
    var debug = document.getElementById("inputDebug");
    addEventListener("keydown", debugInput);
    function debugInput(e) {
        debug.textContent += " ".concat(e.code);
    }
    // Player Func
}
