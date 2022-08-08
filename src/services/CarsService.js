import Car from './Car'
import ferrari from '../assets/blue-ferrari.png'

class CarsService {
  constructor(container) {
    this.cars = []
    this.container = container
    this.width = container.clientWidth
    this.height = container.clientHeight
  }

  createCar() {
    const x = Math.floor(Math.random() * this.width)
    const y = Math.floor(Math.random() * this.height)
    const radians = 2 * Math.PI * Math.random()
    const speed = 0.75 + 0.5 * Math.random()
    const el = document.createElement('img')
    el.src = ferrari
    this.container.appendChild(el)

    const car = new Car({ el, x, y, radians, speed })
    this.cars.push(car)
  }

  start() {
    this.next()
  }

  next() {
    window.requestAnimationFrame(() => {
      this.cars.forEach((car) => {
        car.nextStep()
        car.calculateCells()
      })
      this.next()
    })
  }

  getOverlap() { }
}

export default CarsService
