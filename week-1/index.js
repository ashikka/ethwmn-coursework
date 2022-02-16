// In Node.js
const Web3 = require('web3');
const fs = require('fs').promises;
// const Pqueue = require('p-queue');
const { MerkleTree } = require('merkletreejs')
const SHA256 = require('crypto-js/sha256')

// const queue = new PQueue({ concurrency: 10 });

let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))

// const acc = web3.eth.getBlock(1).then(console.log);


// (async () => {
//     const task = await web3.eth.getBlock(i);
//     await queue.add(task);
//     console.log('Done: Unicorn task');
// })();

// async function show() {
//     const file = await fs.open('test.txt', 'w');
//     for (var i = 0; i < 128; i++) {
//         file.write((await web3.eth.getBlock(i)).hash + "\n");
//     }
// }

async function getFirstSmartContractBlock() {
    var i = 11120;
    while (true) {
        const block = await web3.eth.getBlock(i);
        if (block.transactions.length > 0) {
            return block.number;
        }
        console.log(i);
        i++;
    }
}

getFirstSmartContractBlock()

