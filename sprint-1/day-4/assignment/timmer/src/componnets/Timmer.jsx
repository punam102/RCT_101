import React, { useEffect, useState } from "react";
import styles from "./Timmer.module.css";
const Timmer = () => {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  let timmer;
  useEffect(() => {
    timmer = setInterval(() => {
      setSec(sec + 1);
      if (sec === 59) {
        setMin(min + 1);
        setSec(0);
      }
    }, 1000);
    return () => clearInterval(timmer);
  });
  const restart = () => {
    setSec(0);
    setMin(0);
  };
  const stop = () => {
    clearInterval(timmer);
  };
  return (
    <div className={styles.timer}>
      <div className={styles.container}>
        <div className={styles.timer_container}>
        <h1>Timer</h1>
        <h1>
          {min < 10 ? "0" + min : min}:{sec < 10 ? "0" + sec : sec}
        </h1>
        <button className={styles.restart} onClick={restart}>
          Restart
        </button>
        <button className={styles.stop} onClick={stop}>
          Stop
        </button>
        </div>
      </div>
    </div>
  );
};

export default Timmer;
