import React from 'react';
import { Maintext, Card , Hedge, Nav} from './index';
import { Mainsection, Future, Developer, Accept, Demo, Faq, Seamless, Subscribe, Footer} from '../container';
import ReactPlayer from 'react-player/youtube';

export default function Acc() {
  return (
    <div>
      <Nav />
         <Mainsection />

<Future />

<Maintext littleText={"Our Offering"} mainText = {"Build on the Blockchain with ease"} sectionText = {"With Bitpowr wallet infrastructure, you can create and manage multi-chain crypto-wallets, process and accept crypto payments, manage digital assets and connect securely to our Defi, exchange, and settlement network. All these can be done using a single API."} />

<div className='container my-4 vh-100'>
  <ReactPlayer
    className='react-player'
    url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
    width='100%' height='75%'

  />
</div>

<Maintext littleText={"Solution"} mainText = {"Transaction & wallet management system"} sectionText = {"Get the best solution to handle all crypto payments, transfers and liquidation to help you handle all your organizations transactions with our advanced wallet solution and flexible Policies."} />

<Developer />

<Accept />

<Demo />

<Faq />

<Subscribe />

<Seamless />


<Footer />
    </div>
  )
}
