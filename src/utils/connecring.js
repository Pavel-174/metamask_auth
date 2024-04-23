const addNetwork = () => {
    const params = [{
        chainId: '0xaa36a7',
        chainName: 'Ethereum Sepolia',
        nativeCurrency: {
            name: 'Ethereum Sepolia',
            symbol: 'ETH',
            decimals: 18
        },
        rpcUrls: ['https://rpc.sepolia.org'],
        blockExplorerUrls: ['https://sepolia.etherscan.io']
    }]

    window.ethereum.request({ method: 'wallet_addEthereumChain', params })
        .then(() => console.log('Success'))
        .catch((error) => console.log("Error: " + error.message))
}

const changeNetwork = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0xaa36a7' }],
        });
      } catch (error) {
        console.error(error);
      }
    }
}

export const connectAndSign = async (sdk, dispatch, setAccount) => {
    try {
        const signResult = await sdk?.connectAndSign({
            msg: "Connect + Sign message",
        });
        const accounts = await sdk?.connect();
        console.log(signResult)
        localStorage.setItem('account', accounts?.[0]);
        localStorage.setItem('sign', signResult);
        dispatch(setAccount(accounts?.[0]));
        await changeNetwork();
        addNetwork();

    } catch (err) {
        console.log("failed to connect..", err);
    }
};


export const disconnect = () => {
    console.log()
    localStorage.clear();
    window.location.reload();
};