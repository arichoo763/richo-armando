import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function Contact() {
    return (

        <div className='max-w-6xl mx-auto mt-32'>
            <div className='container bg-white shadow-lg md:p-12'>
                <div className='flex flex-col justify-center items-center space-y-2'>
                    <h1 className='font-bold text-4xl'>
                        Contat Me
                    </h1>
                    <h2 className='text-xl font-light'>Please Contact Me</h2>
                </div>
                <div className='flex flex-col space-y-7 p-8 rounded-2xl'>
                    <input
                        type="text"
                        className='border-2 p-4 rounded-2xl'
                        placeholder="Masukan Nama..."
                    />
                    <input
                        type="email"
                        className='border-2 p-4 rounded-2xl'
                        placeholder="Masukan Email..."
                    />
                    <input
                        type="number"
                        className='border-2 p-4 rounded-2xl '
                        placeholder="Masukan No Telepon..."
                    />
                    <Link className='' href={'https://wa.me/6281226045297'}>
                        <Button variant={'primary'} className='h-12 w-42 cursor-grab'>
                            Send Me
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
