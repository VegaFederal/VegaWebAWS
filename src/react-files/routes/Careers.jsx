import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import stlSkyline from '../assets/Footer Stl Skyline Banner.jpg';
import { FaDropbox } from 'react-icons/fa';
import axios from 'axios';
import React, { useState } from 'react';



const Careers = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: ''
      });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
          await axios.post('https://d2hck2t4lrfp15.cloudfront.net/api/submit-contact', formData);
          alert('Application submitted successfully! We will contact you soon.');
          
          // Reset form
          setFormData({
            firstName: '',
            lastName: '',
            email: ''
          });
        } catch (err) {
          console.error('Submission error:', err);
          alert('Submission failed. Please try again.');
        } finally {
          setIsSubmitting(false);
        }
      };
    
    return(
        <>
        <section className='partners'>
        <div
        className="
            bg-[url('./assets/Capabilities_Banner.jpg')]   /* ← your image */
            bg-cover                        /* cover the entire area */
            bg-center                       /* center it */
            bg-no-repeat                    /* don't tile it */
            h-svh        /* make the section full‑viewport height */
            z-[-1]
        "
        >
        <header>
            <div>
                <Navbar color_career='text-secondary'/>
            </div>
        </header>
        {/* your content here */}   
            <section className='flex justify-center items-center h-screen'>
                <div className='flex-col bg-gray-400 w-[1000px] h-[800px] mt-[1000px] rounded-2xl'>
                    <h1 className='text-white font-bold text-[48px] ml-[20px] mb-[50px]'>Career Application</h1>
                    
                    <form onSubmit={handleSubmit}>
                        <p className='text-white font-bold text-[24px] ml-[20px] mb-[10px]'>First Name</p>
                        <input
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className='bg-white rounded-xl w-[500px] h-[50px] text-[24px] border-1 ml-[20px] mb-[10px]'
                            required
                        />
                        <p className='text-white font-bold text-[24px] ml-[20px] mb-[10px]'>Last Name</p>
                        <input
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className='bg-white rounded-xl w-[500px] h-[50px] text-[24px] border-1 ml-[20px] mb-[10px]'
                            required
                        />
                        <p className='text-white font-bold text-[24px] ml-[20px] mb-[10px]'>Email</p>
                        <input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className='bg-white rounded-xl w-[500px] h-[50px] text-[24px] border-1 ml-[20px] mb-[50px]'
                            required
                        />
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`px-9 py-5 text-2xl font-semibold text-white rounded-2xl ml-[20px] ${
                              isSubmitting 
                                ? 'bg-gray-400 cursor-not-allowed' 
                                : 'bg-rose-600 hover:bg-red-700 hover:text-white'
                            }`}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit Application'}
                        </button>
                    </form>
                </div>  
            </section>   
        </div>
    </section>

    <section>
        <div
        className="
        bg-primary
        bg-cover                        /* cover the entire area */
        bg-center                       /* center it */
        bg-no-repeat                    /* don't tile it */
        h-screen                        /* make the section full‑viewport height */
        z-[-1]
        "
        >

        </div>
    </section>
    <section class="
       bg-primary   /* ← your image */
       bg-cover                        /* cover the entire area */
       bg-center                       /* center it */
       bg-no-repeat                    /* don't tile it */
       h-screen                        /* make the section full‑viewport height */
       z-[-1]
        ">
        <div class='flex flex-col items-left gap-15 ml-30 xl:ml-[500px] '>
            <h5 class='text-[48px] text-white font-bold mt-[100px]'>Our Roots.</h5>
            <h3 class='text-[40px] text-rose-600 '>Midwestern Values. Global Impact.</h3>
            <ul class='ml-[34px]'>
               <li class='text-white text-[24px] mb-[24px] ml-[-35px]'>Vega calls St. Louis home — by choice.</li>
               <li class='text-white text-[24px] mb-[24px] ml-[-35px]'>Away from the Beltway, we bring a grounded, practical, and human-centered approach.</li>
               <li class='text-white text-[24px] mb-[24px] ml-[-35px]'>We believe in handshake deals, honest partnerships, and mission-first thinking.</li>
                <li class='text-white text-[24px] ml-[-35px]'>We meet our customers where they are — literally and figuratively.</li>
            </ul>
            </div>
                <img src={stlSkyline} alt='' className="object-contain w-full"/>
            </section>
        <section>
            <Footer></Footer>
        </section>
    </>
    )
}

export default Careers