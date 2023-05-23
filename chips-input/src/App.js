
import 'bootstrap/scss/bootstrap.scss'
import logo from './github.svg'
import './App.css'
import { useState } from 'react';

function App() {

  const [searches,setSearches] = useState([]);
  const [query, setQuery] = useState("");

  const updateQuery = ({ target }) => {
    // Update query onKeyPress of input box
    setQuery(target.value)
  }

  const keyPressed = ({ key }) => {
    // Capture search on Enter key
    if (key === "Enter") {
      if(query.length>0)
      {
        setSearches(searches => [...searches, query]);
        updateQuery({target:{value:""}});
      }
    }
  }

  const removeSearch = (e) =>{
    const tempSearches = [...searches];
    // removing the element using splice
    tempSearches.splice(e, 1);
    // updating the list
    setSearches(tempSearches);
 }
  return (
    <div class="container-fluid">
              <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom border-info">
                <div class="row">
                  <div class="col text-center p-1">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </div>
                  <div class="col-10 text-center">
                  <h3>Chips Input</h3>
                  </div>
                  <div class="col p-1">
                  <a class="navbar-brand" target="_blank" href="https://github.com/krishaccot-av/chips-input">
                    <img src={logo} alt="" />
                  </a>
                  </div>
                </div>
              </nav>
              <div class="row p-4">
                <div class="mb-3 col"></div>
                <div class="mb-3 col-8">
                    <input type="text" 
                    class="form-control" 
                    id="exampleFormControlInput1" 
                    placeholder="Type & hit Enter" 
                    onChange={updateQuery} 
                    onKeyDown={keyPressed} value={query}/>
                </div>
                <div class="mb-3 col"></div>
              </div>
    
              <div>{searches.map((query, i) => (
                <div class="chip m-1" key={query + i}>{query}
                  <button class="border-0" onClick={() => removeSearch(i)}> x </button>
                </div>))}
              </div>
    </div>
  );
}

export default App;
