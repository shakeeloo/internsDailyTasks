import React, { useState, useEffect, useRef } from 'react'

function DropDown({label, options,selected,onSeletedChange}) {
    const [open, setOpen] = useState(false)
      const ref = useRef();
      useEffect(()=>{
        const onBodyClick=(event)=>{
          if (ref.current.contains(event.target)) {
            return;
          }
          setOpen(false);
        }
        document.body.addEventListener('click', onBodyClick);

        return ()=>{
          document.body.removeEventListener('click', onBodyClick)
        }
      },[])
      const renderOptions = options.map(option=>{
      if (option.value===selected.value) {
        return null;
      }
        return(          
              <div key={option.value}
              className='item'
              onClick={()=>onSeletedChange(option)}>
              {option.label}
            </div>
        )
    })

  return (
    <div ref={ref} className='ui form'>
      <div className='field'>
        <label>
          {label}
        </label>
        <div onClick={()=>{setOpen(!open)}} className={`ui selection dropdown ${ open ?'visible active':''}`}>
          <i className='dropdown icon'></i>
          <div className='text'>{selected.label}</div>
          <div className={`menu ${ open ? 'visible transition':''}`}>
          {renderOptions}
          </div>
        </div>
      </div>
      {/* <div style={{color:`${selected.value}`}}>The Text Color is {selected.value}</div> */}
    </div>
  )
}

export default DropDown