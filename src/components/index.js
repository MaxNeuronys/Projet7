import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

export {default as Header} from './header/Header'
export {default as Details} from './details/Details'
export {default as MapContainer} from './map/MapContainer'
export {default as Map} from './map/Map'
