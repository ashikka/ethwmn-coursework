/* globals artifacts */
const mytoken = artifacts.require('AshikkaToken')

module.exports = function(deployer) {
    deployer.deploy(mytoken)
}
