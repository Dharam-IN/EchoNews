import React, { useEffect, useState } from 'react';
import './att_page.css';

export default function Navbar_top() {
  const [time, setTime] = useState('');

  useEffect(() => {
    function showTime() {
      const date = new Date();
      let h = date.getHours(); // 0 - 23
      const m = date.getMinutes(); // 0 - 59
      const s = date.getSeconds(); // 0 - 59
      let session = "AM";

      if (h === 0) {
        h = 12;
      }

      if (h > 12) {
        h -= 12;
        session = "PM";
      }

      const formattedTime = `${h}:${m < 10 ? `0${m}` : m}:${s} ${session}`;
      setTime(formattedTime);
    }

    const intervalId = setInterval(showTime, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <nav className='container'>
      <div className="row my-3">
        <div className="col-md-6">
          <div className="clock-con">
            <div id="MyClockDisplay" className="clock">
              {time}
            </div>
          </div>
        </div>
        <div className="col-md-6 text-end">
          <div className="att_btns">
            <button className="btn btn-primary me-3">In</button>
            <button className="btn btn-primary">Out</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
