import React ,{useState} from 'react'
import { ListGroup } from 'react-bootstrap'
import { adatok } from './data.js'

export const Todo=()=> 
 {
  const [newTodo,setnewTodo] = useState('')
  const [todos,setTodos] = useState(adatok)


const handleAdd=()=> {
  console.log('klikk',newTodo)
  setTodos([...todos,newTodo])
}

const handleDelete=(val)=> {
  console.log('törlés',val)
  const newArr=todos.filter(item=>item!=val)
  setTodos(newArr)
}
console.log(todos)

const handleDone = (obj)=> {
  obj.nextElementSibling.classList.toggle('text-decoration-line-through')
}


  
  return (
    <div className='todo'>
        <h1 className='text-center'>Az én tennivalóim</h1>
        <form className='d-flex justify-content-evenly m-1'>
          <input type="text" value={newTodo} onChange={(e)=>setnewTodo(e.target.value)} />
          <i className='fa-regular fa-square-plus fa-2x p-2 text-success ' onClick={handleAdd}></i>
          <i className='fa-solid fa-trash fa-2x p-2 text-danger' onClick={()=>setTodos([])}></i>
        </form>
        <ListGroup>
          {todos.map(item=>
          <ListGroup.Item key={item} className="d-flex justify-content-between">
            <i className="fa-solid fa-check   fa-2x " onClick={handleDone}></i>
            <span className='text-decoration-line-through'>{item}</span>
            <i className="fa-solid fa-trash text-danger  fa-2x" onClick={(e)=>handleDelete(e.target)}></i>
            </ListGroup.Item>)}
        </ListGroup>
        
    </div>
  )
}