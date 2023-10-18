import React, { useEffect } from 'react';
import './att_page.css'

export default function AttaPage() {
const labels = Array.from({ length: 12 }, (_, index) => index + 1);
  useEffect(() => {
    // Get references to DOM elements
    const body = document.querySelector("body"),
      hourHand = document.querySelector(".hour"),
      minuteHand = document.querySelector(".minute"),
      secondHand = document.querySelector(".second"),
      modeSwitch = document.querySelector(".mode-switch");

    // Check if the mode is already set to "Dark Mode" in localStorage
    if (localStorage.getItem("mode") === "Dark") {
      // Add "dark" class to body and set modeSwitch text to "Light Mode"
      body.classList.add("dark");
      modeSwitch.textContent = "Light";
    }

    const updateTime = () => {
      // Get current time and calculate degrees for clock hands
      let date = new Date(),
        secToDeg = (date.getSeconds() / 60) * 360,
        minToDeg = (date.getMinutes() / 60) * 360,
        hrToDeg = (date.getHours() / 12) * 360;

      // Rotate the clock hands to the appropriate degree based on the current time
      secondHand.style.transform = `rotate(${secToDeg}deg)`;
      minuteHand.style.transform = `rotate(${minToDeg}deg)`;
      hourHand.style.transform = `rotate(${hrToDeg}deg)`;
    };

    // Call updateTime to set clock hands every second
    setInterval(updateTime, 1000);

    // Call updateTime function on page load
    updateTime();
  }, []); // The empty dependency array [] ensures that this effect runs once after the initial render

  return (
    <nav className='container'>
      <div className="row">
        <div className="col-md-6">
        <div className="clock-con">
            <div className="clock">
              {labels.map((label) => (
                <label key={label} style={{ '--i': label }}> <span>{label}</span> </label>
              ))}
              <div className="indicator">
                <span className="hand hour"></span>
                <span className="hand minute"></span>
                <span className="hand second"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 text-end">
          <div className="d-flex justify-content-end">
            <div className="att_btns">
              <button className="btn btn-primary me-3">In</button>
            </div>
            <div className="att_btns">
              <button className="btn btn-primary">Out</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
