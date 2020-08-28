import React, {useContext} from 'react';
import UserContext from '../../context/userContext';
import './index.css';

function UserCard({picture, name, phone, email, city, country}) {

    const {users, setUsers} = useContext(UserContext);

    function handleRemoveUser(email) {
        const userIndex = users.findIndex(user => user.email === email);
    
        const copyUsers = [...users];
    
        copyUsers.splice(userIndex, 1);
    
        setUsers(copyUsers);
      }

    return (
        <div key={name} className="userCard">          
          <div className="userData">
            <p>{name}</p>
            <p><i className="fas fa-phone"></i> {phone}</p>
            <p><i className="fas fa-envelope-square"></i> {email}</p>
            <p>               
                <i className="fas fa-map-marker-alt"></i>
                {' '+city+', '+country}            
            </p>
          </div>
          <div className="avatarSpot">        
            <input className="avatar" type="image" src={picture} alt="User Avatar" onClick={() => handleRemoveUser(email)}/>
          </div>       
        </div>
      );

}

export default UserCard;