'use client'
import Layout from '@/components/layout/layout';
import dayjs from 'dayjs';
import CustomizedTables from '@/components/transaction/CustomizedTables';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import axios from 'axios';
import useSessionStorage from '@/components/session'
// Defining a custom theme for the table container
const theme = createTheme({
  components: {
    // Name of the component
    MuiTableContainer: {
      styleOverrides: {
        root: {
          borderRadius : "40px 40px 0 0",
          boxShadow: "none",
          border: "0"
        }
      }
    }
  },
});

const API_URL = 'http://localhost:3001'; 
// Transaction component definition
export default function Transaction() {
  
// State hook for managing the selected date value
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [sessionData, setSessionData] = useSessionStorage('myData');

  function isEmpty(str) {
    return (!str || str.length === 0 );
  }

  useEffect(() => {
      // Define the headers with the authorization token
      const headers = {
        'Authorization': `Bearer ${sessionData}`,
      };
  
      // Make a GET request to the "/dashboard" route
      axios.get(`${API_URL}/api/dashboard`, { headers })
      .then((response) => {
          setTransactions(response.data.transactions)
          console.log(response.data.transactions)
      })
          .catch((error) => {
          console.error('Error:', error);
      });
    }, [sessionData]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <Layout>
          {/* Integrated CustomizedTables Component */}
          <div className='pr-10 '>
            <div className='text-2xl pt-10 pb-2'> Transaction History</div>
            <div className='h-1 bg-[#C0C0C0] w-full'></div>
            <div className='flex flex-start gap-2 py-4 pt-10'>
              <DatePicker
                label="Start Date"
                value={value}
                onChange={(newValue) => setValue(newValue)}
              />
              <DatePicker
                label="End Date"
                value={value}
                onChange={(newValue) => setValue(newValue)}
              />
              <TextField id="outlined-basic" label="Search" variant="outlined" 
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
              />
            </div>
            <div className='rounded-t-3xl border-2 border-[#C0C0C0] h-screen border-b-0'>
              <CustomizedTables transactions={transactions.filter(trans=>(isEmpty(search) || trans.desp.search(search)))}/>
            </div>
          </div>
        </Layout>
      </ThemeProvider>
    </LocalizationProvider>
  );
}
