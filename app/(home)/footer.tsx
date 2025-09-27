import Link from 'next/link'
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
    return (
        <div className='w-screen mx-auto py-4 mt-16'>
            <div className='flex flex-col justify-center items-center h-full p-4'>
                <div className='flex  gap-2'>
                    <Link href={'https://www.linkedin.com/in/arichoo763/'} className='text-indigo-700 hover:text-indigo-400'>
                        <FaLinkedin size={32} />
                    </Link>
                    <Link href={'https://www.instagram.com/a.richoo/#'} className='text-indigo-700 hover:text-indigo-400'>
                        <FaInstagram size={32} />

                    </Link>
                    <Link href={'https://github.com/arichoo763'} className='text-indigo-700 hover:text-indigo-400'>
                        <FaGithub size={32} />
                    </Link>
                </div>
                <div>
                    @2025 Richo Armando
                </div>
            </div>
        </div>
    )
}
