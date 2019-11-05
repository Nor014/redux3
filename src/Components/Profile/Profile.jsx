import React from 'react';
import { connect } from 'react-redux';
import { getProfile } from '../../actions/actionsCreaters'

class Profile extends React.Component {
  componentDidMount = () => {
    this.props.getProfile()
  }

  render() {
    const { profile } = this.props.profile

    return (
      <div className="profile">
        <p className="profile__wellcome">Hello, {profile.name}</p>
        <div className="profile__avatar">
          <img src={profile.avatar} alt="Аватар" />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { profileState } = state;
  return { profile: profileState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProfile: () => dispatch(getProfile())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)