import React, { useState, useEffect } from "react";
import axios from "axios";
import CanvasJSReact from './canvasjs.react';
import "./styles/PieCharts.css";

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

  const dataArray = Object.values(data);

  //Searching for specific category of transaction
  const home = dataArray.find(item => item.category === 'Home');
  const car = dataArray.find(item => item.category === 'Car');
  const pets = dataArray.find(item => item.category === 'Pets');
  const food = dataArray.find(item => item.category === 'Food');
  const electronics = dataArray.find(item => item.category === 'Electronics');
  const school = dataArray.find(item => item.category === 'School');
  const misc = dataArray.find(item => item.category === 'Misc');
    
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
    backgroundColor: "#3cc396",
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
    backgroundColor: "#3cc396",
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
    <div>
      <div dir={t("app.dir")}>{/*Pulling the value of 'dir' form the translation files (in this case: en.json and he.json)*/}
        <h1>{t("Transaction Statistics:")}</h1>
      </div>
      <div className='container'> {/*Using flexbox for Pie Chart components so that they can stay next to each other*/}
        <div className="item">
        <CanvasJSChart options={debits} />
        </div>
        <div className="item">
        <CanvasJSChart options={credits} />
        </div>
      </div>
    </div>
  );
}

export default PieCharts;