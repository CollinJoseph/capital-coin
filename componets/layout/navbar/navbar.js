import ProgressBar from "./progressbar"
import Image from "next/image"

export default function Navbar({ children }) {
  return (
    <div>
      <div className="text-center ml-auto mr-auto">
        <Image
            src="/capital-coin.png"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
      </div>
      <div></div>
      <div></div>
    </div>
  )
}