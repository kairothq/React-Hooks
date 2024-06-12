import React from "react"
import {useState} from "react"
import {memo} from "react"

function app(){

  const [title,setTitle] = useState("my name is harkirat");

  function appload(){
    setTitle("my Name is " + Math.random());
  }

  return (
    <div>
    <button onClick={appload}> Click me to change the title </button>
    <Header title = {title} > </Header>
    <Header title = "Harkirat 2"> </Header>
    <Header title = "Harkirat 2"> </Header>
    <Header title = "Harkirat 2"> </Header>
    </div>
  )
}

const Header = memo(function ({title})
{
  return (
    <div> {title} </div> 
  )
})

export default app