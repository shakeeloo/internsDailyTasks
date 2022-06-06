import React,{useState} from 'react'
import Convert from './Convert';
import DropDown from './DropDown'

const options =[
    {
        label:'African',
        value:'af'
    },
    {
        label:'Arabic',
        value:'ar'
    },
    {
        label:'Hindi',
        value:'hi'
    },
    {
        label:'Urdu',
        value:'ur'
    },
    {
        label:'Pashto',
        value:'ps'
    }
]
function Translate() {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('')
  return (
    <div>
        <div className='ui form'>
            <div className='field'>
                <label>Enter Text</label>
                <input value={text} onChange = {(e)=> setText(e.target.value)} />
            </div>
        </div>
    <DropDown 
    label= 'Select a Language'
     selected = {language} 
     onSeletedChange = {setLanguage} 
     options ={options}/>
     <hr/>
     <h3 className='ui header'>Input</h3>
     <Convert text = {text} language ={language}/>
     </div>
     
  )
}

export default Translate