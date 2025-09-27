import { Calendar, Cpu, HandFist, Mail, SearchCheck, SquarePen, Wifi, Wrench } from 'lucide-react'
import React from 'react'

export default function WorkProccess() {
    return (
        <div className='bg-gray-200 px-4 md:px-17 py-7'>
            {/* Indobot Academy */}
            <div className='max-w-6xl mx-auto mt-23 '>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
                    <div className='space-y-8 flex flex-col items-center justify-center mb-6'>
                        <h1 className='font-bold text-xl lg:text-4xl'>Intern PT. Ozami Inti Sinergy - Digital Marketing</h1>
                        <p className='font-light text-sm md:text-lg lg:text-xl'>Assisted with scheduling and managing bootcamp closing events on Indobot and Mysertifikat platforms. Gained hands-on experience in email management and editing using the Kirim.email app. Developed SEO-optimized content to enhance website visibility. Led the design of an IoT-based automatic irrigation system, integrating IoT technology and enhancing skills in programming, data processing, and technical troubleshooting in the agricultural sector.</p>
                    </div>
                    <div className=' container grid grid-cols-1 md:grid-cols-2'>
                        <div className="gap-2 -mt-9 ">
                            <div className='bg-white m-2 p-5 space-y-1 '>
                                <Calendar />
                                <h3 className='font-bold text-base'>1. Event Management</h3>
                                <p className='font-light'>Assisted in managing bootcamp closing events on Indobot and Mysertifikat platforms, including scheduling, email writing, and learning email editing.</p>
                            </div>
                            <div className='bg-white m-2 p-5 space-y-1'>
                                <Cpu />
                                <h3 className='font-bold text-base'>3. IoT Project</h3>
                                <p className='font-light'>Led the design and creation of an IoT-based automatic irrigation system, gaining hands-on experience in IoT technology, sensors, actuators, and system integration.</p>
                            </div>
                        </div>
                        <div className="gap-2 mt-6">
                            <div className='bg-white m-2 p-5 space-y-1 '>
                                <SquarePen />
                                <h3 className='font-bold text-base'>2. SEO Writing</h3>
                                <p className='font-light'>Responsible for writing SEO-optimized content for Indobot and Mysertifikat websites to improve visibility and rankings.</p>
                            </div>
                            <div className='bg-white m-2 p-5 space-y-1'>
                                <Mail />
                                <h3 className='font-bold text-base'>4. Social Media Marketing</h3>
                                <p className='font-light'>Posted promotional posters on social media and actively engaged in customer acquisition for bootcamp events and programs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Indobot Academy */}


            {/* Grapari Telkomsel */}
            <div className='max-w-6xl mx-auto mt-23 '>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
                    <div className=' container grid grid-cols-1 md:grid-cols-2'>
                        <div className="gap-2 -mt-9">
                            <div className='bg-white m-2 p-5 space-y-1 '>
                                <Wrench />
                                <h3 className='font-bold text-base'>1. Installation & Maintenance</h3>
                                <p className='font-light'>Assisted in the installation, maintenance, and troubleshooting of telecommunication systems for Indihome customers, ensuring high-quality service delivery.</p>
                            </div>
                            <div className='bg-white m-2 p-5 space-y-1'>
                                <Wifi />
                                <h3 className='font-bold text-base'>3. Network Performance</h3>
                                <p className='font-light'>Collaborated with senior technicians to manage network performance, performing diagnostics, and optimizing service quality.</p>
                            </div>
                        </div>
                        <div className="gap-2 mt-12">
                            <div className='bg-white m-2 p-5 space-y-1 '>
                                <SearchCheck />
                                <h3 className='font-bold text-base'>2. On-Site Inspections:</h3>
                                <p className='font-light'>Conducted on-site inspections to identify broadband connection issues, providing timely solutions to enhance customer satisfaction.</p>
                            </div>
                            <div className='bg-white m-2 p-5 space-y-1'>
                                <HandFist />
                                <h3 className='font-bold text-base'>4. Technical Support</h3>
                                <p className='font-light'>Provided technical support and guidance to customers regarding internet setup, usage, and troubleshooting procedures.</p>
                            </div>
                        </div>
                    </div>

                    <div className='space-y-8 flex flex-col items-center justify-center'>
                        <h1 className='font-bold text-xl lg:text-4xl'>Intern  GraPARI Telkomsel Purwokerto - Network Engineering</h1>
                        <p className='font-light text-sm md:text-lg lg:text-xl'>Assisted in the installation, maintenance, and troubleshooting of Indihome telecommunication systems. Conducted on-site inspections to resolve broadband issues and optimize service quality. Gained hands-on experience with fiber optics, routers, modems, and network infrastructure, while providing technical support to customers.</p>
                    </div>
                </div>
            </div>
            {/* Grapari Telkomsel */}
        </div>
    )
}
