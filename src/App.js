import React from 'react';
import Publication from './components/publication'

const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";

const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

const PETER_IMAGE = "https://static.tvtropes.org/pmwiki/pub/images/mcu_peter_parker.png";

const SPIDER_IMAGE = "https://data1.ibtimes.co.in/en/full/629434/spider-man-homecoming.jpg";

const publications = [
  {
    id: 0,
    name: "Anakin skywalker",
    photo: ANAKIN_IMAGE,
    nickname: "@dart_vader",
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image: RAY_IMAGE,
    date: "26 черв.",
    
  },
  {
    id: 1,
    name: "Peter Parker",
    photo: PETER_IMAGE,
    nickname: "@spider-man",
    content: "May..I will to be a new captain?",
    image: SPIDER_IMAGE,
    date: "21 лип.",
    
  }
]

function App() {
  return (
    <div>
      {publications.map(publication => <Publication {...publication} key = {publication.id}/>)} 
    </div>
    
  );
}

export default App;
