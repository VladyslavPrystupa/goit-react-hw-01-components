import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';

import user from 'user.json';
import data from 'data.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics statistics={data} title="Upload files" />
    </>
  );
};
