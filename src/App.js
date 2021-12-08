import './App.css'
import Square from './components/Square'
import CapsLock from './components/Capslock'
function App() {

  return (
    <>
      <Square />      
      <Square  background='blue'/>      

      <CapsLock texto='Me deixe em caps' />
    </>
  );
}



export default App;
