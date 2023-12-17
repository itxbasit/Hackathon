import React from 'react'

const Table2 = ({data}) => {
  // Sample data (replace with your actual data)

  return (
    <div className="user-table-container"> {/* Apply CSS class for styling */}
      <table className="user-table" border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Profile Image</th>
            <th>Name</th>
            <th>Check-in Time</th>
            <th>Check-out Time</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user, id) => (
            user?.attendanceDetails.length !== 0  ?
            <tr key={id}>
              <td>{id+1}</td>
              <td>
                <img src={user.url} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: "50%" }} />
              </td>
              <td>{user.name}</td>
              <td>{user.attendanceDetails[0]}</td>
              <td>{user.attendanceDetails[1]}</td>
            </tr>: 
            <p style={{textAlign: "center", marginTop: "2rem"}}>No Class Taken</p>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table2