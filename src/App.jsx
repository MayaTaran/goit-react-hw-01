
import './App.css'
import { Profile } from './components/Profile/Profile.jsx'
import { FriendList } from './components/FriendList/FriendList.jsx'
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory.jsx'
import userData from '../src/userData.json';
import friends from '../src/friends.json';
import transactions from '../src/transactions.json';

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
          <FriendList friends={friends} />
          <TransactionHistory transactions={transactions} />
    </>
  );
};


export default App;