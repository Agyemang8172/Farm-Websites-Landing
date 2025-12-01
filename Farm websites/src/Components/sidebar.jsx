import React from 'react'
import './Sidebar.css'

const sidebar = () => {
  return (
    <aside className='sideBar' >
        <div  className='PowerBtn'>
            <img src='/icons/fluent_power-24-filled.png'   alt='logo'/>
        </div>


            {/*  navbar from dashboard to settings */}
           <nav className='navLinks'>
              <a href="#" className='nav-item dashboard'>
                    <img src='/icons/Vector.png' alt="dashboard" />
                    <p>Dashborad</p>
                </a>
                <a href="#" className='nav-item'>
                    <img src='/icons/Vector (1).png' alt='order' />
                    <p>Order</p>
                </a>
                <a href="#" className='nav-item'>
                    <img src='/icons/Vector (2).png' alt='producs' />
                    <p>Products</p>
                </a>
                <a href="#" className='nav-item'>
                    <img src='/icons/Vector (3).png' alt='shipping' />
                    <p>Shipping</p>
                </a>
                <a href="#" className='nav-item'>
                    <img src='/icons/Vector (4).png' alt='payments'/>
                    <p>Payments</p>
                </a>
                <a href="#" className='nav-item'>
                    <img src='/icons/Vector (5).png' alt='settinsg'/>
                    <p>Settings</p>
                </a>
        </nav>
 
       {/* Customer support to Connect now button */}
         <div className='customer-support'>
            <h1 className='head'> Customer Support</h1>

            <p>
                Ask you query , place
                requests or important
                issues. Our support 
                team will contact 24/7 
                to you.
            </p>
             <button className='connect'><img src='/icons/Group 2.png'/>  Connect Now</button>
         </div>


            <div className='policy'>
                <p>Terms & Services</p>
                <p>Privacy Policy</p>
            </div>
     

      
    </aside>
  )
}

export default sidebar
