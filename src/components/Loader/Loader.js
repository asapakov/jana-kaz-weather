import React from 'react';
import PropTypes from 'prop-types';
import gif from '../../assets/27-globe-flat.gif'

export const Loader = (props) => {
  const { show = false } = props;

  return (
    show && (
        <div style={{textAlign: 'center'}}>
          <img src={gif} alt="Loading..." width={100}/>
        </div>
    )
  );
};

Loader.propTypes = {
  show: PropTypes.bool.isRequired,
};
