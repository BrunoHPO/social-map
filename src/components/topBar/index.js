import React, {useContext} from 'react';
import logo from '../../assets/images/logo.png';
import UserContext from '../../context/userContext';
import './index.css';

function TopBar() {
    
    const {users, setUsers} = useContext(UserContext);

    const handleAddUser = () => {

        if(users.length < 4){     

        fetch('https://randomuser.me/api/')
          .then(
            res => res.json()
          )
          .then(
            data => {
              const result = data.results[0];
              setUsers([...users, result]);
              console.log(result);
              console.log(result.location.coordinates);
              console.log(result.location.city + ', ' + result.location.country)
            }
          )
        }
      }

    return(
        <div className="topbar">
            <input className="Logo" type="image" src={logo} alt="Social-map logo" onClick={handleAddUser}/> 
        </div>
    );
}

export default TopBar;