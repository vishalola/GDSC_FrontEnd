import { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {

  return (

    <div>
      <Link to="/first"><button >
        First
      </button></Link>
      <Link to="/second">
      <button>
        Second
      </button>
      </Link>
    </div>
  );
}

export default App;
