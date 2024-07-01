import React, {useState} from 'react'
import '../App.css'

const Tabs = () => {

    const [showTab,setShowtab] = useState(1)

    const tabHandler =(city) =>{
        setShowtab(city)
    }
  return (
   <>
   <div className='tabsection'>
   <h2>Tab change<br/><h5>(click here to change color and topic)</h5></h2>
    <div className='navbar'>
        <ul>
            <li onClick={()=>tabHandler(1)} className={showTab ===1? 'active' : ''} >Hyderbad</li>
            <li onClick={()=>tabHandler(2)} className={showTab ===1? 'active' : ''} >Banglore</li>
            <li onClick={()=>tabHandler(3)} className={showTab ===1? 'active' : ''} >Delhi</li>
            <li onClick={()=>tabHandler(4)} className={showTab ===1? 'active' : ''} >Mumbai</li>
        </ul>
    </div>
    <div className='content'>
        <div className={`tab1 ${showTab===1? 'active' : ''}`}>
            Hey I am in Hyderbad
        </div>
        <div className={`tab2 ${showTab===2? 'active' : ''}`}>
           Hey I am in Banglore
        </div>
        <div className={`tab3 ${showTab===3? 'active' : ''}`}>
            Hey I am in Delhi
        </div>
        <div className={`tab4 ${showTab===4? 'active' : ''}`}>
           Hey I am in Mumbai
        </div>
    </div>
   </div>
   </>
  )
}

export default Tabs
