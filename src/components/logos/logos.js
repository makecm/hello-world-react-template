import PropTypes from "prop-types";
import './logos.css'

function Logos({ logoOne, logoTwo }) {
  return (
    <div className="logos">
      {logoOne}
      <div class="seperator" />
      {logoTwo}
    </div>
  );
}

Logos.propTypes = {
  headline: PropTypes.string,
  showLogo: PropTypes.bool,
  backgroundImage: PropTypes.string,
}

Logos.defaultProps = {
  headline: 'Hello World',
  showLogo: true,
  backgroundImage: '',
}

export default Logos;
