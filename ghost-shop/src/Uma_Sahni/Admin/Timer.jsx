import React, { useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteProductDetails, GetProductDetails } from '../../Redux/AdminReducer/action';

const Timer = ({duration=86400, id}) => {
  
  const [timeLeft, setTimeLeft] = useState(duration); // 86400 seconds in a day
  const [timeString, setTimeString] = useState('');
  const store = useSelector((store)=>store.adminReducer)
 
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

    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
      handleDelete(id); // assuming id is defined somewhere in the component
    }
  }, [timeLeft]);

const dispatch = useDispatch()

   const handleDelete = (id) => {
    dispatch(DeleteProductDetails(id)).then((res) => {
      dispatch(GetProductDetails()).then(() =>
        alert("Product Deleted Successfully")
      );
    });
  };

  return (
    <Box>
      <Text color={"green"} fontSize="xl">{timeString}</Text>
    </Box>
  );
};

export default Timer;
