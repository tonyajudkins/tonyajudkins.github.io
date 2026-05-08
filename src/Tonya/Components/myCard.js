import React from 'react';
import linkedin from '../../Assets/linkedIn.svg';
import facebook from '../../Assets/facebook.svg';
import github from '../../Assets/github.svg';
import resume from '../../Assets/resume.svg';
import resumeDoc from '../../Assets/lJudkinsResume2022.pdf';

import './myCard.css';

const MyCard = () =>{
 
    return (
        <ul className={'socialCard'} >
          <li className={'social'}> <a href={'https://www.linkedin.com/in/latonyajudkins'} target="_blank" rel="noopener noreferrer" ><img className={'socialIcon'} src={linkedin} alt={'linkedin'}/> LinkedIn </a></li>
          <li className={'social'}> <a href={'https://www.facebook.com/Honey.Judkins'} target="_blank" rel="noopener noreferrer" ><img className={'socialIcon'}  src={facebook} alt={'facebook'}/> FaceBook </a></li>
          <li className={'social'}> <a href={'https://www.github.com/latonyajudkins'} target="_blank" rel="noopener noreferrer" ><img className={'socialIcon'}  src={github} alt={'git'} /> GitHub </a></li>
          <li className={'resume'}> <a href={resumeDoc} target="_blank" rel="noopener noreferrer"><img className={'socialIcon'} src={resume} alt={'resume'}/> Resume</a> </li>
          
        </ul>
    );
};

export default MyCard;
