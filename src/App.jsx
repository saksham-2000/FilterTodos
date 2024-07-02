import { useRecoilValue, RecoilRoot, useRecoilState, useSetRecoilState } from "recoil";

import { filterAtom, filteredTodoAtom, todosAtom } from "./store/atoms/count"

/*
todos list app with input bar to filter based on a certain keyword
*/


function App() {

return <div>
  <RecoilRoot>
  <InputBar></InputBar>
  {/* <ToDo></ToDo> */}
  <FilterToDo></FilterToDo>
  </RecoilRoot>
  </div>
}

function InputBar(){
  const [filter,setFilter]=useRecoilState(filterAtom);
  return <input type="text" placeholder="Enter something" value={filter} onChange={function(event){
    setFilter(event.target.value);
  
  }}>
  </input>
}

function ToDo(){
  const [todos,setTodos]=useRecoilState(todosAtom);
console.log(todos);
  return <div> 
  {
    todos.map(function(todo){
      return <>
      <Box key={todo.key}>
      <h1>{todo.title}</h1>
      <h4>{todo.description}</h4>
      </Box>
      </>
    })
   }
   </div>
}

function FilterToDo(){
  const [filteredTodos,setFilteredTodos]=useRecoilState(filteredTodoAtom);
  //console.log(filteredTodos);
  return <div> 
  {
    filteredTodos.map(function(todo){
      return <>
      <Box key={todo.key}>
      <h1>{todo.title}</h1>
      <h4>{todo.description}</h4>
      </Box>
      </>
    })
   }
   </div>
}

function Box(props){
  return <div style={{
    border:"2px solid black",
    margin:"5px",
    padding: "2px"
  }}>
    {props.children}
  </div>
}




export default App;
