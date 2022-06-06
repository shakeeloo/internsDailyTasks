import React,{useState,useReducer} from 'react';
import Todo from './component/Todo';
// import './App.css';
// import Route from './component/Route';
// import DropDown from './component/DropDown';
// import Translate from './component/Translate';
// import Accordion from './component/Accordion';
// import Search from './component/Search';
// import Header from './component/Header';

// const items = [
//   {
//     title:'What is React',
//     content:'React is JavaScript Library used to build UIs'
//   },
//   {
//     title:'Why React',
//     content:'React is Recommended by most of the engineers'
//   },
//   {
//     title:'How to use React',
//     content:'React Can be used by Creating Components'
//   }
// ]

// const options = [
//   {
//     label:'Color Red',
//     value:'red'
//   },
//   {
//     label:'Color Green',
//     value:'green'
//   },
//   {
//     label:'Color Yellow',
//     value:'yellow'
//   },
//   {
//     label:'Color Blue',
//     value:'blue'
//   }
// ]

// function App() {
//   const [selected, setSelected] = useState(options[0])
//   return (
//     <div className="App">
//       <Header/>
//      <Route path='/'>
//        <Accordion items={items}/>
//      </Route>
//      <Route path='/Search'>
//        <Search/>
//      </Route>
//      <Route path='/DropDown'>
//        <DropDown
//        label='Select a Color'
//        options={options}
//        selected = {selected}
//        onSeletedChange = {setSelected}/>
//      </Route>
//      <Route path='/Translate'>
//        <Translate/>
//      </Route>
//      </div>
//   );
// }

// export default App;

// // AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

            //Here Goes lil practice of useReducer Hook
export const ACTIONS = {
  ADD_TODO : 'add-todo',
  TOGGLE_TODO : 'toggle-todo',
  DELETE_TODO : 'delete-todo'
}
function reducer(gofor,action){
  switch (action.type) {
    case ACTIONS.ADD_TODO:
        return [...gofor, newTodo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO:
        return gofor.map((todo)=>{
          if(todo.id === action.payload.id){
            return{...todo,complete:!todo.complete}
          }
          return todo;
        })
    case ACTIONS.DELETE_TODO:
        return gofor.filter(todo=>todo.id !== action.payload.id);    
    default:
      return gofor;
  }
}
function newTodo(name){
  return{id:Date.now(), name: name, complete:false}
}
function App() {
  const [gofor, dispatch] = useReducer(reducer, [])
  const [name,setName] = useState('')

  function handerChange(e){
    e.preventDefault()
    dispatch({type: ACTIONS.ADD_TODO, payload: {name:name}})
    setName('')
  }
    return (
      <React.Fragment>
            <form onSubmit={handerChange} className='ui form'>
               <div className='field'>
                 <label className='center'>Enter Your Task.....</label>
                  <input type='text' value={name} onChange= {(e)=>setName(e.target.value)}></input>
               </div>

            </form>
            {gofor.map(todo=>
              <Todo key={todo.id} todo = {todo} dispatch = {dispatch}/>
            )}
      </React.Fragment>
    )
}

export default App