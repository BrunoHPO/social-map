import React, {useState, useEffect} from 'react';
import TopBar from './components/topBar/index';
import UserContext from './context/userContext';
import UserCard from './components/userCard';
import Map from './components/map';

function App() {

  const [users, setUsers] = useState([]); 
  
  useEffect(
    () => {
      setUsers([...users]);
    }, []);

  return (
    <UserContext.Provider value={{users, setUsers}}>
      <div className="App">
        <TopBar />
        <Map />
        {
          users.map(user => 
            
            <UserCard
                key={user.name.first+user.name.last} 
                picture={user.picture.medium}
                name={user.name.first+' '+user.name.last}
                phone={user.phone}
                email={user.email}
                city={user.location.city}
                country={user.location.country}
            />              
          )
        }
                
      </div>
    </UserContext.Provider>
  );
}

export default App;
