import { useState, useMemo, React, useEffect} from 'react'
import './App.css'


const words = ["hello", "what", "is", "your", "name" ];
const Total_lines= 1000;
const Final_words = [];

for(let i=0; i<Total_lines; i++){
  let sentences="";
  for(let j=0; j<words.length; j++) {
    sentences+= words[Math.floor(words.length* Math.random())]
    sentences+= " "
  }
  Final_words.push(sentences);
} 
export function App() {

  const[sentences, setSentences] = useState(Final_words);
  const[ filter, setFilter] = useState ("");

  const filteredSentences = useMemo( ()=> {
     return sentences.filter (x=> x.includes(filter))
    }, [ filter, sentences])

  return (
    <>
      <input type="text" onChange={(e)=> {setFilter(e.target.value)}}/>
      {filteredSentences.map(word=> <div>{word}</div>)}
    </>
  )
}

export default App
