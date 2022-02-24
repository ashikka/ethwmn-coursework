$ npx hardhat run scripts/deploy.js --network ropsten
Deploying contracts with the account: 0x9967C0b120d2Ad6115aB7ebEC5130CD308085CEf
Account balance: 5000000000000000000
Token address: 0x448e25BAb04FAE3FcfdeB8BAF8F95BB2df7b8AAf


$ npx hardhat run scripts/deploy.js --network rinkeby
Deploying contracts with the account: 0x9967C0b120d2Ad6115aB7ebEC5130CD308085CEf
Account balance: 92151249947675826
Token address: 0x165735746951be6946C155c4557daAaCc22b22e1


I deployed the contract on 2 testnets: Rinkeby and Ropsten. Here are the differences I noticed: 

1.  The base gas fees for both the testnets was different: 

| Ropsten          | Rinkeby          |
|------------------|------------------|
| 0.000000017 Gwei | 0.000000013 Gwei |

2. The max priority per block was different too.

| Ropsten  | Rinkeby  |
|----------|----------|
| 500 Gwei | 2.5 Gwei |

3. Therefore even though the gas used for deploying the contracts is the same, the transaction fees comes out to be different for each testnet. 

| Ropsten                   | Rinkeby                      |
|---------------------------|------------------------------|
| 0 . 010500000000357 Ether | 0 . 001628002508465613 Ether |

3. Even the block numbers were different with Ropsten having more number than Rinkeby. 

4. The gas price was also different. 