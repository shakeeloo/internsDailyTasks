import React, { useState } from 'react'
import axios from 'axios'
import './index.css'
import { Header,Container,AppName,AppIcon,Searchicon,SearchInput,Input,
  RecipeListContainer, 
  RecipeContainer,APP_ID, APP_KEY} from './components/HeaderStyle.js'
import './components/HeaderStyle.css'
// import FiSearch from 'react-icons/fi'

function App(){
  const [timeoutId, setTimeoutId] = useState()

  const fetchRecipe = (searchThis) => {
    axios.get(`https://https://api.edamam.com/search?q=${searchThis}&app_id=${APP_ID}&app_key=${APP_KEY}`)
  }
  const onTextChange = (e) => {
    clearTimeout(timeoutId)
    const timeout = setTimeout(() => {
      fetchRecipe(e.target.value)
    }, 500);
    setTimeoutId(timeout)
  }
  return(
    <Container className='container'>
         <Header className='header'>
            <AppName className='appname'>
                <AppIcon className='appicon' src='../asset/1573965457cake.png' alt='cake'/>
                    Find Recipe
                </AppName>
             <SearchInput className='searchinput'>
                <Searchicon className='searchicon' src='../asset/search.png' alt='search'/>
                <Input
                    className='input'
                    type='text'  
                    placeholder='Search a Recipe'
                    onChange={onTextChange}
                    >
                </Input>
            </SearchInput>
        </Header>
        <RecipeListContainer className='recipelistcontainer'>
           <RecipeContainer />
           <RecipeContainer />
           <RecipeContainer />
        </RecipeListContainer> 
    </Container>
  )
}

export default App;

