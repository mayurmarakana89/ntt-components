import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles({
  table: {
    minWidth: 650,

    '& th': {
        fontWeight: 'bold',
        color: '#999'
    }
  }
});

function createData(name, status, type, date, time) {
  return { name, status, type, date, time };
}

const rows = [
  createData('name here', 'Yes', '-', '01-02-2020', '11:11:40'),
  createData('name here', 'Yes', '-', '01-02-2020', '11:31:44'),
  createData('name here', 'Yes', '-', '30-03-2020', '23:11:40'),
  createData('name here', 'Yes', '-', '30-03-2020', '22:04:12'),
  createData('name here', 'Yes', '-', '30-03-2020', '11:13:24'),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Credential Approval</TableCell>
            <TableCell>Credential Type</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell align={"right"}>
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
