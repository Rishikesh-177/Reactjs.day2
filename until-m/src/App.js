

import './App.css';
import Invitation from './Invitation/invitation';

function App() {
  return (
    <div className="App">
      <Invitation 
      subject = "Birthday party Invitation"
      location = "Green Field Avenue"
      email = "jaGdish@gmail.com"
      to = "jaGdish"
      attendee = {[ "Ritu", "Saurabh" , "Kartik"]}
      backgroundColor= "f7d794"
      textColor = "#000"
     />
    </div>
  );
}

export default App;
