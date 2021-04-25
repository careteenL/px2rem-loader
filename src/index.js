var loaderUtils = require('loader-utils')
var Px2rem = require('px2rem')
function loader (source) {
  var options = loaderUtils.getOptions(this)
  if (options.exclude && options.exclude.test(this.resource)) {
    return source
  }
  var px2remIns = new Px2rem(options)
  var targetSource = px2remIns.generateRem(source)
  return targetSource
}

module.exports = loader