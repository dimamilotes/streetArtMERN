import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Home() {
  const [post, setPost] = useState ([])
  
  useEffect(() => {getBlogPost()}, [])

  

  const getBlogPost = () => {
    axios.get ('/api')
      .then ((response) => {
        const data = response.data
        setPost(data)
        console.log ('Data has been received', data)
      }).catch((e)=> {
        console.log(e)
      })

  }

  const dynamicPostBg = (urlImg) => ({ 
    backgroundImage: `url(${urlImg})`,
    backgroundSize: 'cover'
  });

    return (
      <div className='main'>
        
        {
        post.map((p) => (
          
          <div className='HomePost' style={ dynamicPostBg(p.urlImg) } key={p._id}>
            <div className='postcontent'>
              <div className='contentBlock'>
                <h2>{p.title}</h2>
                <p className='postDescription'>{p.description}</p>
                <Link to={`/${p._id}`}><p>read more</p></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default Home;