import React, { useEffect } from "react";
import "./Home.css";
import Chart from "./Chart";
import Example from "./PieChart";

import Cookies from "js-cookie";

import {useNavigate} from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()

  const jwtToken = Cookies.get('jwt_token')
  console.log('token',jwtToken)



  useEffect(()=>{
    if(jwtToken === undefined){
      navigate('/login')
    }
  },[])

  const data = [
    {
      icon: "https://res.cloudinary.com/dlafvsqxz/image/upload/v1687538461/dashboard_icon_sk5od3.png",
      title: "Dashboard",
    },
    {
      icon: "https://res.cloudinary.com/dlafvsqxz/image/upload/v1687538461/transaction_icon_vkbzz5.png",
      title: "Transactions",
    },
    {
      icon: "https://res.cloudinary.com/dlafvsqxz/image/upload/v1687538461/schedule_icon_y0hg5t.png",
      title: "Schedules",
    },
    {
      icon: "https://res.cloudinary.com/dlafvsqxz/image/upload/v1687538461/user_icon_bvscqy.png",
      title: "Users",
    },
    {
      icon: "https://res.cloudinary.com/dlafvsqxz/image/upload/v1687538461/setting_icon_mmblup.png",
      title: "Settings",
    },
  ];

  const cardData = [
    {
      icon: "https://res.cloudinary.com/dlafvsqxz/image/upload/v1687540472/Vector_1_njn0lk.png",
      title: "Total Revenues",
      count: "$2,129,430",
      bgColor: "#DDEFE0",
    },
    {
      icon: "https://res.cloudinary.com/dlafvsqxz/image/upload/v1687543314/total_transactions_icon_sjqpwd.png",
      title: "Total Transactions",
      count: "1,520",
      bgColor: "#F4ECDD",
    },
    {
      icon: "https://res.cloudinary.com/dlafvsqxz/image/upload/v1687540472/Vector_2_zzffax.png",
      title: "Total Likes",
      count: "9,721",
      bgColor: "#EFDADA",
    },
    {
      icon: "https://res.cloudinary.com/dlafvsqxz/image/upload/v1687540472/Vector_3_i7i2yt.png",
      title: "Total Users",
      count: "892",
      bgColor: "#DEE0EF",
    },
  ];

  const pieChartData = [
    { color: "#98D89E", title: "Basic Tees", percentage: "55%" },
    { color: "#F6DC7D", title: "Custom Short Pants", percentage: "31%" },
    { color: "#EE8484", title: "Super Hoodies", percentage: "14%" },
  ];

  return (
    <div className="home-bg-container">
      <div className="left-dash-board-container">
        <h1 className="Board-head-text">Board.</h1>
        <ul className="ul-list">
          {data.map((item, i) => (
            <li key={i} className="list-item">
              <img
                src={item.icon}
                alt={item.title}
                className="dashboard-icon"
              />
              <p className="dashboard-side-text">{item.title}</p>
            </li>
          ))}
        </ul>
        <p className="help-text">Help</p>
        <p className="help-text">Contact us</p>
      </div>
      <div className="right-home-container">
        <div className="header-container">
          <p className="head-dash-board">Dashboard</p>

          <div className="sm-bell-profile-container">
            <img
              src="https://res.cloudinary.com/dlafvsqxz/image/upload/v1687540472/Vector_pryf65.png"
              alt="bell"
              className="bell-logo"
            />

            <img
              src="https://res.cloudinary.com/dlafvsqxz/image/upload/v1687540472/image_1_ceelib.png"
              alt="profile"
              className="person-img"
              onClick={()=> navigate('/login')}
            />
          </div>

          <div className="search-input-container">
            <input
              type="search"
              placeholder="Search..."
              className="search-input"
            />
            <img
              src="https://res.cloudinary.com/dlafvsqxz/image/upload/v1686480223/search_hmt76q.png"
              alt="search"
              className="search-icon"
            />
          </div>

          <div className="lg-bell-profile-container">
            <img
              src="https://res.cloudinary.com/dlafvsqxz/image/upload/v1687540472/Vector_pryf65.png"
              alt="bell"
              className="bell-logo"
            />

            <img
              src="https://res.cloudinary.com/dlafvsqxz/image/upload/v1687540472/image_1_ceelib.png"
              alt="profile"
              className="person-img"
              onClick={()=> navigate('/login')}
            />
          </div>
        </div>

        <ul className="cards-ul-list">
          {cardData.map((item, i) => (
            <li
              className="card-list-item"
              style={{ backgroundColor: `${item.bgColor}` }}
              key={i}
            >
              <img src={item.icon} alt={item.title} className="card-icon" />
              <p className="card-title">{item.title}</p>
              <p className="card-count">{item.count}</p>
            </li>
          ))}
        </ul>
        <div className="sm-chart-container">
          <Chart />
        </div>

        <div className="bottom-charts-containers">
          <div className="pie-chart-graph-container">
            <div
              style={{
                display: "flex",
                alignItems: "space-between",
                justifyContent: "space-between",
              }}
            >
              <h1 className="product-text">Top Products</h1>
              <p className="date-text-para">May - June 2021</p>
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ width: "200px", height: "150px" }}>
                <Example />
              </div>
              <ul>
                {pieChartData.map((item, i) => (
                  <li
                    style={{
                      listStyle: "none",
                      paddingLeft: "0px",
                      marginBottom: "10px",
                    }}
                    key={i}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        className="guest-dot"
                        style={{ backgroundColor: `${item.color}` }}
                      ></div>
                      <h1 className="basic-text">{item.title}</h1>
                    </div>
                    <p className="percentage-text">{item.percentage}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pie-chart-graph-container">
            <div
              style={{
                display: "flex",
                alignItems: "space-between",
                justifyContent: "space-between",
                marginBottom: "25px",
              }}
            >
              <h1 className="product-text">Today’s schedule</h1>
              <p className="date-text-para">See All</p>
            </div>

            <div className="schedule-container">
              <h1 className="meet-text-head">
                Meeting with suppliers from Kuta Bali
              </h1>
              <p className="time-text">14.00-15.00</p>
              <p className="sunset-text">at Sunset Road, Kuta, Bali</p>
            </div>

            <div className="schedule-below-container">
              <h1 className="meet-text-head">
                Check operation at Giga Factory 1
              </h1>
              <p className="time-text">18.00-20.00</p>
              <p className="sunset-text">at Central Jakarta </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
