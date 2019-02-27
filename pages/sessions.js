import React from 'react';
import axios from 'axios';
import Link from 'next/link';

class Index extends React.Component {

  static async getInitialProps() {
<<<<<<< HEAD
    var promise = axios.get('http://localhost:4000/sessions')
      .then(response => {
        return {
          hasErrored: false,
          sessionData: response.data
        };
      })

=======
    var promise = axios.get('http://localhost:4000/sessions').then(response => {
      return {
        hasErrored: false,
        sessionData: response.data
      };
    })
>>>>>>> af5190917d5215a4702f9a974f503e37a5a913e1
      .catch(error => {
        return {
          hasErrored: true,
          message: error.message
        }
      });
<<<<<<< HEAD
      
=======
>>>>>>> af5190917d5215a4702f9a974f503e37a5a913e1
    return promise;
  }

  constructor(props) {
    super(props);
    this.state = {
      hasErrored: props.hasErrored,
      message: props.message,
      sessionData: props.sessionData
    }
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
        <Link href='/'>
          <a>SPEAKERS</a>
        </Link>

        <ul>
          {this.state.sessionData.map((session) =>
            <li key={session.id}>
              {session.title} {session.id}
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default Index