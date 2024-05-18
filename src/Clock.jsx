function Clock() {
    // Component state to hold the current time
    const [currentTime, setCurrentTime] = useState(
      // Initial value for currentTime state
      new Date().toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      })
    );
  
    // Effect hook to update currentTime state every second
    useEffect(() => {
      // setInterval function to update currentTime every second
      const interval = setInterval(() => {
        setCurrentTime(
          // Update currentTime with the current time formatted as per requirements
          new Date().toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
          })
        );
      }, 1000); // Interval of 1000 milliseconds (1 second)
  
      // Clean-up function to clear the interval when the component unmounts
      return () => clearInterval(interval);
    }, []); // Empty dependency array to run the effect only once on mount
  
    // JSX to render the current time
    return (
      <h4>Current Time : {currentTime}</h4>
    );
  } 
  