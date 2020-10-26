import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './styles.css';

function Data() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async() => {
            const allUsers = await axios.get("https://api.github.com/orgs/aws/members")
            const flagUser = []
            for (let index = 0; index < allUsers.data.length; index++) {
                const res = await axios.get(`https://api.github.com/users/${allUsers.data[index].login}`)
                flagUser.push(res.data);
            }
            setUsers(flagUser)
        }

        getUsers();
    }, []);

  return (
    <div className="data">
        {users.map(user => (
            <div className="card-body" key={user.id}>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img src={user.avatar_url} alt="image prolice" className="img-profile"/>

                <div className="card-data">

                    <div className="row column">
                        <div className="user align-items">{`${user.login}`}</div>
                        <div className="user-name align-items">{`${user.name}`}</div>
                    </div>

                    <div className="user-email align-items">{`${user.email}`}</div>

                    <div className="user-bio " style={{
                        display: 'flex', 
                        justifyContent: 'center'
                    }}>
                        {`${user.bio}`}
                    </div>

                </div>
            </div>
        ))}
    </div>
  );
}

export default Data;