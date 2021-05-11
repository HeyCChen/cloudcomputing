import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import AddBox from '../components/AddBox';
import Scroll from "../components/Scroll";
// import testjson from './1.json';

function App() {

  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');
  const [formData, setFormData] = useState('');
  const [isAdding, SetIsAdding] = useState(false);

  useEffect(
    () => {
      // setRobots(testjson);
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then(response => {
          response.json()
            .then(users =>
              setRobots(users)
            );
        })
    },
    [isAdding]
  );

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };
  const onAddChange = (event) => {
    setFormData(event.target.value);
  }

  const handleAdd = () => {
    SetIsAdding(true);
    fetch(
      // url,
      {
        method: 'post',
        body: JSON.stringify(formData),
      }
    )
      .then(res => res.json())
      .then(res => {
        SetIsAdding(false);
      })
  }

  const filteredRobots = robots.filter(robots => {
    return robots.name.toLowerCase().includes(searchfield.toLowerCase())
  })

  if (robots.length === 0) {
    return <h1>Loading</h1>
  }
  else {
    return (
      <div className="tc">
        <h1>Robots</h1>
        <SearchBox searchChange={onSearchChange} />
        <AddBox addChange={onAddChange} />
        <button
          style={{ height: '30px', marginBottom: '10px' }}
          type='button'
          onClick={handleAdd}
        >
          {isAdding ? 'Adding' : 'Add'}
        </button>
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}
export default App;

