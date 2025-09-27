'use client'

import Link from 'next/link'
import { Button } from './ui/button'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { MobileNav } from './mobile-nav'

export default function NavBar() {

    const pathname = usePathname()
    const pageName = pathname.split('/')[1]

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className='sticky top-0 bg-white z-30'>
            <div className='flex justify-between items-center max-w-6xl mx-auto px-2 h-[70px] '>
                <div className='flex items-center gap-0.5 logo-text'>
                    <div className='bg-[#A53DFF] h-10 w-10 text-xl text-white rounded-full flex justify-center items-center cursor-grab'>
                        R
                    </div>
                    <div className="text-lg">
                        icho Armando
                    </div>
                </div>
                <MobileNav />
                <div className={`hidden md:flex md:items-center gap-x-7`}>
                    <Link className={cn(pageName === '' && 'text-[#A53DFF]')} href='/'>Home</Link>
                    <Link className={cn(pageName === 'about' && 'text-[#A53DFF]')} href='/about'>About</Link>
                    <Link className={cn(pageName === 'skill' && 'text-[#A53DFF]')} href='/skill'>Skill</Link>
                    <Link className={cn(pageName === 'experience' && 'text-[#A53DFF]')} href='/experience'>Experience</Link>
                    <Link className={cn(pageName === 'portfolio' && 'text-[#A53DFF]')} href='/portfolio'>Portfolio</Link>
                    <Button asChild variant={'primary'}>
                        <Link target="_blank" rel="noopener noreferrer" href='/file/cv.pdf'>Download CV</Link>
                    </Button>
                </div>
            </div>
        </nav>
    )
}
