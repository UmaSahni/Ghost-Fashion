import React, { useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const Timer = ({duration=86400}) => {
  
  const [timeLeft, setTimeLeft] = useState(duration); // 86400 seconds in a day
  const [timeString, setTimeString] = useState('');
  const store = useSelector((store)=>store.adminReducer)
  // console.log(store)
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  useEffect(() => {
    const days = Math.floor(timeLeft / 86400);
    const hours = Math.floor((timeLeft % 86400) / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    setTimeString(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
  }, [timeLeft]);

  return (
    <Box>
      <Text color={"green"} fontSize="xl">{timeString}</Text>
    </Box>
  );
};

export default Timer;
