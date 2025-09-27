import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Portfolio() {
    return (
        <div className='max-w-6xl mx-auto'>
            <h1 className='text-xl md:text-5xl font-bold flex items-center justify-center mt-6'>Portfolio</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 md:m-14 rounded-xl px-4 gap-3 items-start'>
                <div className='bg-white flex flex-col items-center justify-center group'>
                    <div className='relative aspect-video border w-full rounded-xl overflow-hidden'>
                        <Image src='/images/email.png' alt={'email'} fill className='object-cover h-full w-full group-hover:scale-110 duration-300' />
                    </div>
                    <div className='p-2 space-y-3'>
                        <div className="min-h-14">
                            <h1 className='font-semibold text-xl line-clamp-2'>Closing Flagship</h1>
                        </div>
                        <p className='font-light line-clamp-3'>I managed the ad scheduling for the bootcamp on Indobot and Mysertifikat, while enhancing my email writing skills using Kirim.email, editing techniques, and gaining insights into digital marketing strategies, including the use of social media.</p>
                        <Button variant={'primary'} className='cursor-pointer'>
                            <Link href='#' />
                            Read More...
                        </Button>
                    </div>
                </div>
                <div className='bg-white flex flex-col items-center justify-center group'>
                    <div className='relative aspect-video border w-full rounded-xl overflow-hidden'>
                        <Image src='/images/seo.png' alt={'email'} fill className='object-cover h-full w-full group-hover:scale-110 duration-300' />
                    </div>
                    <div className='p-2 space-y-3'>
                        <div className="min-h-14">
                            <h1 className='font-semibold text-xl line-clamp-2'>SEO Article Writer </h1>
                        </div>
                        <p className='font-light line-clamp-3'>I was responsible for creating articles for the Indobot and Mysertifikat websites, gaining experience in SEO techniques (Search Engine Optimization) and developing skills in writing informative, engaging, and audience-relevant content.</p>
                        <Button variant={'primary'} className='cursor-pointer'>
                            <Link href='#' />
                            Read More...
                        </Button>
                    </div>
                </div>
                <div className='bg-white flex flex-col items-center justify-center group'>
                    <div className='relative aspect-video border w-full rounded-xl overflow-hidden'>
                        <Image src='/images/project.png' alt={'email'} fill className='object-cover h-full w-full group-hover:scale-110 duration-300' />
                    </div>
                    <div className='p-2 space-y-3'>
                        <div className="min-h-14">
                            <h1 className='font-semibold text-xl line-clamp-2'>Automatic IoT-based Irrigation System</h1>

                        </div>
                        <p className='font-light line-clamp-3'>This automatic irrigation system effectively measures soil moisture and automatically activates the water pump when the moisture level falls below the predefined threshold, ensuring the soil remains well-hydrated, operates independently without the need for additional devices, and utilizes the internet for real-time monitoring and data collection.</p>
                        <Button variant={'primary'} className='cursor-pointer'>
                            <Link href='#' />
                            Read More...
                        </Button>
                    </div>
                </div>
                <div className='bg-white flex flex-col items-center justify-center group'>
                    <div className='relative aspect-video border w-full rounded-xl overflow-hidden'>
                        <Image src='/images/admin.png' alt={'email'} fill className='object-cover h-full w-full group-hover:scale-110 duration-300' />
                    </div>
                    <div className='p-2 space-y-3'>
                        <div className="min-h-14">
                            <h1 className='font-semibold text-xl line-clamp-2'>Website Admin</h1>

                        </div>
                        <p className='font-light line-clamp-3'>Website Admin provides users with access to the admin panel to manage content such as banners and products. This system makes it easy to add, edit, or remove information through a user-friendly and organized interface.</p>
                        <Button variant={'primary'} className='cursor-pointer'>
                            <Link href='#' />
                            Read More...
                        </Button>
                    </div>
                </div>
                <div className='bg-white flex flex-col items-center justify-center group'>
                    <div className='relative aspect-video border w-full rounded-xl overflow-hidden'>
                        <Image src='/images/store.png' alt={'email'} fill className='object-cover h-full w-full group-hover:scale-110 duration-300' />
                    </div>
                    <div className='p-2 space-y-3'>
                        <div className="min-h-14">
                            <h1 className='font-semibold text-xl line-clamp-2'>Website Store</h1>

                        </div>
                        <p className='font-light line-clamp-3'>Website Admin for the e-commerce platform allows easy management of product categories and banners. Admins can effortlessly add, edit, or remove product listings like children&apos;s clothing, toys, and food containers. It offers a clean, user-friendly interface for organizing products under featured categories such as &apos;Baju Anak Korea&quot; (Korean Children&apos;s Clothing). With the admin panel, product prices, images, and descriptions can be easily updated, ensuring smooth operation and a seamless customer experience.</p>
                        <Button variant={'primary'} className='cursor-pointer'>
                            <Link href='#' />
                            Read More...
                        </Button>
                    </div>
                </div>
                <div className='bg-white flex flex-col items-center justify-center group'>
                    <div className='relative aspect-video border w-full rounded-xl overflow-hidden'>
                        <Image src='/images/airdrop.png' alt={'email'} fill className='object-cover h-full w-full group-hover:scale-110 duration-300' />
                    </div>
                    <div className='p-2 space-y-3'>
                        <div className="min-h-14">
                            <h1 className='font-semibold text-xl line-clamp-2'>Website Airdrop</h1>

                        </div>
                        <p className='font-light line-clamp-3'>This platform allows users to access and manage different services, including Browser Cash, Nodepay, Gradient, Blockmesh/Perception, and Kaisar. It is a hub for interacting with various airdrop campaigns and digital tools. Users can navigate through the sections easily and access the links to participate in or manage the campaigns directly. The user interface is designed to be futuristic, with a clean layout and clear access to each feature.</p>
                        <Button variant={'primary'} className='cursor-pointer'>
                            <Link href='#' />
                            Read More...
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
