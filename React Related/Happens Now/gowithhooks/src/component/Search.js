import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../App.css'

function Search() {
    const [search, setSearch] = useState('Coding');   //you can pass default search here if youu want, else see applied conditional below
    const [result, setResult] =useState([])

    // console.log(result)

    useEffect(()=>{
      const searchWiki = async()=>{
     const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
        params:{
          action: 'query',
          list: 'search',
          format: 'json',
          origin:'*',
          srsearch: search
        }     
      });
      setResult(data.query.search)
      
    }   
      if (search && !result.length) {
        searchWiki();
      } else {
        const settinTime = setTimeout(() => {
          if(search){
            searchWiki();     // using async and await directly with the function is not allowed, so we use a helper function
          } 
        }, 100);     
        
        return(()=>{
        clearTimeout(settinTime);
        })
      }
    }, [search, result.length])

    const renderResult = result.map(item => {
        return(
          <div key={item.pageid} className='item'>
                <div className='content'>
                    <div className='header'>
                        <h1>{item.title}</h1>
                    </div>
                    <span dangerouslySetInnerHTML={{ __html:item.snippet}}></span>
                    <div className='right floated content'>
                        <a href={`https://en.wikipedia.org/?curid=${item.pageid}`} className='ui button'>Take me to the Site... :)</a>
                    </div>
                </div>
          </div>
        )
    })

  return (
    <div>
        <div className='ui form'>
            <div className='field'>
                <label >Enter Your Search</label>
                <input className='input' value={search} onChange={(e)=>setSearch(e.target.value)}/>
            </div>
            <hr/>
            <div className='ui celled list'>
            {renderResult}
            </div>
        </div>
    </div>
  )
}

export default Search