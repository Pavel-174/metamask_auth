import React, { useState } from 'react';
import './Header.scss';
import logo from "../../img/LOGO.svg";
import { useSDK } from "@metamask/sdk-react";

function Header() {
    const [account, setAccount] = useState();
    const { sdk, connected, connecting, provider, chainId } = useSDK();

    const connect = async () => {
        try {
            const accounts = await sdk?.connect();
            setAccount(accounts?.[0]);
        } catch (err) {
            console.warn("failed to connect..", err);
        }
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
                onClick={connect}
            >
                Connect Wallet
            </button>
            }
            {connected && (
                <div>
                    <>
                        {chainId && `Connected chain: ${chainId}`}
                        <p></p>
                        {account && `Connected account: ${account}`}
                    </>
                </div>
            )}
        </header>
    );
}

export default Header;