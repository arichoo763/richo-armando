import Image from 'next/image'
import React from 'react'

export default function Skills() {
    return (
        <div className='max-w-6xl mx-auto px-4 '>
            <div className='flex flex-col justify-center px-4 items-center mb-5 md:mb-10'>
                <h1 className='text-xl md:text-4xl font-bold'>Skills</h1>
                <p className='text-sm md:text-xl font-light'>The Skills, tools and thechnologies i am really good at:</p>
            </div>
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 mx-auto gap-4'>
                <div className='flex flex-col items-center justify-center font-light'>
                    <Image src='/images/1.jpg' alt={'figma'} height={100} width={100} className='relative h-full w-full rounded-3xl' />
                    Figma
                </div>
                <div className='flex flex-col items-center justify-center font-light'>
                    <Image src='/images/2.jpg' alt={'ps'} height={100} width={100} className='relative h-full w-full rounded-3xl' />
                    Photoshop
                </div>
                <div className='flex flex-col items-center justify-center font-light'>
                    <Image src='/images/3.jpg' alt={'canva'} height={100} width={100} className='relative h-full w-full rounded-3xl' />
                    Canva
                </div>
                <div className='flex flex-col items-center justify-center font-light'>
                    <Image src='/images/5.jpg' alt={'html'} height={100} width={100} className='relative h-full w-full rounded-3xl' />
                    HTML
                </div>
                <div className='flex flex-col items-center justify-center font-light'>
                    <Image src='/images/ts.jpg' alt={'ts'} height={100} width={100} className='relative h-full w-full rounded-3xl' />
                    Type Script
                </div>
                <div className='flex flex-col items-center justify-center font-light'>
                    <Image src='/images/js.jpg' alt={'js'} height={100} width={100} className='relative h-full w-full rounded-3xl' />
                    Java Script
                </div>
                <div className='flex flex-col items-center justify-center font-light'>
                    <Image src='/images/tailwind.jpg' alt={'tw'} height={100} width={100} className='relative h-full w-full rounded-3xl' />
                    Tailwind
                </div>
                <div className='flex flex-col items-center justify-center font-light'>
                    <Image src='/images/next.jpg' alt={'js'} height={100} width={100} className='relative h-full w-full rounded-3xl' />
                    Next Js
                </div>
                <div className='flex flex-col items-center justify-center font-light'>
                    <Image src='/images/react.jpg' alt={'react'} height={100} width={100} className='relative h-full w-full rounded-3xl' />
                    React Js
                </div>
                <div className='flex flex-col items-center justify-center font-light'>
                    <Image src='/images/vscode.jpg' alt={'vs'} height={100} width={100} className='relative h-full w-full rounded-3xl' />
                    Visual Studio
                </div>
                <div className='flex flex-col items-center justify-center font-light'>
                    <Image src='/images/ai.jpg' alt={'ai'} height={100} width={100} className='relative h-full w-full rounded-3xl' />
                    Adobe Ilustrator
                </div>
                <div className='flex flex-col items-center justify-center font-light'>
                    <Image src='/images/cisco.jpg' alt={'pc'} height={100} width={100} className='relative h-full w-full rounded-3xl' />
                    Packet Tracer
                </div>
                <div className='flex flex-col items-center justify-center font-light'>
                    <Image src='/images/ws.jpg' alt={'ws'} height={100} width={100} className='relative h-full w-full rounded-3xl' />
                    Wireshark
                </div>
                <div className='flex flex-col items-center justify-center font-light'>
                    <Image src='/images/pp.jpg' alt={'pp'} height={100} width={100} className='relative h-full w-full rounded-3xl' />
                    Power Point
                </div>
                <div className='flex flex-col items-center justify-center font-light'>
                    <Image src='/images/word.jpg' alt={'word'} height={100} width={100} className='relative h-full w-full rounded-3xl' />
                    Ms. World
                </div>
                <div className='flex flex-col items-center justify-center font-light'>
                    <Image src='/images/excel.jpg' alt={'excel'} height={100} width={100} className='relative h-full w-full rounded-3xl' />
                    Ms. Excel
                </div>
            </div>
        </div>
    )
}
