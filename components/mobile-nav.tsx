
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "./ui/button"
import { useEffect, useState } from "react"

export function MobileNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()
    const pageName = pathname.split('/')[1]

    function onOpenChange(e: boolean) {
        setIsMenuOpen(e)
    }

    useEffect(() => {
        setIsMenuOpen(false)
    }, [pathname])

    return (
        <Sheet open={isMenuOpen} onOpenChange={onOpenChange}>
            <SheetTrigger asChild>
                <Button className="md:hidden" size={'icon'} variant="outline">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-y-5 px-6">
                    <Link className={cn(pageName === '' && 'text-[#A53DFF]')} href='/'>Home</Link>
                    <Link className={cn(pageName === 'about' && 'text-[#A53DFF]')} href='/about'>About</Link>
                    <Link className={cn(pageName === 'skill' && 'text-[#A53DFF]')} href='/skill'>Skill</Link>
                    <Link className={cn(pageName === 'experience' && 'text-[#A53DFF]')} href='/experience'>Experience</Link>
                    <Link className={cn(pageName === 'portfolio' && 'text-[#A53DFF]')} href='/portfolio'>Portfolio</Link>
                </div>
                <SheetFooter>
                    <Button asChild variant={'primary'}>
                        <Link target="_blank" rel="noopener noreferrer" href='/file/cv.pdf'>Download CV</Link>
                    </Button>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
