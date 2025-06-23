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
        email: '',
        job: 'Select',
        message: ''
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          // Replace with your actual API endpoint
          await axios.post('YOUR_API_GATEWAY_URL/api/submit-contact', formData);
          alert('Application submitted!');
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            job: 'Select',
            message: ''
          });
        } catch (err) {
          alert('Submission failed.');
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
                <div className='flex-col bg-gray-400 w-[1000px] h-[1500px] mt-[1000px] rounded-2xl'>
                    <h1 className='text-white font-bold text-[48px] ml-[20px] mb-[50px]'>Application Form</h1>
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
                            className='bg-white rounded-xl w-[500px] h-[50px] text-[24px] border-1 ml-[20px] mb-[10px]'
                            required
                        />
                        <p className='text-white font-bold text-[24px] ml-[20px] mb-[10px]'>Select Job</p>
                        <select
                            name="job"
                            value={formData.job}
                            onChange={handleChange}
                            className='bg-white w-[200px] h-[40px] rounded-xl border-1 mb-[10px] ml-[20px]'
                            required
                        >
                            <option value="Select">Select</option>
                            <option value="Job 1">Job 1</option>
                            <option value="Job 2">Job 2</option>
                            <option value="Job 3">Job 3</option>
                        </select>
                        <p className='text-white font-bold text-[24px] ml-[20px] mb-[10px]'>Message</p>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className='bg-white rounded-xl resize-none w-[900px] h-[150px] text-[24px] border-1 ml-[20px] mb-[50px]'
                            required
                        />
                        <button
                            type="submit"
                            className='px-9 py-5 text-2xl font-semibold text-white rounded-2xl bg-rose-600 hover:bg-red-700 hover:text-white ml-[20px]'
                        >
                            Submit
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