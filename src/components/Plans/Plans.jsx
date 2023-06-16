import React from 'react'
import './Plans.css'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
const Plans = () => {
  return (
    <div className='plans-containers'>
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>
    <div className="programs-header" style={ {gap:'2rem'} }>
            <span className="stroke-text">explore our </span>
            <span>programs</span>
            <span className="stroke-text">to shope you</span>
        </div>


        {/* planes card */}
        <div className="plans" id='Plans'>

        {plansData.map((plan , i)=>(
            <div className="plan" key={i}>
                {plan.icon}
                <span>{plan.name}</span>
                <span>${plan.price}</span>

                <div className="features">
                {plan.features.map((features , i)=>(

                    <div className='feature'>
                        <img src={whiteTick} alt="" />
                        <span key={i}>{features}</span>
                        </div>
                ))}
                </div>
                <div><span>see more benefits --></span>
                </div>
                <button className="btn">join now</button>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Plans