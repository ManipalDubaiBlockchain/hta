var HTAContract = artifacts.require("./HTAContract.sol");

module.exports = function(deployer) {
  deployer.deploy(HTAContract);
};
