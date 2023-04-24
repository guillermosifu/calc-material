import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock">
      <Typography variant="h4" component="div" sx={{ mb: 1 }}>
        {time.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })}
      </Typography>
      <Typography variant="subtitle1" component="div">
        {time.toLocaleDateString([], {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </Typography>
    </div>
  );
}

export default Clock;
