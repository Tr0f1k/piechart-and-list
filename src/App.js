import React, { useState, useEffect } from "react";
import axios from "axios";
import CanvasJSReact from './canvasjs.react';
import DataGrid from './DataGrid';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/sums")
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const home = Object.keys(data).length ? data.find(item => item.category === 'Home') : null;
  const car = Object.keys(data).length ? data.find(item => item.category === 'Car') : null;
  const pets = Object.keys(data).length ? data.find(item => item.category === 'Pets') : null;
  const food = Object.keys(data).length ? data.find(item => item.category === 'Food') : null;
  const electronics = Object.keys(data).length ? data.find(item => item.category === 'Electronics') : null;
  const school = Object.keys(data).length ? data.find(item => item.category === 'School') : null;
  const misc = Object.keys(data).length ? data.find(item => item.category === 'Misc') : null;

  const home_debit = home ? home.debit : 0;
  const car_debit = car ? car.debit : 0;
  const pets_debit = pets ? pets.debit : 0;
  const food_debit = food ? food.debit : 0;
  const electronics_debit = electronics ? electronics.debit : 0;
  const school_debit = school ? school.debit : 0;
  const misc_debit = misc ? misc.debit : 0;

  const home_credit = home ? home.credit : 0;
  const car_credit = car ? car.credit : 0;
  const pets_credit = pets ? pets.credit : 0;
  const food_credit = food ? food.credit : 0;
  const electronics_credit = electronics ? electronics.credit : 0;
  const school_credit = school ? school.credit : 0;
  const misc_credit = misc ? misc.credit : 0;


  const debits = {
    data: [{
      type: "pie",
      dataPoints: [
        {y: home_debit, label: "Home"},
        {y: car_debit, label: "Car"},
        {y: pets_debit, label: "Pets"},
        {y: food_debit, label: "Food"},
        {y: electronics_debit, label: "Electronics"},
        {y: school_debit, label: "School"},
        {y: misc_debit, label: "Misc"},
      ]
    }],
    title: {
      text: "Debits"
    }
  };

  const credits = {
    data: [{
      type: "pie",
      dataPoints: [
        {y: home_credit, label: "Home"},
        {y: car_credit, label: "Car"},
        {y: pets_credit, label: "Pets"},
        {y: food_credit, label: "Food"},
        {y: electronics_credit, label: "Electronics"},
        {y: school_credit, label: "School"},
        {y: misc_credit, label: "Misc"},
      ]
    }],
    title: {
      text: "Credits"
    }
  };

  return (
    <div>
      <CanvasJSChart options={debits} />
      <CanvasJSChart options={credits} />
      <DataGrid />
    </div>
  );
}

export default App;