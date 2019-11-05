import React from 'react';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import Banner from '../Banner/Banner';
import { Redirect } from 'react-router-dom';

class LoadingPage extends React.Component {


  render() {
    if (sessionStorage.getItem('token')) {
      return <Redirect to='/news' push />
    }

    return (
      <div className="wellcome">
        <HeaderMenu />
        <Banner />
      </div>
    )
  }
}

export default LoadingPage;