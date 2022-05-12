export default function (propertyName) {
  const styles = window.getComputedStyle(document.documentElement)
  const sizeInRem = styles.getPropertyValue(propertyName).replace('rem', '')
  return parseFloat(sizeInRem) * 10.0
}
