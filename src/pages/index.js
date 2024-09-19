import { useEffect, useState } from "react";

export default function Home() {
  const [light, setLight] = useState("red");

  useEffect(() => {
    // Function to handle the traffic light color changes
    const cycleLights = () => {
      if (light === "red") {
        setLight("green");
      } else if (light === "green") {
        setLight("yellow");
      } else if (light === "yellow") {
        setLight("red");
      }
    };

    // Set interval to change the light every 3 seconds
    const interval = setInterval(cycleLights, 3000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [light]);

  return (
    <div style={styles.container}>
      <div style={styles.trafficLight}>
        <div style={{ ...styles.light, backgroundColor: light === "red" ? "red" : "grey" }} />
        <div style={{ ...styles.light, backgroundColor: light === "yellow" ? "yellow" : "grey" }} />
        <div style={{ ...styles.light, backgroundColor: light === "green" ? "green" : "grey" }} />
      </div>
    </div>
  );
}

// Some basic styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  },
  trafficLight: {
    width: "100px",
    backgroundColor: "#333",
    padding: "20px",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  light: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "grey",
  },
};
