# Piechart and List

## Technological Stack:

ReactJS
NodeJS + ExpressJS
PostgreSQL

## Project Setup

In order to run this app, you have to start React app and Express app at the same time. Also, you will need to recreate the database used for this project.

Starting React app:
```
npm run start
```

Starting Express app:
```
cd api
npm run start
```

Info about recreating the database is located in "/api/database.sql"

## How it works:

This app has two React components

First component has two pie charts, demonstrating the amount of credit and the amount of debit based on transaction category. Pie charts are created by using CanvasJS library, and they pull data from the API.

Second component has a table with all transactions and information about them. This table has seven columns: Transaction ID, Date, Debit Amount, Credit Amount, Sender, Reciever and Category.

### This app is pretty much in a concept state so far, but sooner or later, it will be working properly :)

## 14/02/2023 Update

### Finished Tasks:

1) Sorting data by collumns

## 16/02/2023 Update

### Finished Tasks:

1) Made SQL query in 'api/sums' GET request to a more convenient one
2) Adapted pie charts to work with data from new GET request

### Known Issues:

1) Table pagination is working wierdly. When user picks a value in "Rows per page" menu, the proper amount of rows per page is shown, but it is impossible to change to the next page. Seems like there is something wrong either with 'api/data' GET method, or with 'fetch' method in 'DataGrid.js'.

## To-Do List:
1) Implement filter by date
2) Implement language switch from English to Hebrew
3) Add proper styling
4) Make pie charts stay next to each other. Consider using another library for pie charts. Ex: Google Charts
5) Implement usage of Sequelize