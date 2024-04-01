
import './App.css'
import { UserProfile } from './components/Profile/Profile.jsx'
import { userData } from "../src/userData.json";



const App = () => {
  return (
       <UserProfile
        name={ userData.username}
        tag={ userData.tag}
        location={ userData.location}
        image={ userData.avatar}
        stats={ userData.stats}
      />
  );
};

export default App;