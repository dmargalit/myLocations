import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Glyphicon } from 'react-bootstrap';

const Footer = () => {
  return (
    <div>
        <hr />
        <NavLink to="/categories">
          <Button bsSize="large">
            <Glyphicon glyph="th-list" />
          </Button>
        </NavLink>
        <NavLink to="/locations">
          <Button bsSize="large">
            <Glyphicon glyph="screenshot" />
          </Button>
        </NavLink>
    </div>
  );
}

export default Footer;