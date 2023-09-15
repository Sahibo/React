import React, { useState } from "react";
import PropTypes from 'prop-types'

function Footer({info, setInfo}) {

    return (
      <footer>
        <h2 onClick={setInfo}>{info}</h2>
      </footer>
    );
  
}

export default Footer;