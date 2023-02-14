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

## To-Do List:

1) Make it possible to sort data by each collumn
2) Implement filter by date
3) Implement language switch from English to Hebrew
4) Add proper styling
5) Make pie charts stay next to each other. Consider using another library for pie charts. Ex: Google Charts
6) Implement usage of Sequelize