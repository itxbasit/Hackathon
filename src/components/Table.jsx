import React from 'react'

const Table = ({data}) => {
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
                  {data?.map((user, id) => (
                    <tr key={id+1}>
                      <td>{id+1}</td>
                      <td>
                        <img src={user.url} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: "50%" }} />
                      </td>
                      <td>{user.name}</td>
                      <td>{user.courseName}</td>
                      <td>********</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
    };


export default Table