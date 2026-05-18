'use client'
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
const Navbar = ()=>{
  const [open, setOpen] =useState(false)
  return (<nav className="flex bg-pink-200 h-16 text-[1.5rem] justify-between m-0 border-0">
    {/*mobile menu bars*/}
  <div onClick={()=>setOpen(true)} className=" px-4 py-5 md:hidden">
    <div className="h-[2px] w-7 bg-black"></div>
    <div className="h-[2px] w-7 bg-black mt-1"></div>
    <div className="h-[2px] w-7 bg-black mt-1"></div>
  </div>
  <div className={`md:hidden fixed rounded top-0 h-96 w-48 mt-16 bg-black round:md text-white transition-transform duration-400 ${open ? "translate-x-0"
  :"-translate-x-full"}`}>

    {/*close-slide button*/}
<button onClick={()=>setOpen(false)} className="w-41 flex mt-2 justify-end">close</button>
  
   {/*mobile menu list*/}
<ul className="flex flex-col justify-center items-center mt-8">
  <li className="animation"><Link href={"/hpme"} className="text-[2rem] hover:underline">Men</Link></li>
   <li className="animation"><Link href={"/hpme"} className="text-[2rem] hover:underline">Women</Link></li>
    <li className="animation"><Link href={"/hpme"} className="text-[2rem] hover:underline">Child</Link></li>
     <li className="animation"><Link href={"/hpme"} className="text-[2rem] hover:underline">Toy</Link></li>
      <li className="animation"><Link href={"/hpme"} className="text-[2rem] hover:underline">Other</Link></li>
</ul>
  </div>

{/*Desktop menu */}
{/*left side */}
{/*logo company */}
 <div className="flex justify-center items-center px-4 pt-2 logoAnimation">
  Sale BD
  </div>

 {/*middle side */}
  <ul className="hidden md:flex text-[1.5rem] items-center gap-8">
<li><Link href={"#"} className=" hover:underline hover:opacity-56">Men</Link></li>
<li><Link href={"#"} className=" hover:underline hover:opacity-56">Women</Link></li>
<li><Link href={"#"} className=" hover:underline hover:opacity-56">Child</Link></li>
<li><Link href={"#"} className=" hover:underline hover:opacity-56">Other</Link></li>
  </ul>

    {/*Right swction */}
  <section className="flex items-center gap-8 mr-8">
    <div>
      <Image src={'/images/icons/notification.png'} alt="cart" width={20} height={20} />
    </div>
     <div>
      <Image src={'/images/icons/cart_2.png'} alt="cart" width={20} height={20} />
     </div>
      <div>
        <Image src={'/images/avatars/azim.jpg'} alt="cart" width={20} height={20} className="rounded-full" />
      </div>
  </section>
  </nav>)
}
export default Navbar