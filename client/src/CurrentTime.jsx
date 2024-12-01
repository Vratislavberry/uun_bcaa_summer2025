import { useEffect, useState } from "react";

function CurrentTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setTimeout(() => setCurrentTime(new Date(), 1000));
  }, [currentTime]);

  return currentTime.toLocaleTimeString();
}

export default CurrentTime;
