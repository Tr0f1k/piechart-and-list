import React, { useState, useEffect } from "react";
import axios from "axios";
import CanvasJSReact from './canvasjs.react';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function PieCharts({ t }) {
  const [data, setData] = useState({});

  //Pulling data from the API
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

  //Searching for specific category of transaction
  const home = Object.keys(data).length ? data.find(item => item.category === 'Home') : null;
  const car = Object.keys(data).length ? data.find(item => item.category === 'Car') : null;
  const pets = Object.keys(data).length ? data.find(item => item.category === 'Pets') : null;
  const food = Object.keys(data).length ? data.find(item => item.category === 'Food') : null;
  const electronics = Object.keys(data).length ? data.find(item => item.category === 'Electronics') : null;
  const school = Object.keys(data).length ? data.find(item => item.category === 'School') : null;
  const misc = Object.keys(data).length ? data.find(item => item.category === 'Misc') : null;

  //Declaring debits by different categories
  const home_debit = home ? home.debit : 0;
  const car_debit = car ? car.debit : 0;
  const pets_debit = pets ? pets.debit : 0;
  const food_debit = food ? food.debit : 0;
  const electronics_debit = electronics ? electronics.debit : 0;
  const school_debit = school ? school.debit : 0;
  const misc_debit = misc ? misc.debit : 0;

  //Declaring credits by different categories
  const home_credit = home ? home.credit : 0;
  const car_credit = car ? car.credit : 0;
  const pets_credit = pets ? pets.credit : 0;
  const food_credit = food ? food.credit : 0;
  const electronics_credit = electronics ? electronics.credit : 0;
  const school_credit = school ? school.credit : 0;
  const misc_credit = misc ? misc.credit : 0;

  
  //Pie chart with debits
  const debits = {
    data: [{
      type: "pie",
      dataPoints: [
        {y: home_debit, label: t("Home")},
        {y: car_debit, label: t("Car")},
        {y: pets_debit, label: t("Pets")},
        {y: food_debit, label: t("Food")},
        {y: electronics_debit, label: t("Electronics")},
        {y: school_debit, label: t("School")},
        {y: misc_debit, label: t("Misc")},
      ]
    }],
    title: {
      text: t("Debit")
    }
  };

  //Pie chart with credits
  const credits = {
    data: [{
      type: "pie",
      dataPoints: [
        {y: home_credit, label: t("Home")},
        {y: car_credit, label: t("Car")},
        {y: pets_credit, label: t("Pets")},
        {y: food_credit, label: t("Food")},
        {y: electronics_credit, label: t("Electronics")},
        {y: school_credit, label: t("School")},
        {y: misc_credit, label: t("Misc")},
      ]
    }],
    title: {
      text: t("Credit")
    }
  };

  return (
    <div dir={t("app.dir")}>
      <CanvasJSChart options={debits} />
      <CanvasJSChart options={credits} />
    </div>
  );
}

export default PieCharts;