import React, { useState } from 'react'

import '../App.css';

const Toggle = () => {

    const [view, setView] = useState(false)
    const [view2, setView2] = useState(false)
    const [view3, setView3] = useState(false)
    const [view4, setView4] = useState(false)
    const viewTopic =() =>{
       setView(!view)
    }
    const viewTopic2 =() =>{
        setView2(!view2)
     }
     const viewTopic3 =() =>{
        setView3(!view3)
     }
     const viewTopic4 =() =>{
        setView4(!view4)
     }
  return (
    <>
    <div className='maintogglebox'>
    <h2>Toggle Effect<br/><h5>(click on it to open the defination)</h5></h2>
    <div className='toggleeffect'>
         <h3 onClick={viewTopic}>What is React JS?</h3>
         {view &&  <h5>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.</h5> }
    </div>
    <div className='toggleeffect'>
         <h3 onClick={viewTopic2}>What is JavaScript?</h3>
         {view2 &&  <h5>JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node. js, Apache CouchDB and Adobe Acrobat.</h5> }
     </div>
    <div className='toggleeffect'>
         <h3 onClick={viewTopic3}>What is Bootstrap?</h3>
         {view3 &&  <h5>Bootstrap is a free, open source front-end development framework for the creation of websites and web apps. Designed to enable responsive development of mobile-first websites, Bootstrap provides a collection of syntax for template designs.</h5> }
    </div>
    <div className='toggleeffect'>
        <h3 onClick={viewTopic4}>What is HTML?</h3>
         {view4 &&  <h5>HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page. HTML consists of a series of elements. HTML elements tell the browser how to display the content.</h5> }
     </div>
    </div>
    </>
  )
}

export default Toggle
