'use client'
import Image from 'next/image';
import Layout from '@/componets/layout/layout';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import dynamic from 'next/dynamic';
import CustomizedTables from '@/componets/transaction/CustomizedTables';

export default function Transaction() {
  const transactions = [
    { name: "Playstation 6", amount: "- $189.36" },
    // Add other transactions as required
  ];

  return (
    <Layout>
      <div className="account-details">
       
      </div>
      <div className="transactions">
        <input type="text" id="search-bar" placeholder="Search"/>
        <div className="transaction-filters">
          <button data-filter="all" className="active">All</button>
          <button data-filter="expenses">Expenses</button>
          <button data-filter="income">Income</button>
        </div>
      </div>
      <div className="spending-overview">
       
      </div>

      {/* Integrated CustomizedTables Component */}
      <CustomizedTables transactions={transactions} />
    </Layout>
  );
}
