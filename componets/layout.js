import Navbar from './navbar'
 
export default function Layout({ children }) {
  return (
    <div className='flex flex-row h-screen'>
      <Navbar />
      <main className='flex-auto w-full'>{children}</main>
      {/* <Footer /> */}
    </div>
  )
}