import { useMutation } from '@apollo/react-hooks';
import React, { useContext, useState } from 'react';
import { Button, Form, Grid, Message } from 'semantic-ui-react';
import { AuthContext } from '../context/auth';
import { REGISTER_USER } from '../graphql';
import { useForm } from '../utils';

const Register = (props) => {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const initialState = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const { onChange, onSubmit, values } = useForm(registerUser, initialState);

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(_, { data: { register: userData } }) {
      context.login(userData);
      props.history.push('/');
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  function registerUser() {
    addUser();
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
            label="Email"
            placeholder="Email..."
            name="email"
            type="email"
            error={errors.email ? true : false}
            value={values.email}
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
          <Form.Input
            label="ConfirmPassword"
            placeholder="ConfirmPassword..."
            name="confirmPassword"
            type="password"
            error={errors.confirmPassword ? true : false}
            value={values.confirmPassword}
            onChange={onChange}
          />
          <Button type="submit" primary>
            Register
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

export default Register;
