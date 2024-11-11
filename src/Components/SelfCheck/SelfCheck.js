import React from 'react'
import check from '../images/self-check.png'
import thermometer from '../images/thermometer.png'
import blood from '../images/blood_pressure.png'

import './SelfCheck.css'

const SelfCheckup = () => {
    return (
        <div className='check-body'>
            <div className='self-check-head'>
                <img src={check}></img>
                <p  >A self-health checkup is a proactive approach to monitoring your own health and well-being. By regularly assessing key aspects like heart rate, blood pressure, weight, and mental wellness, individuals can detect early signs of potential health issues and seek timely intervention. Simple practices, such as checking your pulse, observing any unusual symptoms, and keeping track of changes in physical or mental health, are essential steps in self-care. Regular self-health checkups help cultivate a deeper awareness of one’s body and its needs, empowering individuals to make informed choices about diet, exercise, and lifestyle habits. Additionally, self-monitoring can aid in setting personal health goals and preventing chronic conditions, ultimately contributing to a healthier, more balanced life.</p>
            </div>
            <div className='content'>
                <div className='thermometer'>
                    <img src={thermometer} />
                    <div className='text-info'>
                        <strong>Check your temperature</strong>
                        <p>Oral thermometers measure the temperature in the mouth. Most modern oral thermometers are digital. They usually beep when they complete a reading, making them very easy for most people to use. Oral thermometers are easier to use in adults, as they require a person to close their mouth and keep the thermometer in place for about 20 seconds to get an accurate reading. The thermometer should rest under the tongue and as close to the center of the mouth as possible. After taking the reading, it will display the person’s temperature.</p>
                    </div>
                </div>
            </div>
            <div className='content'>
                <div className='thermometer'>
                    <img src={blood} />
                    <div className='text-info'>
                        <strong>Check your blood pressure</strong>
                        <p>Blood pressure is one of the major ways through which the condition of the heart can be described. High blood pressure or hypertension weakens your arteries, as well as the risk of heart attack, stroke, and other heart diseases. Purchasing a home blood pressure monitor enables a person to check the figure of this important sign more often. A healthy blood pressure reading is generally considered 120/80 mmHg or lower, but treatment goals may vary based on individual health conditions, with 130/80 mmHg often used as a target for those at risk of heart disease. If your blood pressure is high, then you should go to your doctor for consultation frequently.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelfCheckup