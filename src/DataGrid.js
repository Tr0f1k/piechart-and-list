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

import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';

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
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:4000/api/data');
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>Transaction ID</TableCell>
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
  );
};


