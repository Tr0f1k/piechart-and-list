/*import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import axios from "axios";
import paginationFactory from "react-bootstrap-table2-paginator";

const DataGrid = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/data")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  const columns = [
    {
      dataField: "transaction_id",
      text: "ID",
      sort: true,
    },
    {
      dataField: "date",
      text: "Date",
      sort: true,
    },
    {
      dataField: "debit_amount",
      text: "Debit Amount",
      sort: true,
    },
    {
        dataField: "credit_amount",
        text: "Credit Amount",
        sort: true,
    },
    {
        dataField: "sender",
        text: "Sender",
        sort: true,
    },
    {
        dataField: "reciever",
        text: "Reciever",
        sort: true,
    },
    {
        dataField: "transaction_category",
        text: "Transaction Category",
        sort: true,
    }
  ];

  return (
    <div dir="rtl">
    <BootstrapTable
      keyField="id"
      data={data}
      columns={columns}
      pagination={paginationFactory()}
    />
    </div>
  );
};*/

/*import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import { stableSort, getSorting } from './helpers';
import { TableContainer } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const formatDate = date => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });
  };

export default function DataGrid() {
  const classes = useStyles();
  const [data, setData] = React.useState([]);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("");

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:4000/api/data');
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="sortable table">
      <TableHead>
        <TableRow>
          <TableCell
          onClick={event => handleRequestSort(event, 'transaction_id')}
          sortDirection={orderBy === 'transaction_id' ? order : false}>Transaction ID</TableCell>
          <TableCell>Date</TableCell>
          <TableCell>Debit Amount</TableCell>
          <TableCell>Credit Amount</TableCell>
          <TableCell>Sender</TableCell>
          <TableCell>Reciever</TableCell>
          <TableCell>Category</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(row => (
          <TableRow key={row.id}>
            <TableCell>{row.transaction_id}</TableCell>
            <TableCell>{formatDate(row.date)}</TableCell>
            <TableCell>{row.debit_amount}</TableCell>
            <TableCell>{row.credit_amount}</TableCell>
            <TableCell>{row.sender}</TableCell>
            <TableCell>{row.reciever}</TableCell>
            <TableCell>{row.transaction_category}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </TableContainer>
  );
};*/

import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import { stableSort, getSorting } from './helpers';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function DataGrid() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [data, setData] = React.useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);
  const [rows, setRows] = React.useState(0);
  const myRef = useRef(null);


  React.useEffect(() => {
    fetch('http://localhost:4000/api/data')
      .then(res => res.json())
      .then(res => {
        setData(res);
        setRows(res.length);
      });
  }, []);
  

  const formatDate = date => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
  };

  return (
    <div ref={myRef}>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
            sortDirection={orderBy === 'transaction_id' ? order : false}
            ><TableSortLabel
            active={orderBy === 'transaction_id'}
            direction={order}
            onClick={event => handleRequestSort(event, 'transaction_id')}
          >
            ID
          </TableSortLabel>
          </TableCell>
            <TableCell
              sortDirection={orderBy === 'date' ? order : false}
            >
              <TableSortLabel
                active={orderBy === 'date'}
                direction={order}
                onClick={event => handleRequestSort(event, 'date')}
              >
                Date
              </TableSortLabel>
            </TableCell>
            <TableCell
              sortDirection={orderBy === 'debit_amount' ? order : false}
            >
              <TableSortLabel
                active={orderBy === 'debit_amount'}
                direction={order}
                onClick={event => handleRequestSort(event, 'debit_amount')}
              >
                Debit Amount
              </TableSortLabel>
            </TableCell>
            <TableCell
              sortDirection={orderBy === 'credit_amount' ? order : false}
            >
              <TableSortLabel
                active={orderBy === 'credit_amount'}
                direction={order}
                onClick={event => handleRequestSort(event, 'credit_amount')}
              >
                Credit Amount
              </TableSortLabel>
            </TableCell>
            <TableCell
              sortDirection={orderBy === 'sender' ? order : false}
            >
              <TableSortLabel
                active={orderBy === 'sender'}
                direction={order}
                onClick={event => handleRequestSort(event, 'sender')}
              >
                Sender
              </TableSortLabel>
            </TableCell>
            <TableCell
              sortDirection={orderBy === 'reciever' ? order : false}
            >
              <TableSortLabel
                active={orderBy === 'reciever'}
                direction={order}
                onClick={event => handleRequestSort(event, 'reciever')}
              >
                Reciever
              </TableSortLabel>
            </TableCell>
            <TableCell
              sortDirection={orderBy === 'transaction_category' ? order : false}
            >
              <TableSortLabel
                active={orderBy === 'transaction_category'}
                direction={order}
                onClick={event => handleRequestSort(event, 'transaction_category')}
              >
                Transaction Category
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stableSort(data, getSorting(order, orderBy))
            .map(row => (
              <TableRow key={row.transaction_id}>
                <TableCell component="th" scope="row">
                  {row.transaction_id}
                </TableCell>
                <TableCell>{formatDate(row.date)}</TableCell>
                <TableCell>{row.debit_amount}</TableCell>
                <TableCell>{row.credit_amount}</TableCell>
                <TableCell>{row.sender}</TableCell>
                <TableCell>{row.reciever}</TableCell>
                <TableCell>{row.transaction_category}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="TableContainer"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
    />
    <button onClick={console.log(rowsPerPage)}>lol</button>
  </div>
  );
}

export default DataGrid;



