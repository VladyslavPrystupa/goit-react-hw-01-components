import propTypes from 'prop-types';
import { ListOfFriends, Friend, FriendStatus } from './FriendsList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '320px',
      }}
    >
      <ListOfFriends>
        {friends.map(friend => (
          <Friend key={friend.id}>
            <FriendStatus isOnline={friend.isOnline}></FriendStatus>
            <img
              style={{ marginRight: '10px' }}
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p>{friend.name}</p>
          </Friend>
        ))}
      </ListOfFriends>
    </div>
  );
};

FriendsList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.exact({
      avatar: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      id: propTypes.number.isRequired,
      isOnline: propTypes.bool.isRequired,
    })
  ),
};
