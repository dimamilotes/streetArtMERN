import React, {useState }from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";

function AddPost() {

  const [form, setForm] = useState ({})
  const [red, setRed] = useState (false)


  // console.log ('обновили стейт',form)
  

  const handleChande = (event) => {
    const target = event.target
    const name = target.name
    const value = target.value

   setForm ( prev => {
     return {...prev,
      [name]: value
    }
     
    })
  }


  const submit = () => {
    
    axios ({
      url: '/api/save',
      method: 'POST',
      data: form,
    }) 
      .then (() => {
        // this.getBlogPost()
        console.log ('Данные отправлены на сервер')})
      .catch (() => {console.log ('Ошибка отправки данных на сервер')})

  }
  let history = useHistory ()
  
    return (
      
      <div className='container'>
        <div className="postBox">
          <h3 className='postTitle'>Create a new post</h3>
          <form className='postForm' onSubmit={submit}>
            <input type='text' name='title' placeholder='Post header' onChange={handleChande}/>
            <input type='text' name='description' placeholder='Post description'onChange={handleChande}/>
            <textarea name='body' placeholder='Post body' onChange={handleChande}/>
            <input type='text' name='urlImg' placeholder='Post image' onChange={handleChande}/>
            <input type='text' name='link' placeholder='add link to author instagram or another site' onChange={handleChande}/>
            
            <button type='onSubmit' onClick={()=> {history.push ('/')}} className='btn btnBlue'>save post</button>
          </form>
          
        </div>
      </div>
    );
  }
  
  export default AddPost;