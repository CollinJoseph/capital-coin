import Image from 'next/image'
import Layout from '@/componets/layout/layout'
import { CircularProgress } from '@mui/material'
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';

export default function Dashboard() {
  var date = new Date();
  return (
    <Layout>
        {/* <FontAwesomeIcon icon={faCreditCard} /> */}
        <home>
            <h1>Dashboard</h1>
            <div>{date.getDate()}/{date.getMonth()}/{date.getFullYear()}</div>
            <div className="insights">
                <div className="spent">
                    <CurrencyPoundIcon />
                    <div className="middle">
                        <div className="left">
                            <h3>Expenditures</h3>
                            {/* below here add money spent by pulling from API */}
                            <h1>£500</h1>
                        </div>
                        <div className="progress">
                            <CircularProgress color='secondary' thickness={8} size={50} variant="determinate" value={50} />
                        </div>
                    </div>
                </div>
                {/* -----END OF EXPENDITURES----- */}

                <div className="limit">
                    <div className="middle">
                        <div className="left">
                            <h3>Card Limit</h3>
                            {/* below here add credit limit by pulling from API */}
                            <h1>£1000</h1>
                        </div>
                        <div className="progress">
                            <CircularProgress color='success' thickness={8} size={50} variant="determinate" value={50} />
                        </div>
                    </div>
                </div>
                {/* -----END OF LIMIT----- */}

                <div className="score">
                    <div className="middle">
                        <div className="left">
                            <h3>Credit Score</h3>
                            {/* below here add credit score by pulling from API */}
                            <h1>480</h1>
                        </div>
                        <div className="progress">
                            {/* below calculate the percentage depending on the credit pulled */}
                            <CircularProgress color='inherit' thickness={8} size={50} variant="determinate" value={(100*480)/850} />
                        </div>
                    </div>
                </div>
                {/* -----END OF SCORE----- */}
            </div>
        </home>
    </Layout>
  )
}
