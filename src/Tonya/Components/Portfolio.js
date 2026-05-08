import React from "react";
import tBot from '../../Assets/TBot.png';

const Portfolio = () => {
  return (
    <div className={'myPortfolio'} id='portf'>
      <div className={'portfolio'}>
        My Portfolio
      </div>
      <div>
        <ul className={'portfList'}>
          <li> <a href={'https://sites.google.com/view/tonyajudkins-pcty/home'} target="_blank" rel="noopener noreferrer" > PCTY Social (My first React app) </a></li>
          <div className={'descr'}> -Internal social app for employees</div> 
          <br/>
          <li> <a href={'https://sites.google.com/view/tonyajudkins-vq/home'} target="_blank" rel="noopener noreferrer" > VQ Demo</a></li>
          <div className={'descr'}> -Interactive demo to showcase sports analysis API </div>
          <br/>
          <li> <a href={'https://dyamonds-sweet16.herokuapp.com/'} target="_blank" rel="noopener noreferrer" > Dyamond's Sweet 16</a></li>
          <div className={'descr'}> -Invitation and RSVP to a party</div>
          <br/>
          <li> <a href={'https://tonyajudkins.com'} target="_blank" rel="noopener noreferrer" >Tonya Judkins </a></li>
          <div className={'descr'}> -My website (yes.. this one)</div>
        </ul>
        <ul className={'portfList'}>
          <li> <a href={' https://tbot2020.github.io/'} target="_blank" rel="noopener noreferrer" > <img className={'tBot'} src={tBot} width={'15vw'} alt={'hello T'}/>
            &nbsp;&nbsp; T-Bot (my personal bot)</a></li>
        </ul>
      </div>
    </div>
  )
};

export default Portfolio
