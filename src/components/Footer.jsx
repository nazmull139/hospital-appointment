import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm  '>

            {/* Left side */}

            <div>
                <img className='mb-5 w-40' src={assets.diit}/>
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Your Health is Our Priority. Prioritizing your care with every step
we take. Committed to healing you—today, tomorrow & always.</p>
            </div>

            {/* Center section */}
            <div>
                <p className='text-xl font-medium mb-5'>Hospital </p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li><NavLink   to='/' end ><p  >Home</p></NavLink></li>
                    <li> <NavLink  to='/about'><p >About</p></NavLink></li>
                    <li><NavLink  to='/contact'><p >Contact</p></NavLink></li>
                    <li><NavLink   to='/'  ><p  >Privacy policy</p></NavLink></li>
                </ul>
            </div>
            {/* Right side */}
            <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+880 1705776033 or +880 01744387719</li>
                    <li>nazmul210121@diit.edu.bd or tanvir210111@diit.edu.bd</li>
                </ul>
            </div>
        </div>

                 {/* Copyright text */}

        <div>
                         <hr/>
            <p className='py-5 text-sm text-center'>Copyright © 2025 Nazmul(210121) & Tanvir(210111) . All rights reserved.</p>
        </div>

    </div>
  )
}

export default Footer
