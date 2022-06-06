import React, {useState} from 'react'
import '../App.css';
// import {RiArrowDropDownLine} from 'react-icons/ri' 

function Accordion({items}) {
  const [activeIndex, setActiveIndex] = useState(null)
  const onTitleClick = (index) => {
    setActiveIndex(index)
  }
  const itemRender = items.map((item,index)=>{
    const active = index=== activeIndex? 'active':'';
    return(
      <React.Fragment key={item.title}>
        <div 
          className={`title ${active}`}
          onClick={()=> onTitleClick(index)}  
          >
        {/* <RiArrowDropDownLine  className='dropdown icon'/> */}
        <i className='dropdown icon'></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          {item.content}
        </div>
    </React.Fragment>
    )
  })
  return (
    <div className='ui styled accordion'>
      {itemRender}
    </div>
  )
}

export default Accordion