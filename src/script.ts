window.onload = main;

function main(){
    // Base Data

    const CANVAS_WIDTH = 900;
    const CANVAS_HEIGHT = 500;

    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");
    
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
    
    context.fillStyle = "#141414";  // HexaDecimal Gris foncé
    context.fillRect(
        0,0,            // [x,y] supérieur gauche
        CANVAS_WIDTH,CANVAS_HEIGHT // [x,y] inférieur droit
    );

    let left = 1;
    let still = 0;
    let right = -1;

    // Direction Class
    // let directionObject = class {
    //     constructor(left, right, still){
    //         this.left = left;  // q / a / Leftarrow 
    //         this.right = right; // d / RightArrow
    //         this.still = still; // Keydown = NONE // Q && D or A AND D keydown both
    //     }
    // }
    


    // Player "Class"
    const playerImage : HTMLImageElement = document.querySelector("img.player");
    const playerPos = {
        x : CANVAS_WIDTH/2,
        y : CANVAS_HEIGHT - 100
    };


    // Alien "Class"
    const image : HTMLImageElement = document.querySelector("img.alien");
    let position = {
        x : 0,
        y : 0
    };


    // Alien Func
    function alienMove(){
        context.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        context.fillStyle = "#141414";  // HexaDecimal Gris foncé
        context.fillRect(
        0,0,            // [x,y] supérieur gauche
        CANVAS_WIDTH,CANVAS_HEIGHT // [x,y] inférieur droit
    );
            context.drawImage(
                image,
                position.x,
                position.y,
                image.width,
                image.height
        );
        position.y += 1;
        
    }
    function playerMove(){              // LEFT AND RIGHT PARAMETERS !!!!!!!!!!!!!!
        context.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        context.fillStyle = "#141414";  // HexaDecimal Gris foncé
        context.fillRect(
        0,0,            // [x,y] supérieur gauche
        CANVAS_WIDTH,CANVAS_HEIGHT // [x,y] inférieur droit
    );
        context.drawImage(
            playerImage,
            playerPos.x,  
            playerPos.y,
            playerImage.width,
            playerImage.height
        );
        // if(left){
             playerPos.x += 1;
        // }
        // if(right){
        //     playerPos.x -= 1;
        // }

    }
    setInterval(alienMove, 10);
    const debug = document.getElementById("inputDebug");
    addEventListener("keydown", debugInput);
    function debugInput(e) {
        debug.textContent += ` ${e.code}`;
    }

    


    // Player Func
    
    
}