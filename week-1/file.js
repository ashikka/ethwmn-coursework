const fs = require('fs');
const path = require('path');
const { MerkleTree } = require('merkletreejs')
const SHA256 = require('crypto-js/sha256')


const filepath = path.resolve(__dirname, 'test.txt');

var arr = [];
(async () => {
  const data = await (await fs.promises.readFile(filepath, 'utf8')).split('\n');
  arr.push(data);


  const leaves = arr.map(x => SHA256(x))
  const tree = await new MerkleTree(arr)
  const root = tree.getRoot().toString('hex')
  console.log(root)
  const leaf = SHA256('a')
  const proof = tree.getProof(leaf)
  console.log(tree.verify(proof, leaf, root)) // true


})();
