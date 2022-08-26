require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune silver shock rifle smile puppy half enroll sun train'; 
let testAccounts = [
"0xbaebc562eba02f8b0011a68637f3753ba233b491cb0accdca8162a55c477e46f",
"0x7fe3e6394ca293cea2033e6736b2909e785303d4e299b517a745b0b4686fce19",
"0xf32b773423b6279096b08113c10153ff1629b44b0f7c405729be40c1399c3899",
"0x46cf0d089a76ea00a1d6eb471f12262abf30836014b3c59167f790c7d0d29986",
"0xfc12ab53ba485c70a465f59036b22b85a4c10389e9040a536a1112aafb6bf42c",
"0x4df29709dac999a88b68c7cc139194e042677406740105294b9a0f1db41d5890",
"0xe2f3dc65be1f5b48dd67fc759793edfa8bc7cf34845c3ae6d334fa4a45057ebb",
"0x0d5ad68933ae6c3038b4b0ddaa5fe1be1b6d59c5aeffc951d24540270a4f0420",
"0x7c124dfb2c24f5a8e764015d96c0746148ca6d97fbdf2c6c4bbbcc3e03adc5e7",
"0x202c9f2089e6fba6c810a8010d3f74d173390fabd74a4382d701932a979c3302"
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

