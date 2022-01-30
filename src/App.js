import Header, {Foot} from './content/Header'
import FrontImage from './content/FrontImage'
import Layout from './content/Layout.js'
import Content from './content/Content.js'
import useWindowDimensions from './functions/useWindowDimensions';



function App() {

  const { width } = useWindowDimensions();

  return (
    <div className="App" id='app'>
      <Header width={width} />
      <FrontImage width={width} />
      <Content width={width} />
      <Layout width={width} />
      <Foot />
    </div>
  );
}

export default App;
