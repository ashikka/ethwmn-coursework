const HDWalletProvider = require('truffle-hdwallet-provider')
var mnemonic = process.env.NMEMORIC


module.exports = {
    networks: {
        development: {
            host: 'localhost',
            port: 8545,
            network_id: '*',
            gas: 6000000
        },
        // Rinkeby testnet
        rinkeby: {
            provider: function() {
              return new HDWalletProvider('notable cave run actor start pitch spend exhibit flame sister release worry', "https://rinkeby.infura.io/v3/eab0dccb979f4a579d5319404d2ed125")
            },
            network_id: '4',
            gas: 6000000,
            gasPrice: 10000000000,
        },
        goerli: {
            provider: () => {
              return new HDWalletProvider('0x3b7da0d1c5d640a4219b828dc0658eeb2ae18b6e0ce50dd3873ee263a5c77039', 'https://goerli.infura.io/v3/eab0dccb979f4a579d5319404d2ed125')
            },
            network_id: '5', // eslint-disable-line camelcase
            gas: 4465030,
            gasPrice: 1,
            from: '0x027A9DDeB6C3144275d5c5110D6D332e65AB79eC'
          },
    },
    compilers: {
        solc: {
            version: '0.5.3',
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 200
                }
            }
        }
    }
}
