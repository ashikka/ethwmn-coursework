(async () => {
    try {
        console.log('deploy...')

        const contractName = 'CustomERC20'

        const artifactsPath = `browser/contracts/artifacts/${contractName}.json`

        const metadata = JSON.parse(await remix.call('fileManager', 'getFile', artifactsPath))
        const accounts = await web3.eth.getAccounts()

        let contract = new web3.eth.Contract(metadata.abi)

        contract = contract.deploy({
            data: metadata.data.bytecode.object,
            arguments: ["Mask", "N95"]
        })

        newContractInstance = await contract.send({
            from: accounts[0],
            gas: 1500000,
            gasPrice: '30000000000'
        })
        console.log(newContractInstance.options.address)
    } catch (e) {
        console.log(e.message)
    }
})()