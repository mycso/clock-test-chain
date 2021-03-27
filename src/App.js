
import './App.css';
import MiniClock from './miniClock.js'
import BigClock from './bigClock.js'


function App() {

  return (

    <div className="ClockApp">
        {/** Paris GMT **/}
        <div className="Clock"> <MiniClock clocktime={new Date()}  timeZone={+1} title="Paris"/></div>
        
        {/** London GMT **/}
        <div className="MainClock"> <BigClock clocktime={new Date()}  timeZone={0} title="London"/></div>
        
        {/** Beijing GMT **/}
        <div className="Clock"> <MiniClock clocktime={new Date()}  timeZone={+8} title="Beijing"/></div>
    </div>
  );
}

export default App;
