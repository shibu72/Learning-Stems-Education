/* eslint-disable no-unused-vars */
import React from 'react'
import Button from '../../components/shared/Button';

export default function ApplyAsTutor() {

    const countries = [
        "United States",
        "Canada",
        "Mexico",
        "Brazil",
        "Argentina",
        "Germany",
        "France",
        "Spain",
        "Italy",
        "United Kingdom",
    ];

    const programs = [
        "Math and English Tuition",
        "11 Plus and Entrance Exams",
        "GCSE preparation and tutoring"
    ];

    const classSub = [
        "Math",
        "English",
    ]

    return (
        <div className='backdrop-brightness-50'>

            <div className='w-[835px] m-auto bg-[#ffffff] rounded-[12px] p-[48px] grid'>


                <div>
                    <h2 className='w-[700px] text-[30px] font-semibold leading-[38px]'>To apply as a tutor</h2>
                    <p className='w-[627px] h-[48px] text-[16px] leading-[24px]'>You’ll need to provide some essential information about your qualifications, experience, and teaching style.</p>
                </div>

                <div className=''>
                    <h3>Program</h3>
                    <div className='flex gap-2 items-center w-[300px] h-[48px] border-2 border-[#029302] rounded-lg pl-4 text-[#029302]'>
                        <input className='w-[16px] h-[16px] valid:border-green-500' type="radio" id='onlineTuition' checked value='Online Tuition' />
                        <label className='text-[16px] font-normal ' htmlFor="onlineTuition">Online Tuition</label>
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-4 justify-between m-auto w-full'>
                    <div className='grid w-[305px]'>
                        <label htmlFor="firstName">First name</label>
                        <input className='border rounded-lg h-[48px] pl-4' type="text" id="firstName" name="firstName" required placeholder='Enter your first name' />
                    </div>
                    <div className='grid w-[305px]'>
                        <label htmlFor="lastName">Last name</label>
                        <input className='border rounded-lg h-[48px] pl-4' type="text" id="lastName" name="lastName" required placeholder='Enter your last name' />
                    </div>

                    <div className='grid w-[305px]'>
                        <label htmlFor="email">Email address</label>
                        <input className='border rounded-lg h-[48px] pl-4' type="email" id="email" name="email" required placeholder='Enter your email address' />
                    </div>

                    <div className='grid w-[305px]'>
                        <label htmlFor="phone">Phone number</label>
                        <input className='border rounded-lg h-[48px] pl-4' type="tel" id="phone" name="phone" required placeholder='Enter your phone number' />
                    </div>

                    <div className='grid w-[305px]'>
                        <label htmlFor="country">Country</label>
                        <select id="country" className='border rounded-lg h-[48px] px-4'>
                            <option value="">Select your country</option>
                            {countries.map((country) => (
                                <option key={country} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className='grid w-[305px]'>
                        <label htmlFor="experience">Experience</label>
                        <input className='border rounded-lg h-[48px] pl-4' type="number" id="experience" name="experience" required placeholder='1 years' />
                    </div>

                    <div className='grid w-[305px]'>
                        <label htmlFor="program">Program</label>
                        <select id="program" className='border rounded-lg h-[48px] pl-4'>
                            <option value="">Select your program</option>
                            {programs.map((program) => (
                                <option key={program} value={program}>
                                    {program}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className='grid w-[305px]'>
                        <label htmlFor="class">Class</label>
                        <select className='border rounded-lg h-[48px] pl-4' name="class" id="class">
                            <option value="">Select your class</option>
                            {classSub.map((classSub) => (
                                <option key={classSub} value={classSub}>
                                    {classSub}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className='grid justify-center gap-6 m-auto items-center'>
                    <div className=''>
                        <label htmlFor="curriculumVitae" className="block text-gray-700 font-bold mb-2">
                            Curriculum Vitae
                        </label>
                        <input type="file" id="curriculumVitae" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                    </div>

                    <div>
                        <label htmlFor="videoResume" className="block text-gray-700 font-bold mb-2">
                            Video Resume
                        </label>
                        <input
                            type="file" id="videoResume" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required
                        />
                    </div>

                    <div className='w-[520p]'>
                        {/* <button type="submit">Submit</button> */}
                        <Button />
                    </div>

                </div>

            </div>
        </div>
    )
}
