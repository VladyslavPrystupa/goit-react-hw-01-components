import styled from 'styled-components';

export const StatisticsSection = styled.section`
  border: 1px solid black;
  border-radius: 10px;
  width: 320px;
  margin: 10px auto;
  padding: 10px 0;
  text-align: center;
  background-color: rgb(218, 215, 215);
`;

export const StatList = styled.ul`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  background-color: white;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

export const Stat = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }};
`;
