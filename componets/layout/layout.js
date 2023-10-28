'use client'

import Navbar from './navbar/navbar'
import styles from './styles.module.css'

export default function Layout({ children }) {
  return (
    <div className='h-screen flex flex-row gap'>
        <div className={styles.sidebar}>
          <Navbar/>
        </div>
        <div className='flex-auto w-full'>{children}</div>
    </div>

    // <div className='flex flex-row h-screen'>
    //   <div className='basis-40 w-min-[120px]'>
    //     
    //   </div>
    //   <main className='flex-auto w-full'>{children}</main>
    //   {/* <Footer /> */}
    // </div>
  )
}