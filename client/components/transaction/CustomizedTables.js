// Importing necessary components from Material-UI
import { TableContainer, Paper, TableHead, TableRow, Table, TableCell, TableBody } from "@mui/material";
// Importing styled utility from Material-UI styles
import styled from '@mui/material/styles';

// Function to create a data structure for a single transaction
function createData(
  transactionDate,
  description,
  withdrawl,
  deposit,
  
) {
  return { transactionDate, description, withdrawl, deposit  };
}

// Sample data for the transactions. Each transaction is represented as an object.
const rows = [
  createData('27/10/23', 'OnlyFans', 500, 0, 2210),
  createData('27/10/23','Uber Eats', 50, 0, 2710),
  createData('27/10/23','Netflix', 10, 0, 2760),
  createData('25/10/23','Amazon', 25, 0, 2770),
  createData('23/10/23','Tesco', 30, 0, 2795),
  createData('21/10/23','Twitch', 10, 0, 2825),
  createData('20/10/23','Disney Plus', 79.90, 0, 2835),
  createData('19/10/23','PayPal', 0, 100, 2914.9),
  createData('14/10/23','PayPal', 10, 0, 2814.9),
  createData('13/10/23','PayPal', 50, 0, 2854.9),
  createData('12/10/23','PayPal', 100, 0, 2954.9),
  createData('05/10/23','PayPal', 20, 0, 2974.9),
];

// Main component that renders the transaction table
export default function BasicTable({transactions}) {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Transaction Date</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Withdrawl&nbsp;</TableCell>
              <TableCell align="right">Deposit&nbsp;</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((row) => (
              <TableRow
                key={row.desp}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.date}
                </TableCell>
                <TableCell align="right">{row.desp}</TableCell>
                <TableCell align="right">{(row.amt > 0 ? row.amt : 0)}</TableCell>
                <TableCell align="right">{(row.amt < 0 ? row.amt*-1 : 0)}</TableCell>
                
      
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}