import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Paper, TablePagination } from "@material-ui/core";
import { stableSort, getSorting } from './helpers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import "./styles/DataGrid.css";

//Table Styling
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function DataGrid({ t }) {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('transaction_id');
  const [data, setData] = React.useState(null);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  //Receiving data from API
  React.useEffect(() => {
    fetch(`http://localhost:4000/api/data`)
      .then(res => res.json())
      .then(res => {
        setData(res);
      });
  }, [page, rowsPerPage]);

  //Handling page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  //Handling change of amount of rows per page
  const handleChangeRowsPerPage = (event) => {
    const newRowsPerPage = +event.target.value;
    setRowsPerPage(newRowsPerPage);
    setPage(0);
    fetch(`http://localhost:4000/api/data`)
      .then(res => res.json())
      .then(res => {
        setData(res.data);
      });
  };

  //Handling sorting
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  //Formatting date as dd/mm/yyyy
  const formatDate = date => {
    return new Date(date).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  //Filter data by date
  const filterData = (data) => {
    if (!startDate || !endDate) {
      return data;
    }
    return data.filter((row) => {
      const transactionDate = new Date(row.date);
      return (
        transactionDate >= new Date(startDate) && transactionDate <= new Date(endDate)
      );
    });
  };  

  //Handling filter by date
  const handleDateFilterChange = () => {
    setPage(0); // Reset the page number to 0
  }

  //In case if there is no data on API
  if (!data) {
    return <div>Loading data...</div>;
  }

  const filteredData = filterData(data);
  const sortedData = filteredData.length > 0 ? stableSort(filteredData, getSorting(order, orderBy)) : filteredData;
  const rowCount = sortedData.length;
  const pageCount = Math.ceil(rowCount / rowsPerPage);
  const emptyRows = page > 0 ? Math.max(0, (page + 1) * rowsPerPage - rowCount) : 0;
  const rows = sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage - emptyRows);


  return (
    <div dir={t("app.dir")}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div class="datepick">
          <Stack spacing={3}>
            <div class="item">
              <DatePicker
                label={t("Start date")}
                value={startDate}
                onChange={date => { setStartDate(date); handleDateFilterChange(); }}
                renderInput={(params) => <TextField {...params} />}
              />
            </div>
            <div class="item">
              <DatePicker
                label={t("End date")}
                value={endDate}
                onChange={date => { setEndDate(date); handleDateFilterChange(); }}
                renderInput={(params) => <TextField {...params} />}
              />
            </div>
          </Stack>
        </div>
    </LocalizationProvider>
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
                {t("Date")}
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
                {t("Debit Amount")}
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
                {t("Credit Amount")}
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
                {t("Sender")}
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
                {t("Reciever")}
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
                {t("Transaction Category")}
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows
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
    <div>
    <TablePagination
      rowsPerPageOptions={[5, 10, 25]}
      component="div"
      count={filteredData.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
    </div>
  </div>
  );
}

export default DataGrid;