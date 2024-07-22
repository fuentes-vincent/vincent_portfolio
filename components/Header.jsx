import Link from "next/link"
import { Button } from "./ui/button"

// components 
import Nav from "./Nav"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
            {/*put here the logo*/}
            <Link href="/">
                <h1 className="text-4xl font-semibold">
                    Vincent <span className="text-accent">.F</span>
                </h1> 
            </Link>

            {/*put here the desktop navigation items and hire button*/}
            <div className="hidden xl:flex items-center gap-8">
                <Nav />
                <Link href="/contact">
                <Button>Hire me</Button>
                </Link>
            </div>

            <div className="xl:hidden">
                <MobileNav />
            </div>
            
        </div>
    </header>
  )
}

export default Header