import React from 'react'

const Table = () => {
    const users = [
        {
          id: 1,
          profileImage: 'profile_image_url_1',
          name: 'John Doe',
          courseName: 'React Native',
          password: '*********',
        },
        {
          id: 2,
          profileImage: 'profile_image_url_2',
          name: 'Jane Smith',
          courseName: 'JavaScript Basics',
          password: '*********',
        },
        // Add more objects for additional users
      ];
    
        return (
            <div className="user-table-container"> {/* Apply CSS class for styling */}
              <table className="user-table" border="1">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Profile Image</th>
                    <th>Name</th>
                    <th>Course Name</th>
                    <th>Password</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>
                        <img src={user.profileImage} alt="Profile" style={{ width: '50px', height: '50px' }} />
                      </td>
                      <td>{user.name}</td>
                      <td>{user.courseName}</td>
                      <td>{user.password}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
    };


export default Table