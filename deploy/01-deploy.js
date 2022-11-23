const { networkConfig } = require("../helper-hardhat-config");

module.exports = async ({ getNamedAccounts, deployments }) => {
  console.log("hi");
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;

  const ethUSDPriceFeedAdress = networkConfig[chainId];
  console.log(ethUSDPriceFeedAdress.name);
};
