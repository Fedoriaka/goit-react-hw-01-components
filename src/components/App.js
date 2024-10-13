import user from '../source/user.json';
import data from '../source/data.json';
import friends from '../source/friends.json';
import transaction from '../source/transaction.json';
import Profile from './profile/Profile'
import Statistic from './statistic/Statistics';
import FriendList from './friends/FriendList'
import TransactionHistory from './transaction/TransactionHistory';
export default function App() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        maxWidth: '1400px',
        flexWrap: 'wrap',
        marginBottom: '40px',
        marginTop: '40px',
      }}
    >
      <Profile
        key={user.username}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transaction} />
    </div>
  );
};
