import { GlobalStyle } from 'GlobalStyles';

import { FriendsList } from './FriendsList/FriendsList';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { TransactionsHistory } from './TransactionHistory/TransactionHistory';

import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics statistics={data} title="Upload files" />
      <FriendsList friends={friends} />
      <TransactionsHistory items={transactions} />
    </>
  );
};
