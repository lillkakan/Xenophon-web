import Header, {Foot} from './content/Header'
import FrontImage from './content/FrontImage'
import Layout from './content/Layout.js'
import Content from './content/Content.js'
import Sources from './content/Sources'
import useWindowDimensions from './functions/useWindowDimensions';



function App() {

  const { height, width } = useWindowDimensions();

  return (
    <div className="App" id='app'>
      <Header width={width} />
      <FrontImage width={width} />
      <Content width={width} height={height} />
      <Layout width={width} height={height}  />
      <Sources />
      <Foot />
    </div>
  );
}

export default App;
