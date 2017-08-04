const objHas = Object.prototype.hasOwnProperty

const objectIncludesProperty = (obj, key) => objHas.call(obj, key)

export default objectIncludesProperty
