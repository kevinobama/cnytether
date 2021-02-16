var CnyToken = artifacts.require("./CnyToken.sol");
var CnyTokenSale = artifacts.require("./CnyTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(CnyToken, 70000009).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(CnyTokenSale, CnyToken.address, tokenPrice);
  });
};
