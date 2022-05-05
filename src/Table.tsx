import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography:{
    fontFamily:["Syne", "sans-serif"].join(','),
  },
});

function createData(name:string, calories:any) {
  return { name, calories };
}

const rows = [
  createData('CMID', 159),
  createData('Supply', 237),
  createData('Remaining', 262),
  createData('Public Mint Price', 305),
  createData('Whitelisted', 'False'),
  createData('WEN', 305),
];

export default function BasicTable(externalrows:any) {
  const r = externalrows;
  return (
    <ThemeProvider theme={darkTheme}>
      <div style={{width:"40%",margin:"auto",marginTop:"5%"}}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 550 }} size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left"><b>Candy Features</b></TableCell>
            <TableCell align="right"> <b>Candy Values</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {r.externalrows.map((row:any) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{(row.calories!=undefined)? row.calories : "undefined"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </ThemeProvider>
  );
}
