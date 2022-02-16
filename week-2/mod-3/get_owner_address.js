(async () => {

    const contractAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138'
    console.log('start')
    const contractName = 'Owner'
    const artifactsPath = `browser/contracts/artifacts/${contractName}.json`

    const metadata = JSON.parse(await remix.call('fileManager', 'getFile', artifactsPath))

    const accounts = await web3.eth.getAccounts()

    let contract = new web3.eth.Contract(metadata.abi, contractAddress)


    try {
        contract.methods.getOwner().call({ from: accounts[0] }).then((res) => console.log(`Owner's address is: ${res}`))

    } catch (e) {
        console.log(e)
    }
})()