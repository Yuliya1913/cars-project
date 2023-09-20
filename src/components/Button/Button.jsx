import PropTypes from 'prop-types';

export const Button = ({ disabled, children, onClick }) => {
  return (
    <button disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,

  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
