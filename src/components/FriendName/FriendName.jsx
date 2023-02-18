import { Friend, FriendStatus } from './FriendName.styled';

export const FriendName = ({ friends }) => {
  return friends.map(friend => (
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
  ));
};
