import { cascadia } from "@/utils/cascadia"
import { MapPin,Mail,Phone } from "lucide-react"
import Link from "next/link"
const Footer = () => {
  return (
    <div className=" absolute backdrop-blur-sm bg-neutral-500/5 p-3 rounded-md bottom-2 lg:bottom-4 xl:bottom-10 max-w-[400px] text-neutral-100 left-5 flex flex-col justify-center items-start gap-y-3">
    <p className={`${cascadia.className} text-2xl `}>Where can you find us?</p>
    <div className="flex gap-2 justify-center items-center text-xs">
    <MapPin height={30} width={30} className="text-neutral-100" />
    <p>Block 5, FL-4, Rashid Minhas Rd, Gulshan-e-Iqbal, Karachi, 75300</p>
    </div>

    <div className="flex gap-2 justify-center items-center text-xs">
    <Mail height={20} width={20} className="text-neutral-100" />

    <p>info@scriptersltd.com</p>
    </div>

    <div className="flex gap-2 justify-center items-center text-xs">
    <Phone height={20} width={20} className="text-neutral-100 " />

    <p>(021)-34800896</p>


</div>
    <p>Read our policy <Link href={"/policy"} className="underline">here</Link></p>
  </div>
  )
}

export default Footer