import { atom ,selector} from "recoil";

export const todosAtom = atom({
  key: "todosKey",
  default: [
    {
        key:"1",
      title: "Gym task #1",
      description: "Go to the gym from 8-9",
    },
    {
        key:"2",
      title: "Gym task #2",
      description: "Go to the gym from 9-10",
    },
    {
        key:"3",
      title: "Assignment task #1",
      description: "Do cohort2 assignment, week 7",
    },
  ],
});


export const filterAtom=atom({
    key: "filterKey",
    default: ""
})

export const filteredTodoAtom = selector({
    key: 'filteredTodoKey', // unique ID (with respect to other atoms/selectors)
    get: function({get}){
      const todos=get(todosAtom)
      const filter=get(filterAtom)

      //console.log(filter);

      if(filter=="")return todos;

      let todosFiltered=todos.filter(function(todo){
       return todo.title.includes(filter)|| (todo.description).includes(filter);
      })
  
      return todosFiltered;
    },
  });
  
