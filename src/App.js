import Header, {Foot} from './content/Header'
import Scroll from './content/Scroll'
import Info from './content/Info.js'



function App() {
  return (
    <div className="App" id='app'>
      <Header />
      <Scroll />
      <Info />
      <Foot />
    </div>
  );
}

export default App;
