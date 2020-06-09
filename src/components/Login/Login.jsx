import React from "react";
import { reduxForm, Field } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validator";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import s from "./../common/FormsControls/FormsControls.module.css";

const LoginForm = ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="login" component={Input} type="text" placeholder='Login' validate={[required]} />
      </div>
      <div>
        <Field name="password" component={Input} type="password" placeholder='Password' validate={[required]} />
      </div>
      <div>
        <Field name="rememberMe" component={Input} type="checkbox" /> remember me
      </div>
      {
        error && <div className={s.formSummaryError}>{error}</div>
      }
      <div>
        <button>Log in</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    const { login, password, rememberMe } = formData;
    props.login(login, password, rememberMe);
  }

  if (props.isAuth) {
    return <Redirect to='/profile' />
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, { login })(Login);