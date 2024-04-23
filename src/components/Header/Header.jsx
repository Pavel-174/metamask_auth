import React, { useEffect } from 'react';
import './Header.scss';
import logo from "../../img/LOGO.svg";
import metamask from '../../img/metamask.svg'
import logout from '../../img/disconnect.svg'
import { setAccount } from '../../redux/account/account';
import { useSDK } from "@metamask/sdk-react";
import { cutAddress } from '../../utils/support';
import { useSelector, useDispatch } from 'react-redux';
import { wallet } from '../../constants/constants';
import { connectAndSign, disconnect } from '../../utils/connecring';


function Header() {
    const dispatch = useDispatch();
    const { account } = useSelector((state) => state.account);
    const { sdk, connected } = useSDK();

    useEffect(() => {
        if (wallet) {
            dispatch(setAccount(wallet))
        }
    }, [wallet]);

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
                onClick={ () => connectAndSign(sdk, dispatch, setAccount)}
            >
                Connect Wallet
            </button>
            }
            { (connected && account) && (
                <div>
                    <button 
                        className='header__disconnect' 
                        onClick={() => disconnect()}
                    >
                        <img 
                            src={metamask}
                            alt='metamask logo'
                        />
                        {cutAddress(account)}
                        <img 
                            src={logout}
                            alt='disconnect'
                        />
                </button>
                </div>
            )}
        </header>
    );
}

export default Header;