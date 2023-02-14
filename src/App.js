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
        setData(response.data[0]);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const {home_debit, car_debit, pets_debit, food_debit, electronics_debit, school_debit, misc_debit, home_credit, car_credit, pets_credit, food_credit, electronics_credit, school_credit, misc_credit} = data;

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