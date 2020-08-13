import React from 'react';
import './UserSummary.css';

class UserSummary extends React.Component {
  render(props) {
    const user = this.props.user;
    return (
      <li className="UserSummary">
        <span>{user.firstname}</span> - {user.lastname}
      </li>
    )
  }
}

export default UserSummary;