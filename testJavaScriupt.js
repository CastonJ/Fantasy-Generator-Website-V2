
// Import necessary libraries
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Define animation keyframes
const rollDice = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Styled components
const DiceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Dice = styled.div`
  width: 100px;
  height: 100px;
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-weight: bold;
  animation: ${rollDice} 1s linear infinite;
`;

const RollButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const DiceRoller = () => {
    const [diceValue, setDiceValue] = useState(null);
    const [isRolling, setIsRolling] = useState(false);

    const rollDice = () => {
        setIsRolling(true);
        setTimeout(() => {
            const sides = [2, 4, 6, 8, 12, 20];
            const randomIndex = Math.floor(Math.random() * sides.length);
            const randomSide = sides[randomIndex];
            setDiceValue(randomSide);
            setIsRolling(false);
        }, 1000);
    };

    useEffect(() => {
        if (isRolling) {
            const interval = setInterval(() => {
                setDiceValue(Math.floor(Math.random() * 6) + 1);
            }, 100);
            return () => clearInterval(interval);
        }
    }, [isRolling]);

    return (
        <DiceContainer>
            <Dice>{isRolling ? '...' : diceValue}</Dice>
            <RollButton onClick={rollDice}>Roll Dice</RollButton>
        </DiceContainer>
    );
};

export default DiceRoller;