const css = require('css')

const pxRegExp = /\b(\d+(\.\d+)?)px\b/
const pxGlobalRegexp = new RegExp(pxRegExp.source, 'g')

class Px2rem {
  constructor(config) {
    this.config = config
  }
  generateRem(cssText) {
    const astObj = css.parse(cssText)
    this.processRules(astObj.stylesheet.rules)
    return css.stringify(astObj)
  }
  processRules(rules) {
    for (let i = 0; i < rules.length; i++) {
      const rule = rules[i]
      const declarations = rule.declarations
      for (let j = 0; j < declarations.length; j++) {
        const declaration = declarations[j]
        if (declaration.type === 'declaration' && pxRegExp.test(declaration.value)) {
          declaration.value = this.getCalcValue('rem', declaration.value)
        }
      }
    }
  }
  getCalcValue(type, value) {
    const {
      remUnit,
      remPrecision,
    } = this.config
    return value.replace(pxGlobalRegexp, (_, $1) => {
      const val = (parseFloat($1) / remUnit).toFixed(remPrecision)
      return val + type
    })
  }
}

module.exports = Px2rem