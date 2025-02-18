import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const flip = keyframes`
  0% { transform: rotateX(0deg); }
  50% { transform: rotateX(90deg); opacity: 0.7; }
  100% { transform: rotateX(0deg); }
`;

const popIn = keyframes`
  0% { transform: translateX(-50%) scale(0); opacity: 0; }
  50% { transform: translateX(-50%) scale(1.1); opacity: 1; }
  100% { transform: translateX(-50%) scale(1); }
`;

const CalendarLoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;
  position: relative;
  margin: auto;
  width: 100%;
`;

const Calendar = styled.div`
  width: 80px;
  height: 80px;
  background: #fff;
  border: 2px solid #de2a5d;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${flip} 0.5s ease-in-out infinite alternate;
  transform-origin: center;
  perspective: 1000px;
`;

const CalendarTop = styled.div`
  background: #de2a5d;
  color: white;
  width: 100%;
  text-align: center;
  padding: 5px;
  font-size: 12px;
  font-weight: bold;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const CalendarDate = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-top: 5px;
  color: #423a3a;
`;

const PartyHat = styled.div`
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 24px solid yellow;
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  animation: ${popIn} 1s ease-in-out infinite alternate;
`;

const CalendarLoader = () => {
  const [date, setDate] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDate((prev) => (prev === 31 ? 1 : prev + 1));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <CalendarLoaderContainer>
      <Calendar>
        <CalendarTop>BIRTHDAY</CalendarTop>
        <CalendarDate>{date}</CalendarDate>
      </Calendar>
      {/* <PartyHat /> */}
    </CalendarLoaderContainer>
  );
};

export default CalendarLoader;
