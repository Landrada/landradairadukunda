const { Token } = require('./../models/token.model')

async function createToken(tokenVal, date, expiryDate, active) {
    let obj = {tokenVal: tokenVal, date: date, expiryDate: expiryDate, active: active}
    const tkn = new Token(obj);
    await tkn.save();
}
module.exports.createToken = createToken

async function checkToken(tokenVal) {
    let tokens = await Token.findOne({tokenVal: tokenVal})
    if(tokens !== null) {
        return tokens.tokenVal 
    } else {
        return false
    }
}
module.exports.checkToken = checkToken

async function checkDays(tokenVal) {
    let tokenf = await Token.findOne({token: tokenVal})
    if (token === tokenf?.tokenVal) {
            days = token.expiryDate - new Date;
        return days
    } else {
        return 0
    }
}
module.exports.checkDays = checkDays