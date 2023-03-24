import { useState, useEffect } from "react";

const TimerCom = () => {
  const [refreshTimer, setRefreshTimer] = useState("05:00");

  useEffect(() => {
    function startTimer(cTime) {
      let timeArray = cTime.split(/[:]+/);
      let m = +timeArray[0];
      let s = checkSecond(timeArray[1] - 1);
      if (s == 59) m = m - 1;

      let cTimer = `${m}:${s}`;
      setRefreshTimer(cTimer);
      if (m <= 0 && s <= 0) window.location.reload();
      setTimeout(() => startTimer(cTimer), 1000);
    }

    function checkSecond(sec) {
      sec = +sec;
      if (sec < 10 && sec >= 0) sec = 0 + sec;
      if (sec < 0) sec = 59;
      return sec;
    }

    startTimer(refreshTimer);
  }, []);

  return (
    <section
      style={{
        textAlign: "center",
        fontWeight: 500,
        boxShadow: "0px 0px 4px 2px #c2b8b87d",
        padding: "1px 0",
      }}
    >
      <p
        style={{
          margin: "8px",
        }}
      >
        After{" "}
        <span
          style={{
            borderRadius: "8px",
            background: "red",
            padding: "1px 7px",
            color: "white",
            fontWeight: 600,
          }}
        >
          {refreshTimer}
        </span>{" "}
        this page will be refreshed
      </p>
    </section>
  );
};

export default TimerCom;
