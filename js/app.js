// Enemies our player must avoid
let score = 0;
let scoreElement = document.getElementById('score');

// window.onload = function () {
//     let closeButton = document.getElementById('close-button');
//     closeButton.addEventListener('click', toggleModal);
// }

class Enemy {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.sprite = 'images/enemy-bug.png';
        this.speed = 100 + Math.floor(Math.random() * 220);
    }

    update(td) {
        this.x += this.speed * td
        if (this.x > 510) {
            this.x = -50;
            this.speed = 100 + Math.floor(Math.random() * 220);
        }

        // if collision happend 
        if (player.x < this.x + 70 && player.x + 70 > this.x && player.y < this.y + 59 && player.y + 59 > this.y) {
            score -= score > 0 ? 1 : 0;
            scoreElement.innerText = score;
            player.x = 200;
            player.y = 400;

        }
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

class Player {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.sprite = 'images/char-boy.png';
    }

    update(td) {

        if (this.y < -2) {
            scoreElement.innerText = score++;
            this.y = 400;
            this.x = 200;
        }
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

    }

    handleInput(direction) {
        switch (direction) {
            case 'up':
                if (this.y > 0) {
                    this.y -= 83
                }
                break;
            case 'down':
                //bottom of grid is y=400
                if (this.y < 400)
                    this.y += 83
                break;

            case 'right':
                // rightmost of canvas is x=402
                if (this.x < 402)
                    this.x += 101
                break;

            case 'left':
                //leftmost is at x=-2
                if (this.x > -2)
                    this.x -= 101
                break;

            default:
                break;
        }


    }
}

let player = new Player(200, 400);

let enemy1 = new Enemy(100, 55);
let enemy2 = new Enemy(100, 138);
let enemy3 = new Enemy(100, 221);

let allEnemies = [enemy1, enemy2, enemy3];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.

document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

function toggleModal() {
    modal.classList.toggle("show-modal");
}

// function resetPlayer() {
//     player.x=200;
//     player.y=400;
//     score+=
// }

