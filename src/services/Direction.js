class Direction {
  constructor(startRadians) {
    this.isTurning = false
    this.endRadians = null
    this.radians = startRadians
  }

  startTurn(endRadians) {
    this.isTurning = true
    this.endRadians = endRadians
  }

  updateRadians() {
    if (this.endRadians < this.radians) {
      this.radians = Math.max(this.endRadians, this.radians - 0.01)
    } else {
      this.radians = Math.min(this.endRadians, this.radians + 0.01)
    }
    if (this.radians === this.endRadians) {
      this.isTurning = false
      this.endRadians = null
    }
  }
}

export default Direction
