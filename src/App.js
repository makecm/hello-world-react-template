import PropTypes from "prop-types";
import './App.css';
import Shapes from './components/shapes'

function App({ headline }) {
  return (
    <div className="App">
      <h1>{headline}</h1>
      <div className="shape-container">
        <Shapes />
      </div>
    </div>
  );
}

App.propTypes = {
  headline: PropTypes.string,
}

App.defaultProps = {
  headline: 'Hello World',
}

export default App;
