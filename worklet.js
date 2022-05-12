if (typeof registerPaint !== 'undefined') {
  class CurvedUnderline {
    static get inputProperties() {
      return ['--underline-depth', '--underline-size', '--underline-color']
    }

    paint(ctx, size, properties) {
      const weight = parseInt(properties.get('--underline-size')) || 1
      const depth = parseInt(properties.get('--underline-depth')) || 10
      const color = String(properties.get('--underline-color')) || 'black'
      const height = size.height
      const width = size.width

      ctx.lineWidth = weight
      ctx.strokeStyle = color

      ctx.beginPath()
      ctx.quadraticCurveTo(width / 2.0, height + depth, width, height)
      ctx.stroke()
    }
  }

  registerPaint('curved-underline', CurvedUnderline)
}