import React from 'react';
import { Cwc } from '../components/index';
import bitcoin from '../assets/bitcoin-wallet.svg';
import commerce from '../assets/shopping-cart.svg';
import cloud from '../assets/withdraw-money.svg';

export default function Future() {
  return (
    <div>
        <div className='container vh-100'>
            <div class = "row">
                <div className='col-md-6 col-xs-12 col-lg-6 col-sm-12 my-auto' data-aos = "fade-up" data-aos-delay='750' data-aos-duration='3000' >
                    <h3 className='text-primary mb-3 text-start'> Build the future of crypto and web3 </h3>
                    <h3 className='text-white mb-3 text-start'> to deepen the adoption of crypto </h3>
                    <p className='text-white fs-5 text-start'>
                    With Bitpowr blockchain infrastructure and cloud API, you can start building your awesome crypto project today with little setup. Whether it's crypto payment, mobile wallet, crypto exchanges, staking, or fintech, you can build it all on Bitpowr API.
                    </p>
                </div>
                <div className='col-md-6 col-xs-12 col-lg-6 col-sm-12' data-aos = "fade-down" data-aos-delay='750' data-aos-duration='3000'>
                    <Cwc photo = {bitcoin} title = {"Wallet"} description = {"Easily create and manage multi-chain crypto wallets using a single API"} />
                    <Cwc photo = {cloud} title = {"Commerce"} description = {"Process and accept crypto payment and process settlement in fiat"} />
                    <Cwc photo = {commerce} title = {"Cloud"} description = {"Start building crypto projects today using our blockchain cloud development API"} />
                </div>
            </div>
        </div>
    </div>
  )
}
