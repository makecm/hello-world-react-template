import PropTypes from "prop-types";
import './App.css';
import Shapes from './components/shapes/shapes'
import Logos from './components/logos/logos'
import {ReactComponent as MakeLogo} from './logo.svg'
import {ReactComponent as ReactLogo} from './react-logo.svg'

function App({ headline, showLogos, backgroundImage }) {
  return (
    <div className="App" style={{ backgroundImage: `url('${backgroundImage}')` }}>
      {showLogos && (
        <Logos logoOne={<MakeLogo />} logoTwo={<ReactLogo />} />
      )}

      <h1>{headline}</h1>

      <div className="shape-container">
        <Shapes />
      </div>
    </div>
  );
}

App.propTypes = {
  headline: PropTypes.string,
  showLogos: PropTypes.string,
  backgroundImage: PropTypes.string,
}

App.defaultProps = {
  headline: 'Hello World',
  showLogos: true,
  backgroundImage: '',
}

export default App;
