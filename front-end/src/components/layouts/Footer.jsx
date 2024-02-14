import Link from 'next/link'
import Image from 'next/image';

export default function Footer() {
    return (
      <footer className='flex justify-between py-4 px-12 text-2xl bg-stone-200 border-black border-b-1'>
      <div className='text-lg'>
        <Image height={35} width={68} src='/img/logo.png' />
      </div>
      <div className='content-between text-lg'>
        <ul className='flex mb-[1rem]'>
          <li className='mr-6 '>
            <Link href="/about_us">About us</Link>
          </li>
          <li className='mr-6 '>
            <Link href="/download_apps">Download apps</Link>
          </li>
          <li className='mr-6 '>
            <Link href="/careers">Careers</Link>
          </li>
          <li className=''>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className='flex justify-end'>© 2024 by Yurii Shushanskyi.</div>
      </div>
    </footer>
    );
  }
  