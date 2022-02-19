## Get Started

### 1. Deploy token contract

```
$ truffle migrate --network rinkeby
```

### 2. create a new exchange for token contract

```
$ node script/1.create.exchange.js
```

### 3. query the newly deployed echange contract address

```
$ node script/2.get.exchange.address.js
```

### 4. approve exchange to withdraw ERC20 tokens

```
$ node script/3.approve.exchange.js
```

### 5. add liquidity into the exchange contract

```
$ node script/4.add.liquidity.js
```

### 6. swap ETH to ERC20 tokens with the exchange contract

```
$ node script/5.eth2erc20.swap.js
```

### 7. convert ERC20 tokens to different type of ERC20 tokens

```
$ node script/6.convert.token2token.js
```