import styled from 'styled-components';

export const ListOfFriends = styled.ul`
  margin: 0 auto;
  width: 320px;

  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Friend = styled.li`
  padding: 6px;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  border: 1px solid black;
  border-radius: 8px;
  background-color: bisque;
`;

export const FriendStatus = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${props => {
    if (props.isOnline) {
      return 'green';
    } else {
      return 'red';
    }
  }};
`;
