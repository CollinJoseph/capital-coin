'use client'
import Image from 'next/image'
import Layout from '@/components/layout/layout'
import { CircularProgress } from '@mui/material';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import Avatar from '@mui/material/Avatar';
import { BarChart } from '@mui/x-charts';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DownloadIcon from '@mui/icons-material/Download';
import GamepadIcon from '@mui/icons-material/Gamepad';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import coin from '@/public/coin.png'
import { useEffect, useState } from 'react';
import axios from 'axios';
import useSessionStorage from '@/components/session'

const API_URL = 'https://t8zsjnl5-3001.uks1.devtunnels.ms'; 

export default function Dashboard() {
  var date = new Date();

  const [data, setData] = useState({});
  const [monthly, setMonthly] = useState([[''],['']]);
  const [sessionData, setSessionData] = useSessionStorage('myData');

  useEffect(() => {
    // Define the headers with the authorization token
    const headers = {
      'Authorization': `Bearer ${sessionData}`,
    };

    // Make a GET request to the "/dashboard" route
    axios.get(`${API_URL}/api/dashboard`, { headers })
    .then((response) => {
        setData(response.data);
        console.log()
        setMonthly([response.data.monthly.map(obj=>obj.month),response.data.monthly.map(obj=>obj.amount)])
        setTransactions(response.data.transactions)
    })
        .catch((error) => {
        console.error('Error:', error);
    });
  }, [sessionData]);

  return (
    <Layout>
        <div className='flex justify-between'>
            <div>

            </div>
            <div className='flex flex-row'>
                <div className='flex p-2 items-center'>
                    <Image
                        src={coin}
                        alt="Coin"
                        height={30}
                    />
                    {data.cc}
                </div>
                <div className='flex p-2 items-center'>
                    <Avatar alt="John Cena" src="/static/images/avatar/1.jpg" />
                </div>
            </div>
        </div>
        <div className="px-10">
            <home>
                <div className="flex justify-between">
                    <div className='text-2xl pt-10 pb-2'> Dashboard</div>
                    <div className='text-2xl pt-10 pb-2'>{date.getDate()}/{date.getMonth()}/{date.getFullYear()}</div>
                </div>
                <div className='h-1 bg-[#C0C0C0] w-full mb-10'></div>
                
                <div className="insights flex flex-row gap-x-8">
                    <div className="spent basis-1/4 flex-auto">
                        <CurrencyPoundIcon />
                        <div className="middle">
                            <div className="left">
                                <h3>Expenditures</h3>
                                {/* below here add money spent by pulling from API */}
                                <h1>£{monthly[1][0]}</h1>
                            </div>
                            <div className="progress">
                                <CircularProgress color='secondary' thickness={8} size={50} variant="determinate" value={100-((monthly[1][0]*100)/data.limit)} />
                            </div>
                        </div>
                    </div>
                    {/* -----END OF EXPENDITURES----- */}

                    <div className="limit basis-1/4 flex-auto">
                        <CreditCardIcon />
                        <div className="middle">
                            <div className="left">
                                <h3>Card Limit</h3>
                                {/* below here add credit limit by pulling from API */}
                                <h1>£{data.limit}</h1>
                            </div>
                            <div className="progress">
                                <CircularProgress color='success' thickness={8} size={50} variant="determinate" value={((monthly[1][0]*100)/data.limit)} />
                            </div>
                        </div>
                    </div>
                    {/* -----END OF LIMIT----- */}
                    <div className="score basis-1/4 flex-auto">
                        <CreditScoreIcon />
                        <div className="middle">
                            <div className="left">
                                <h3>Credit Score</h3>
                                {/* below here add credit score by pulling from API */}
                                <h1>{data.cscore}</h1>
                            </div>
                            <div className="progress">
                                {/* below calculate the percentage depending on the credit pulled */}
                                <CircularProgress color='inherit' thickness={8} size={50} variant="determinate" value={(100*data.cscore)/850} />
                            </div>
                        </div>
                    </div>
                    {/* -----END OF SCORE----- */}
                    <div className="level basis-1/4 flex-auto mr-2">
                        <div className="middle">
                            <div className="left">
                                <GamepadIcon />
                                <h3>User Level</h3>
                                {/* below here add User Level by pulling from API */}
                                <h1>{data.level}</h1>
                            </div>
                            <div className="progress">
                                {/* below calculate the percentage depending on the credit pulled */}
                                <CircularProgress thickness={8} size={50} variant="determinate" value={(data.level/5)*100} />
                            </div>
                        </div>
                    </div>
                    {/* -----END OF LEVEL----- */}
                </div>
                <div className="flex">
                    <div className="history flex-3/4 flex-auto">
                        <EqualizerIcon />
                        <h2>Monthly Expenditure</h2>
                        <div>
                            <BarChart xAxis={[
                                {
                                    id: 'months',
                                    data: monthly[0],
                                    scaleType: 'band',
                                },
                            ]}
                            series={[
                                {
                                data: monthly[1],
                                },
                            ]}
                            height={300}
                            />
                        </div>
                    </div>
                    <div className='notifications flex-1/4 flex-auto'>
                        <NotificationsIcon />
                        <h2>Notifications</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Notifications</th>
                                    <th>View</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>27/10/23</td>
                                    <td>Statement Ready</td>
                                    <td><button><DownloadIcon /></button></td>
                                </tr>
                                {/* <tr>
                                    <td>27/09/23</td>
                                    <td>Statement Ready</td>
                                    <td><button><DownloadIcon /></button></td>
                                </tr>
                                <tr>
                                    <td>27/06/23</td>
                                    <td>Achievement Completed</td>
                                    <td><button><EmojiEventsIcon /></button></td>
                                </tr>
                                <tr>
                                    <td>27/08/23</td>
                                    <td>Statement Ready</td>
                                    <td><button><DownloadIcon /></button></td>
                                </tr>
                                <tr>
                                    <td>27/07/23</td>
                                    <td>Statement Ready</td>
                                    <td><button><DownloadIcon /></button></td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </home>
        </div>
    </Layout>
  )
}
