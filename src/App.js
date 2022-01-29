import Header, {Foot} from './content/Header'
import Scroll from './content/Scroll'
import Info from './content/Info.js'
import Processor from './content/Processor.js'
import useWindowDimensions from './functions/useWindowDimensions';



function App() {

  const { width } = useWindowDimensions();

  return (
    <div className="App" id='app'>
      <Header width={width} />
      <Scroll width={width} />
      <Processor width={width} />
      <Info width={width} />
      <Foot />
    </div>
  );
}

export default App;
