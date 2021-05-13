import React, { useState } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import AddBox from '../components/AddBox';
import Scroll from "../components/Scroll";
import testJson from './1.json';

function App() {

  const testArray = testJson.map(json => { return [json.name].toString() })
  const [robots, setRobots] = useState(testArray);
  const [searchfield, setSearchfield] = useState('');
  const [formData, setFormData] = useState('');
  const [isExsited, setIsExsited] = useState(true);
  const [isEmpty, setEmpty] = useState(true);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const onAddChange = (event) => {
    setFormData(event.target.value);
  }

  const isFlag = (formData) => {
    let i = robots.length;
    while (i--) {
      if (robots[i] === formData) {
        return false;
      }
    }
    return true;
  }

  const handleAdd = () => {
    if ((formData !== '') && isFlag(formData)) {
      robots.unshift(formData);
      setRobots(robots);
      setFormData('');
      setEmpty(true);
      setIsExsited(true);
      fetch(
        // url,
        {
          method: 'POST',
          body: JSON.stringify(formData),
        }
      )
        .then(res => res.json())
        .then(res => {
          console.log(res);
        })
    }
    else if (formData === '') {
      setEmpty(false)
    }
    else if (!isFlag(formData)) {
      setIsExsited(false);
    }
  };

  const filteredRobots = robots.filter(item => {
    return item.includes(searchfield)
  })

  if (robots.length === 0) {
    return <h1>Loading</h1>
  }
  else {
    return (
      <div className="tc">
        <h1>Robots</h1>
        <SearchBox searchChange={onSearchChange} />
        <AddBox addChange={onAddChange} value={formData} />
        <button
          style={{ height: '30px', marginBottom: '10px' }}
          type='button'
          onClick={handleAdd}
        >
          Add
        </button>
        <div >
          <label hidden={isExsited} style={{ color: 'red', fontSize: '16' }}><p>添加失败！Robot已存在！</p></label>
          <label hidden={isEmpty} style={{ color: 'red', fontSize: '16' }}><p>添加不能为空！</p></label>
        </div>
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}
export default App;

