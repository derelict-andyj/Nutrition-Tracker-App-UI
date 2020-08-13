import React from 'react';
import UserSummary from './UserSummary.jsx';
import './UserList.css';

class UserList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      users: []
    }
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            users: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, users } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul className="UserList">
          {users.map((user) =>
            <UserSummary user={user} key={user.id} />
          )}
        </ul>
      );
    }

  }



}

export default UserList;