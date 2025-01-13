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
    var directionObject = /** @class */ (function () {
        function directionObject(left, right, still) {
            this.left = left;
            this.right = right;
            this.still = still;
        }
        return directionObject;
    }());
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
    setInterval(alienMove, 10);
    // Player Func
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
    addEventListener("keydown", function (event) {
        if (event.key === "q") {
            onkeydown = function (playerMove) { };
        }
    });
}
