import ImageEditor from './components/pages/ImageEditor';
import { Provider } from 'react-redux';
import store from './components/store';
import 'rc-slider/assets/index.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const App = () => (
  <div className="app">
    <Provider store={store}>
      <ImageEditor />
    </Provider>
  </div>
);

export default App;
