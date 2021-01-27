import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';
import { AuthContext } from '../context/auth';

const MenuBar = () => {
  const { user, logout } = useContext(AuthContext);
  const pathname = window.location.pathname;
  const path = pathname === '/' ? 'home' : pathname.substr(1);

  const [activeItem, setActiveItem] = useState(path);

  const menuBar = user ? (
    <Menu secondary pointing size="massive" color="teal">
      <Container>
        <Menu.Item name={user.username} active as={Link} to="/" />
        <Menu.Menu position="right">
          <Menu.Item name="logout" onClick={logout} />
        </Menu.Menu>
      </Container>
    </Menu>
  ) : (
    <Menu secondary pointing size="massive" color="teal">
      <Container>
        <Menu.Item
          name="home"
          active={activeItem === 'home'}
          onClick={(e, { name }) => setActiveItem(name)}
          as={Link}
          to="/"
        />
        <Menu.Item
          name="messages"
          active={activeItem === 'messages'}
          onClick={(e, { name }) => setActiveItem(name)}
          as={Link}
          to="/"
        />
        <Menu.Menu position="right">
          <Menu.Item
            name="login"
            active={activeItem === 'login'}
            onClick={(e, { name }) => setActiveItem(name)}
            as={Link}
            to="/login"
          />
          <Menu.Item
            name="register"
            active={activeItem === 'register'}
            onClick={(e, { name }) => setActiveItem(name)}
            as={Link}
            to="/register"
          />
        </Menu.Menu>
      </Container>
    </Menu>
  );

  return menuBar;
};

export default MenuBar;
