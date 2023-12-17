import React from 'react'

const Table2 = () => {
  // Sample data (replace with your actual data)
  const users = [
    {
      id: 1,
      profileImage: 'profile_image_url_1',
      name: 'John Doe',
      checkinTime: '9:00 AM',
      checkoutTime: '5:00 PM',
    },
    {
      id: 2,
      profileImage: 'profile_image_url_2',
      name: 'Jane Smith',
      checkinTime: '8:30 AM',
      checkoutTime: '4:30 PM',
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
            <th>Check-in Time</th>
            <th>Check-out Time</th>
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
              <td>{user.checkinTime}</td>
              <td>{user.checkoutTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table2