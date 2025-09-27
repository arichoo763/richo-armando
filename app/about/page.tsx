import { Button } from '@/components/ui/button';
import { Instagram, Linkedin, PhoneCall } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function About() {
    return (
        <div>
            {/* HeroBanner Section */}
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center max-w-6xl mx-auto gap-3 p-10'>
                <div className='mb-4'>
                    <div className='space-y-4'>
                        <h1 className='text-2xl md:text-4xl lg:text-5xl font-semibold'>Hello, i&apos;m Richo Armando</h1>
                        <h2 className='font-light text-sm md:text-lg lg:text-xl'>
                            I am a recent graduate with a Bachelors degree in Telecommunication Engineering,
                            currently developing my skills in programming. Additionally, I have a strong interest in IT infrastructure
                            and am dedicated to expanding my expertise in both fields to build a solid career in technology.
                        </h2>

                        <Button asChild variant={'primary'} className='w-full sm:w-auto'>
                            <Link href='https://wa.me/6281226045297'>Say Hello</Link>
                        </Button>
                    </div>
                </div>
                <div className='flex items-center justify-end'>
                    <div className='relative aspect-[3/4]'>
                        <Image src='/images/formal.jpg' alt={'Me'} width={300} height={400} className='rounded-3xl h-full w-full object-cover object-top shadow-2xs' />
                    </div>
                </div>
            </div>

            {/* ShortExperience Section */}
            <div className='max-w-6xl mx-auto px-16 py-7'>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className='p-5 flex items-center justify-center flex-col'>
                        <div className="border h-[300px] aspect-[5/6]">
                            <Image src='/images/formal.jpg' alt={'Me'} width={200} height={300} className='w-full h-full object-cover object-top' />
                        </div>
                        <div className=" bg-white p-4 -mt-7">
                            <div className='flex gap-3'>
                                <Link href='/'>
                                    <Linkedin size={24} />
                                </Link>
                                <Link href='/'>
                                    <Instagram size={24} />
                                </Link>
                                <Link href='/'>
                                    <PhoneCall size={24} />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center p-3 mt-12'>
                        <div className='space-y-5'>
                            <h1 className='text-xl md:text-3xl font-semibold '>Recent Graduate Developing My Career in Programming and Network Infrastructure</h1>
                            <h2 className='font-light text-sm md:text-lg lg:text-xl'>
                                I am currently learning and developing services for clients, focusing on creating websites, web services,
                                and network infrastructures. I am passionate about building efficient, secure, and scalable network systems
                                while enhancing user experience through technology. At the moment, I am honing my technical skills in programming
                                and network management, working on personal projects, and gaining real-world experience through applications.
                                I am committed to growing and building my career in the technology and network infrastructure fields.
                            </h2>
                            <Button variant={'primary'} className='w-full sm:w-auto'>
                                <Link href='/file/cv.pdf'>Download CV</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
