import React, { Component } from 'react';
import firebase from 'firebase';

class UserCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userCount: undefined,
    };
  }

  componentDidMount() {
    const database = firebase.database();
    const ref = database.ref('analytics/clickedCalculate');
    ref.on('value', snap => this.setState({ userCount: snap.val() }));
  }

  render() {
    if (this.state.userCount === undefined) {
      return <h1>Loading...</h1>;
    }

    return <h1>{this.state.userCount}</h1>;
  }
}

export default UserCounter;
