require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock brand ten index razor sister hospital just arena metal gather'; 
let testAccounts = [
"0x99a9f9cde87963f170d0098e800dbbcc3506d30cfa93831fd46ae7c2d5426e28",
"0xf57c88a36075981ad00395ae2c65fad257901eaacc64b061c7cbe7206482125f",
"0xf279624359f4ada04116ec2d6a170046eb738c5be3768a4cef977f457f2d1fd3",
"0xeff1befe20e913ac96a7a2171d664a64ca4cdc10e8fa5faa8a244b1d29cd5756",
"0xa3cc3d5b5ca1c94b51270e53fb6c0061d27dd2e032ace9cb993d9518f924ea25",
"0xfd374c22b297b134447de39c3ba95ab5c217b3cbaa2c0417bccb76c884329bf8",
"0xb9173974661db10b9ff57b03a195daf34ee961ea7bb0762108574411eea58bfb",
"0x8ef6533cc9342aa8a61b7e57f76ddea852c82eac03a1d16b77a1a671138a2a87",
"0xca542732a8255419d3db02cbadd4ea3268430c63080283637b4fe18e752714ca",
"0xb96d85c967f3a3644eb15384c0b3004f86d57146d666f6b6b14f5edc1cec1a90"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

