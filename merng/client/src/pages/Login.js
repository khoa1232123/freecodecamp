import { useMutation } from '@apollo/react-hooks';
import React, { useContext, useState } from 'react';
import { Button, Form, Grid, Message } from 'semantic-ui-react';
import { AuthContext } from '../context/auth';
import { LOGIN_USER } from '../graphql';
import { useForm } from '../utils';

const Login = (props) => {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const initialState = {
    username: '',
    password: '',
  };

  const { onChange, onSubmit, values } = useForm(funLoginUser, initialState);

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, { data: { login: userData } }) {
      context.login(userData);
      props.history.push('/');
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  function funLoginUser() {
    loginUser();
  }

  return (
    <Grid columns="equal">
      <Grid.Column></Grid.Column>
      <Grid.Column width={8}>
        <Form
          onSubmit={(e) => onSubmit(e)}
          className={loading ? 'loading' : ''}
        >
          <h1>Register</h1>
          <Form.Input
            label="Username"
            placeholder="Username..."
            name="username"
            type="text"
            error={errors.username ? true : false}
            value={values.username}
            onChange={onChange}
          />
          <Form.Input
            label="Password"
            placeholder="Password..."
            name="password"
            type="password"
            error={errors.password ? true : false}
            value={values.password}
            onChange={onChange}
          />
          <Button type="submit" primary>
            Login
          </Button>
        </Form>
        {Object.keys(errors).length > 0 &&
          Object.values(errors).map((value) => (
            <Message color="red" key={value}>
              {value}
            </Message>
          ))}
      </Grid.Column>
      <Grid.Column></Grid.Column>
    </Grid>
  );
};

export default Login;
