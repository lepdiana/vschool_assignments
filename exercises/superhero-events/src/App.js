import React from 'react';
import HeroList from './HeroList'


const App = () => {
  const alert = (catchPhrase) => {alert(catchPhrase)}
  return (
    <div>
      <HeroList alert={alert}/>
    </div>
  );
}

export default App;
