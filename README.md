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

Second component has a table with all transactions and information about them pulled from the API. This table has seven columns: Transaction ID, Date, Debit Amount, Credit Amount, Sender, Reciever and Category. The table gets sorted (both ascending and desciending) by either of collumns by pressing the collumn header. Also, there is a possibility to filter data by picking start date and end date. This filtering will result in demonstrating only transactions that occured within those two dates

## Known issues:

1) When swithcing to Hebrew, some of the elements are not displayed properly (Pagination element)
2) Navbar is too big

## Potential features:

1) Filter the data in the table based on the sender or reciever name

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

## 17/02/2023

### Finished Tasks:

1) Fixed table pagination. The problem was in GET method. Now it works as it should work
2) Added comments to the code
3) Moved PieCharts to a separate component

## 21/02/2023

### Finished Tasks:

1) Implemented filter by date
2) Implemented translation from English to Hebrew to most of the words
3) Implemented change direction to "Right-to-Left" when changing language from English to Hebrew

## 22/02/2023

### Finished Tasks:

1) Added some basic styling to the page. Specifically:
    1) Made Pie Charts stay next to each other
    2) Added Navbar with a dropdown menu (that uses font "Awesome" icon) for language change buttons
    3) Made Date Pickers stay next to each other and change direction properly based on the chosen language
2) Finished translation of most of the words that were not yet translated
3) Providing additional comments to the code


## To-Do List:

1) Implement usage of Sequelize
2) Finally get some taste in design and make the project look nice :)