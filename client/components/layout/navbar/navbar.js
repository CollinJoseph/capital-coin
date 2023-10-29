import ProgressBar from "./progressbar"
import Image from "next/image"
import DashboardIcon from '@mui/icons-material/Dashboard';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { matchesPathname } from "@/components/url";

// Navbar component
export default function Navbar({ children }) {
  
// Retrieve the current page's pathname using a custom hook
  const pathname = usePathname();

  return (
    <div className="w-full py-8 px-2">
      <div className="flex justify-center ">
        <Image
            src="/capital-coin.png"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
      </div>
      <div className="flex justify-center ">
        <div className="flex flex-col justify-center gap-y-2">
          <div className={
              pathname === '/dashboard' ?
              "before:content-[''] before:h-full before:w-1 before:-left-1 before:block before:absolute before:bg-sky-400 h-10 flex items-center px-8 bg-sky-100 relative" :
              "hover:before:content-[''] hover:before:h-full hover:before:w-1 hover:before:-left-1 hover:before:block hover:before:absolute hover:before:bg-sky-400 h-10 flex items-center px-8 hover:bg-sky-100 relative"
            }>
            <DashboardIcon/>
            <Link className="px-1" href="/dashboard">Dashboard</Link>
          </div>
          <div className={
              pathname === '/transcation' ?
              "before:content-[''] before:h-full before:w-1 before:-left-1 before:block before:absolute before:bg-sky-400 h-10 flex items-center px-8 bg-sky-100 relative" :
              "hover:before:content-[''] hover:before:h-full hover:before:w-1 hover:before:-left-1 hover:before:block hover:before:absolute hover:before:bg-sky-400 h-10 flex items-center px-8 hover:bg-sky-100 relative"
            }>
            <CurrencyExchangeIcon/>
            <Link className="px-1" href="/transcation">Transactions</Link>
          </div>
          <div
            className={
              pathname === '/achievements' ?
              "before:content-[''] before:h-full before:w-1 before:-left-1 before:block before:absolute before:bg-sky-400 h-10 flex items-center px-8 bg-sky-100 relative" :
              "hover:before:content-[''] hover:before:h-full hover:before:w-1 hover:before:-left-1 hover:before:block hover:before:absolute hover:before:bg-sky-400 h-10 flex items-center px-8 hover:bg-sky-100 relative"
            }
          >
            <EmojiEventsIcon/>
            <Link className="px-1" href="/achievements">Achievements</Link>
          </div>
          <div
            className={
              pathname === '/rewards' ?
              "before:content-[''] before:h-full before:w-1 before:-left-1 before:block before:absolute before:bg-sky-400 h-10 flex items-center px-8 bg-sky-100 relative" :
              "hover:before:content-[''] hover:before:h-full hover:before:w-1 hover:before:-left-1 hover:before:block hover:before:absolute hover:before:bg-sky-400 h-10 flex items-center px-8 hover:bg-sky-100 relative"
            }
          >
            <ShoppingCartIcon/>
            <Link className="px-1" href="/rewards">Rewards</Link>
          </div>
        </div>
      </div>
    </div>
  )
}