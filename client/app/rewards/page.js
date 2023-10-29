'use client'
import Image from 'next/image'
import Layout from '@/components/layout/layout'
import { CircularProgress } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RedeemIcon from '@mui/icons-material/Redeem';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LinearProgress from '@mui/material/LinearProgress';
import LockIcon from '@mui/icons-material/Lock';
import coin from '@/public/coin.png'

export default function Achievements() {
    
    return (
        <Layout>
            <div className="px-10">
                <div className='creditLevels'>
                    <div className='text-2xl pt-10 pb-2'> Rewards</div>
                    <div className='h-1 bg-[#C0C0C0] w-full mb-10'></div>
                    <div className="insights flex flex-row gap-x-8">
                        <div className="obj1 basis-1/4 flex-auto">
                            <AddShoppingCartIcon/>
                            <div className="middle">
                                <div className="left">
                                    <h3>£10 Voucher</h3>
                                    <h1>Coins Needed: 10,000</h1>
                                </div>
                                <div className="progress">
                                    <RedeemIcon />
                                    {/* <LockIcon /> */}
                                </div>
                            </div>
                        </div>
                        {/* -----END OF BRONZE----- */}
  
                        <div className="obj2 basis-1/4 flex-auto">
                            <AddShoppingCartIcon/>
                            <div className="middle">
                                <div className="left">
                                    <h3>£5 Voucher</h3>
                                    {/* below here add credit limit by pulling from API */}
                                    <h1>Coins Needed: 5,000</h1>
                                </div>
                                <div className="progress">
                                    {/* <CircularProgress color='success' thickness={8} size={50} variant="determinate" value={0} /> */}
                                    <RedeemIcon />
                                </div>
                            </div>
                        </div>
                        {/* -----END OF SILVER----- */}
    
                        <div className="obj3 basis-1/4 flex-auto">
                            <AddShoppingCartIcon/>
                            <div className="middle">
                                <div className="left">
                                    <h3>Mystery Gift</h3>
                                    {/* below here add credit score by pulling from API */}
                                    <h1>Coins Needed: 20,000</h1>
                                </div>
                                <div className="progress">
                                    {/* below calculate the percentage depending on the credit pulled */}
                                    {/* <CircularProgress color='inherit' thickness={8} size={50} variant="determinate" value={(100*480)/850} /> */}
                                    <RedeemIcon />
                                </div>
                            </div>
                        </div>
                        {/* -----END OF GOLD----- */}
                    </div>
                </div>
            </div>
        </Layout>
    )
}
  