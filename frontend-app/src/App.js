
import Welcome from './Welcome';
import Cute from './Cute.png';
import Jude from './Jude.jpg';
import React, { useState, useEffect } from 'react';

function App() {
  const [dog, setDogImage] = useState('');
  
  const fetchDogImage = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setDogImage(data.message);
    } catch (error) {
      console.error('Error something went wrong', error);
    }
  };

  useEffect( () =>{
    fetchDogImage();
  }, []);


  //New
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => setData(data));
  }, []);
  //Old 
  return (
    <div>
      <h1>Rand dog</h1>
      <img id = "dog src" src={dog} alt="Rand dog" style={{
        maxWidth: '300px'
      }} />
      <button id="fetchButton" onClick={(fetchDogImage)} > Fetch Doggo </button>
      
      <h1>Posts</h1>
      {data.map(post => (
      <div key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      </div>
      ))}
       < Welcome />
       <div style={{ display: 'flex', gap: '5px'}}>
       <div
          style={{
              width: '500px',
              height: '500px',
              backgroundImage: `url(${Cute})`,
              backgroundSize: 'cover'
          }}
          ></div>
          <div
          style={{
              width: '500px',
              height: '500px',
              backgroundImage: `url(${Jude})`,
              backgroundSize: 'cover'
          }}
          ></div>   
       </div>
       <div style={{ display: 'flex', gap: '5px'}}>
          <ul>
            <li>DOG</li>
            <li>TIGER</li>
            <li>Lion</li>
          </ul>

          <ol>
            <li>Burger</li>
            <li>Taco</li>
            <li>Burrito</li>
          </ol>

       </div>
    </div>

  );
}

export default App;
