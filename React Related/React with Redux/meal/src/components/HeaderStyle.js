import styled from 'styled-components'

export const APP_ID = '816960eb';
export const APP_KEY = 'cbe8883f9583ae53c032525d72ed9afb'
export const Container = styled.div`
display:flex;
flex-direction:column
`
export const Header = styled.div`
color:white;
background-color:black;
padding:20px;
font-size:25px;
font-weight:bold;
box-shadow:0 3px 6px 0 #555;
display:flex;
justify-content:space-between;
`
export const AppName = styled.div`
display:flex;
align-items:center;
`
export const AppIcon = styled.img`
width:60px;
height:6vh;
`
export const Searchicon = styled.img`
width:40px;
height:6vh;
background-color:white;
`
export const Input = styled.input`
border:none;
outline:none;
font-size:16px;
foct-weight:bold;
`
export const SearchInput = styled.div`
display:flex;
box-shadow:0 3px 6px 0 #555;
background-color:white;
padding: 5px 8px;
border-radius:10px;
`
export const RecipeListContainer = styled.div`
padding:30px;
display:flex;
display-direction:row;
flex-wrap:wrap;
gap:25px;
`
export const RecipeContainer = styled.div`
display:flex;
flex-direction:column;
padding:10px;
box-shadow:0 3px 10px 0px #aaa;
justify-content:stretch;
`
export const RecipeImg = styled.img`
width:280px;
height:250px
`
export const RecipeName = styled.h3`
`
export const IngButton = styled.button`
border:1px solid green;
background-color:transparent;
padding:10px 0px;
margin-bottom:5px;
border-radius:5px;
color:green;
font-weight:bold
`
export const RecButton = styled.button`
border:1px solid red;
background-color:transparent;
padding:10px 0px;
border-radius:5px;
color:red;
font-weight:bold
`