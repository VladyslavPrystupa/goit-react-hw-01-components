import propTypes from 'prop-types';
import { ListOfFriends, SectionOfFriends } from './FriendsList.styled';
import { FriendName } from 'components/FriendName/FriendName';
export const FriendsList = ({ friends }) => {
  return (
    <SectionOfFriends>
      <ListOfFriends>
        <FriendName friends={friends} />
      </ListOfFriends>
    </SectionOfFriends>
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
