/* globals artifacts */
const mytoken2 = artifacts.require('DeadManSwitch')

module.exports = function(deployer) {
    deployer.deploy(mytoken2)
}
