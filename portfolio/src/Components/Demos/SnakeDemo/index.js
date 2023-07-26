import React, { useEffect, useRef, useState } from "react";

function SnakeDemo({ closeModal }) {
  const canvasRef = useRef(null);
  const canvasWidth = 1500;
  const canvasHeight = 700;
  const blockSize = 30;
  const widthInBlocks = canvasWidth / blockSize;
  const heightInBlocks = canvasHeight / blockSize;

  let ctx;
  let snakee;
  let applee;
  let score;
  let timeout;
  useEffect(() => {
    const canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
    snakee = new Snake(
      [
        [6, 4],
        [5, 4],
        [4, 4],
      ],
      "right"
    );
    applee = new Apple([10, 10]);
    score = 0;

    const handleKeyDown = (e) => {
      const key = e.keyCode;
      let newDirection;
      switch (key) {
        case 37:
          newDirection = "left";
          break;
        case 38:
          newDirection = "up";
          break;
        case 39:
          newDirection = "right";
          break;
        case 40:
          newDirection = "down";
          break;
        case 32:
          restart();
          return;
        default:
          return;
      }
      snakee.setDirection(newDirection);
    };

    document.addEventListener("keydown", handleKeyDown);

    refreshCanvas();

    return () => {
      clearTimeout(timeout);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function refreshCanvas() {
    snakee.advance();
    if (snakee.checkCollision()) {
      gameOver();
    } else {
      if (snakee.isEatingApple(applee)) {
        score++;
        snakee.ateApple = true;
        do {
          applee.setNewPosition();
        } while (applee.isOnSnake(snakee));
      }
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      drawScore();
      snakee.draw();
      applee.draw();
      timeout = setTimeout(refreshCanvas, 100);
    }
  }

  function gameOver() {
    ctx.save();
    ctx.font = "bold 70px sans-serif";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.strokeStyle = "white";
    ctx.lineWidth = 5;
    const centreX = canvasWidth / 4;
    const centreY = canvasHeight / 2;
    ctx.strokeText("Game Over", centreX, centreY - 180);
    ctx.fillText("Game Over", centreX, centreY - 180);
    ctx.font = "bold 30px sans-serif";
    ctx.strokeText("Appuyer sur Espace pour rejouer", centreX, centreY - 110);
    ctx.fillText("Appuyer sur Espace pour rejouer", centreX, centreY - 110);
    ctx.restore();
  }

  function restart() {
    snakee = new Snake(
      [
        [6, 4],
        [5, 4],
        [4, 4],
      ],
      "right"
    );
    applee = new Apple([10, 10]);
    score = 0;
    clearTimeout(timeout);
    refreshCanvas();
  }

  function drawBlock(ctx, position) {
    const x = position[0] * blockSize;
    const y = position[1] * blockSize;
    ctx.fillRect(x, y, blockSize, blockSize);
  }

  function drawScore() {
    ctx.save();
    ctx.font = "bold 200px sans-serif";
    ctx.fillStyle = "gray";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 2;
    ctx.fillText(score.toString(), centerX, centerY);
    ctx.restore();
  }

  function Snake(body, direction) {
    this.body = body;
    this.direction = direction;
    this.ateApple = false;
    this.draw = function () {
      ctx.save();
      ctx.fillStyle = "#ff0000";
      for (let i = 0; i < this.body.length; i++) {
        drawBlock(ctx, this.body[i]);
      }
      ctx.restore();
    };
    this.advance = function () {
      const nextPosition = this.body[0].slice();
      switch (this.direction) {
        case "left":
          nextPosition[0] -= 1;
          break;
        case "right":
          nextPosition[0] += 1;
          break;
        case "down":
          nextPosition[1] += 1;
          break;
        case "up":
          nextPosition[1] -= 1;
          break;
        default:
          throw new Error("Invalid Direction");
      }
      this.body.unshift(nextPosition);
      if (!this.ateApple) this.body.pop();
      else this.ateApple = false;
    };
    this.setDirection = function (newDirection) {
      let allowedDirection;
      switch (this.direction) {
        case "left":
        case "right":
          allowedDirection = ["up", "down"];
          break;
        case "down":
        case "up":
          allowedDirection = ["left", "right"];
          break;
        default:
          throw new Error("Invalid Direction");
      }
      if (allowedDirection.indexOf(newDirection) > -1) {
        this.direction = newDirection;
      }
    };
    this.checkCollision = function () {
      let wallCollision = false;
      let snakeCollision = false;
      const head = this.body[0];
      const rest = this.body.slice(1);
      const snakeX = head[0];
      const snakeY = head[1];
      const minX = 0;
      const minY = 0;
      const maxX = widthInBlocks - 1;
      const maxY = heightInBlocks - 1;
      const isNotBetweenHorizontalWalls = snakeX < minX || snakeX > maxX;
      const isNotBetweenVerticalWalls = snakeY < minY || snakeY > maxY;

      if (isNotBetweenHorizontalWalls || isNotBetweenVerticalWalls) {
        wallCollision = true;
      }
      for (let i = 0; i < rest.length; i++) {
        if (snakeX === rest[i][0] && snakeY === rest[i][1]) {
          snakeCollision = true;
        }
      }

      return wallCollision || snakeCollision;
    };
    this.isEatingApple = function (appleToEat) {
      const head = this.body[0];
      return (
        head[0] === appleToEat.position[0] && head[1] === appleToEat.position[1]
      );
    };
  }

  function Apple(position) {
    this.position = position;
    this.draw = function () {
      const radius = blockSize / 2;
      const x = this.position[0] * blockSize + radius;
      const y = this.position[1] * blockSize + radius;
      ctx.save();
      ctx.fillStyle = "#33cc33";
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };
    this.setNewPosition = function () {
      const newX = Math.round(Math.random() * (widthInBlocks - 1));
      const newY = Math.round(Math.random() * (heightInBlocks - 1));
      this.position = [newX, newY];
    };
    this.isOnSnake = function (snakeToCheck) {
      let isOnSnake = false;
      for (let i = 0; i < snakeToCheck.body.length; i++) {
        if (
          this.position[0] === snakeToCheck.body[i][0] &&
          this.position[1] === snakeToCheck.body[i][1]
        ) {
          isOnSnake = true;
        }
      }
      return isOnSnake;
    };
  }
  return (
    <div>
      <div className="modal" style={{ display: "block" }}>
        <div className="modal-content">
          <h2>Snake</h2>
          <h3>Instruction</h3>
          <p> Utilisez les touches de direction pour déplacer le serpent.</p>
          <button onClick={closeModal}>Fermer la modal</button>
        </div>
        <canvas
          ref={canvasRef}
          id="snakeCanvas"
          width={canvasWidth}
          height={canvasHeight}
          style={{
            border: "30px solid gray",
            margin: "50px auto",
            display: "block",
            backgroundColor: "#ddd",
          }}
        ></canvas>
      </div>
    </div>
  );
}
export default SnakeDemo;
