import Image from 'next/image'
import Layout from '@/componets/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Dashboard() {
  return (
    <Layout>
        <div className='insights'>
            <div className='mspent'>
                <FontAwesomeIcon icon="fa-solid fa-sterling-sign" />
                <div className='middle'>
                    <div className='left'>
                        <h3>Total Expenditure</h3>
                        <h1>£500</h1>
                        {/* add total amount borrowed between the h1 */}
                        <div className='progress'>
                            <svg>
                                <circle cx={'38'} cy={'38'} r={'36'}></circle>
                            </svg>
                            <div className='number'>
                                <p>50%</p>
                                {/* within p add some coding to calculate the percentage of credit limit used (example if limit is 100 and the total spent is 50 the percentage would be 50%) */}
                            </div>
                        </div>
                    </div>
                </div>
                <small className='text-muted'>Last 24 hours</small>
            </div>
            {/* END OF MONEY SPENT */}

            <div className='climit'>
                <FontAwesomeIcon icon="fa-solid fa-sterling-sign" />
                <div className='middle'>
                    <div className='left'>
                        <h3>Card Limit</h3>
                        <h1>£2,000</h1>
                        {/* add total amount borrowed between the h1 */}
                        <div className='progress'>
                            <svg>
                                <circle cx={'38'} cy={'38'} r={'36'}></circle>
                            </svg>
                            <div className='number'>
                                <p>50%</p>
                                {/* within p add some coding to calculate the percentage of credit limit used (example if limit is 100 and the total spent is 50 the percentage would be 50%) */}
                            </div>
                        </div>
                    </div>
                </div>
                <small className='text-muted'>Last 24 hours</small>
            </div>
            {/* END OF CREDIT LIMIT */}

            <div className='cscore'>
                <FontAwesomeIcon icon="fa-solid fa-star" />
                <div className='middle'>
                    <div className='left'>
                        <h3>Credit Score</h3>
                        <h1>580</h1>
                        {/* add credit score between the h1 */}
                        <div className='progress'>
                            <svg>
                                <circle cx={'38'} cy={'38'} r={'36'}></circle>
                            </svg>
                            <div className='number'>
                                <p>47%</p>
                                {/* calculate how good the score is in percentage */}
                            </div>
                        </div>
                    </div>
                </div>
                <small className='text-muted'>Last 24 hours</small>
            </div>
            {/* END OF CREDIT SCORE */}
        </div>
    </Layout>
  )
}
