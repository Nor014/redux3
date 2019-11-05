import React from 'react';
import AuthorizationForm from '../AuthorizationForm/AuthorizationForm'
import Profile from '../Profile/Profile'
import { connect } from 'react-redux';

class HeaderMenu extends React.Component {
  onLogoutBtn = () => {
    this.props.profileClear();
    this.props.newsClear();
    sessionStorage.clear();
    document.location.href = '/';
  }

  render() {
    return (
      <div className="header-menu">
        <h2 className='logo'>Neto Social</h2>
        {!this.props.profile
          ? <AuthorizationForm />
          : <div className="header-menu__wrap">
            <Profile />
            <button className='btn header- menu__btn btn_theme_red' onClick={this.onLogoutBtn}>Logout</button>
          </div>}
      </div>
    )
  }
}

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    profileClear: () => dispatch({ type: 'PROFILE_CLEAR' }),
    newsClear: () => dispatch({ type: 'NEWS_CLEAR' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenu)