import React from 'react';
import { connect } from 'react-redux';
import { changeInputValue } from '../../actions/actionsCreaters';
import { authentication } from '../../actions/actionsCreaters';

class AuthorizationForm extends React.Component {
  onInputValue = (event) => {
    const { name, value } = event.target;
    this.props.chageInputValue(name, value);
  }

  onLoginSubmit = () => {
    const { authenticationData } = this.props;
    this.props.submitData('http://localhost:7070/auth', authenticationData)
  }

  render() {
    const { authenticationData } = this.props
    // console.log(this.props)

    return (
      <form className='authentication'>
        <input type="text" name='login' className="input authentication__input"
          placeholder='Username' onChange={this.onInputValue} value={authenticationData.login} />
        <input type="text" name='password' className="input authentication__input"
          placeholder='Password' onChange={this.onInputValue} value={authenticationData.password} />
        <button type='button' className='btn btn_theme_green authentication__btn' onClick={this.onLoginSubmit}>Login</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  const { authenticationState } = state;
  return { authenticationData: authenticationState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    chageInputValue: (name, value) => dispatch(changeInputValue(name, value)),
    submitData: (url, authenticationData) => dispatch(authentication(url, authenticationData))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationForm)