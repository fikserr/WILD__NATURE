/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import SectionMap from '../img/section1__map.png';
import SectionBranch from '../img/section1__branch.png';

export default function Main(){
    return(
        <main className='main'>

            
                <div className='container'>
                    <div className='main__content'>
                        <img src={SectionBranch} className='section__branch' alt='image'/>
                        <img src={SectionMap} className='section__map' alt='image'/>
                        <p className='main__txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis massa dolor commodo pretium massa amet elementum volutpat. Cras aenean massa sit sed quis lectus nulla et. Augue interdum proin a aliquam. Amet, ultrices feugiat duis venenatis sed volutpat bibendum. Adipiscing adipiscing aliquet id neque, risus id dictum est. Maecenas etiam dolor, mi tempor.</p>
                    </div>
                    <p className='main__txt-two'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui feugiat orci sed nibh in facilisis viverra quis. Id nisi fermentum molestie auctor integer. Amet id ut nibh tortor vitae egestas sem purus quis. </p>

                </div>
        </main>
    )
}
