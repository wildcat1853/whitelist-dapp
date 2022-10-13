require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });


ALCHEMY_HTTP_URL="https://eth-goerli.g.alchemy.com/v2/4uVUNV4GY9VdRE4tnm-WOr9JkDAcSAr-"

PRIVATE_KEY="433861e11b5f63a2f8477e2f6d3cb3c4128616c05dc1ed4df27920f67f8e652a"


module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: ALCHEMY_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};