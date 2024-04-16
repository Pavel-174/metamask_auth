import React, { useState, useEffect } from 'react';
import './Header.scss';
import logo from "../../img/LOGO.svg";
import { useSDK } from "@metamask/sdk-react";
import { cutAddress } from '../../utils/support';

function Header() {
    const wallet = localStorage.getItem('account');
    const [account, setAccount] = useState(wallet);
    const { sdk, connected, connecting, provider, chainId } = useSDK();

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

    const connectAndSign = async () => {
        try {
            const signResult = await sdk?.connectAndSign({
                msg: "Connect + Sign message",
            });
            const accounts = await sdk?.connect();
            console.log(signResult)
            localStorage.setItem('account', accounts?.[0]);
            localStorage.setItem('sign', signResult);
            setAccount(accounts?.[0]);
            await changeNetwork();
            addNetwork();

        } catch (err) {
            console.log("failed to connect..", err);
        }
    };

    
    const disconnect = () => {
        console.log()
        localStorage.clear();
        window.location.reload();
    };

    return (
        <header className="header">
            <img
                className='header__logo'
                src={logo}
                alt='sfxdx'
            />
            { !connected &&       
            <button 
                className='header__button'
                onClick={connectAndSign}
            >
                Connect Wallet
            </button>
            }
            {connected && (
                <div>
                    <button className='header__disconnect' onClick={() => disconnect()}>{cutAddress(account)}</button>
                </div>
            )}
        </header>
    );
}

export default Header;