import './App.css';

import Location from './components/Location';

import Logo from './assets/logo.jpg'



function App() {  
  return (
    <section className='container'>
      <figure className='logo'>
        <img src={Logo} alt="RM" />
      </figure>
      <Location />           
    </section>
  );
}

export default App;
