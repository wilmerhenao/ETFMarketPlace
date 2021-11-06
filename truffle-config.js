const HDWalletProvider = require("@truffle/hdwallet‐provider");
var mnemonic = "tourist method elder ensure destroy witness coconut spare mom satoshi neutral hub";

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*"
    },
    ropsten: {
        provider: function() {
            return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/b9ef9bbb273848829d66f8a12cd46b2b");
        },
        network_id: 3,
        gas: 4500000,
        gasPrice: 10000000000,
    },
    live: {
        provider: function() {
            return new HDWalletProvider(mnemonic, "https://mainnet.infura.io/v3/b9ef9bbb273848829d66f8a12cd46b2b");
        },
        network_id: 1,
        gas: 7500000,
        gasPrice: 10000000000,
        }
    }
};