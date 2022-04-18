require("dotenv").config();
const { REACT_APP_API_URL, REACT_APP_MNEMONIC, REACT_APP_MORALIS_NFT_API } =
    process.env;

module.exports = {
    REACT_APP_API_URL,
    REACT_APP_MNEMONIC,
    REACT_APP_MORALIS_NFT_API,
};
