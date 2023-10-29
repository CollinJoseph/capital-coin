'use client'
import Image from 'next/image'
import Layout from '@/components/layout/layout'
import { CircularProgress } from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LinearProgress from '@mui/material/LinearProgress';
import LockIcon from '@mui/icons-material/Lock';
import coin from '@/public/coin.png'


export default function Achievements() {
    
  return (
    <Layout>
        <div className="px-10">
            <div className='creditLevels'>
                <div className='text-2xl pt-10 pb-2'> Achievements</div>
                <LinearProgress variant="determinate" value={36} />
                <div className="insights flex flex-row gap-x-8">
                    <div className="obj1 basis-1/4 flex-auto">
                        <WorkspacePremiumIcon sx={{color: '#CD7F32'}} />
                        <div className="middle">
                            <div className="left">
                                <h3>Bronze</h3>
                                {/* <h1>Entry Requirements: 350</h1> */}
                            </div>
                            <div className="progress">
                                <CircularProgress color='secondary' thickness={8} size={50} variant="determinate" value={36} />
                                {/* <LockIcon /> */}
                            </div>
                        </div>
                    </div>
                    {/* -----END OF BRONZE----- */}

                    <div className="obj2 basis-1/4 flex-auto">
                        <WorkspacePremiumIcon sx={{color: '#C0C0C0'}} />
                        <div className="middle">
                            <div className="left">
                                <h3>Silver</h3>
                                {/* below here add credit limit by pulling from API */}
                                <h1>Entry Requirements: 450</h1>
                            </div>
                            <div className="progress">
                                {/* <CircularProgress color='success' thickness={8} size={50} variant="determinate" value={0} /> */}
                                <LockIcon />
                            </div>
                        </div>
                    </div>
                    {/* -----END OF SILVER----- */}

                    <div className="obj3 basis-1/4 flex-auto">
                        <WorkspacePremiumIcon sx={{color: '#FFD700'}} />
                        <div className="middle">
                            <div className="left">
                                <h3>Gold</h3>
                                {/* below here add credit score by pulling from API */}
                                <h1>Entry Requirements: 550</h1>
                            </div>
                            <div className="progress">
                                {/* below calculate the percentage depending on the credit pulled */}
                                {/* <CircularProgress color='inherit' thickness={8} size={50} variant="determinate" value={(100*480)/850} /> */}
                                <LockIcon />
                            </div>
                        </div>
                    </div>
                    {/* -----END OF GOLD----- */}

                    <div className="obj4 basis-1/4 flex-auto">
                        <WorkspacePremiumIcon sx={{color: '#e5e4e2'}} />
                        <div className="middle">
                            <div className="left">
                                <h3>Platinum</h3>
                                {/* below here add User Level by pulling from API */}
                                <h1>Entry Requirements: 650</h1>
                            </div>
                            <div className="progress">
                                {/* below calculate the percentage depending on the credit pulled */}
                                {/* <CircularProgress thickness={8} size={50} variant="determinate" value={0} /> */}
                                <LockIcon />
                            </div>
                        </div>
                    </div>
                    {/* -----END OF PLATINUM----- */}

                    <div className="obj4 basis-1/4 flex-auto">
                        <WorkspacePremiumIcon sx={{color: '#b9f2ff'}} />
                        <div className="middle">
                            <div className="left">
                                <h3>Diamond</h3>
                                {/* below here add User Level by pulling from API */}
                                <h1>Entry Requirements: 750</h1>
                            </div>
                            <div className="progress">
                                {/* below calculate the percentage depending on the credit pulled */}
                                {/* <CircularProgress thickness={8} size={50} variant="determinate" value={0} /> */}
                                <LockIcon />
                            </div>
                        </div>
                    </div>
                    {/* -----END OF DIAMOND----- */}
                </div>
            </div>

            <div className="creditLevels flex flex-auto">
                <div className="objectives flex-1/3">
                    <EmojiEventsIcon />
                    <h2>Bronze Objectives</h2>
                        <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Objectives</th>
                                    <th>Progress</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Make 5 Transactions in a Month</td>
                                    <td>2/5</td>
                                </tr>
                                <tr>
                                    <td>Use Card at 3 different merchants in a Month</td>
                                    <td>1/3</td>
                                </tr>
                                <tr>
                                    <td>Use Card for 3 purchases related to Sustainable Products or Services</td>
                                    <td>1/3</td>
                                </tr>
                                <tr>
                                    <td>Refer a Friend</td>
                                    <td>0/1</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                </div>
                <div className="objectives flex-1/3">
                    <LockIcon />
                    <h2>Silver Objectives</h2>
                        <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Objective</th>
                                    <th>Progress</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Make 10 Transactions in a Month</td>
                                    <td>0/10</td>
                                </tr>
                                <tr>
                                    <td>Use Card at 6 different merchants in a Month</td>
                                    <td>0/6</td>
                                </tr>
                                <tr>
                                    <td>Use Card for 6 purchases related to Sustainable Products or Services</td>
                                    <td>0/6</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                </div>
                <div className="objectives flex-1/3">
                    <LockIcon />
                    <h2>Gold Objectives</h2>
                        <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Objective</th>
                                    <th>Progress</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Make 20 Transactions in a Month</td>
                                    <td>0/20</td>
                                </tr>
                                <tr>
                                    <td>Use Card at 12 different merchants in a Month</td>
                                    <td>0/12</td>
                                </tr>
                                <tr>
                                    <td>Use Card for 12 purchases related to Sustainable Products or Services</td>
                                    <td>0/12</td>
                                </tr>
                                <tr>
                                    <td>Spend £500 or more and pay it off within a cycle</td>
                                    <td>0/1</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                </div>
                <div className="objectives flex-1/3">
                    <LockIcon />
                    <h2>Platinum Objectives</h2>
                        <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Objective</th>
                                    <th>Progress</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Make 40 Transactions in a Year</td>
                                    <td>0/40</td>
                                </tr>
                                <tr>
                                    <td>Use Card in a Foreign Country</td>
                                    <td>0/1</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                </div>
                <div className="objectives flex-1/3">
                    <LockIcon />
                    <h2>Diamond Objectives</h2>
                        <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Objective</th>
                                    <th>Progress</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Make 80 Transactions in a Year</td>
                                    <td>0/80</td>
                                </tr>
                                <tr>
                                    <td>Make a Purchase of £8,000</td>
                                    <td>0/1</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}