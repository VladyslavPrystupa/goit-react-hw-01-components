import styled from 'styled-components';

export const Table = styled.table`
  margin: 20px auto;
  width: 320px;
  border: 1px solid black;
`;

export const Thead = styled.thead`
  background-color: aliceblue;
`;

export const Tbody = styled.tbody`
  text-align: center;
`;

export const Tr = styled.tr`
  &:nth-child(2n) {
    background-color: #72d7edfc;
  }
  &:nth-child(odd) {
    background-color: bisque;
  }
`;
