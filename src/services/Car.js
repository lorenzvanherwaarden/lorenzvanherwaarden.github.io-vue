import Direction from './Direction'

class Car {
  constructor({ el, x, y, speed, radians }) {
    this.el = el
    this.x = x
    this.y = y
    this.cells = this.calculateCells()
    this.speed = speed
    this.direction = new Direction(radians)
    this.draw()
  }

  nextStep() {
    const startTurn = Math.random() < 0.01
    if (!this.direction.isTurning && startTurn) {
      const randomRadians = -Math.PI / 2 + Math.PI * Math.random()
      this.direction.startTurn(this.direction.radians + randomRadians)
      this.direction.updateRadians()
    } else if (this.direction.isTurning) {
      this.direction.updateRadians()
    }

    this.x += this.speed * Math.cos(this.direction.radians)
    this.y += this.speed * Math.sin(this.direction.radians)
    this.draw()
  }

  draw() {
    this.el.style.transform = `translate(${this.x}px, ${this.y}px) rotate(${this.direction.radians}rad)`
  }

  calculateCells() {
    this.x / 50
  }
}

export default Car
