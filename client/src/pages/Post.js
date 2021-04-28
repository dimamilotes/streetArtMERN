import React, {useState, useEffect} from 'react'
import axios from 'axios'


function Post({match}) {

  const [onePost, setOnePost] = useState ({})
    
  useEffect(() => {getData() }, [])

  const getData = () => {
       axios ({
            url: '/api/post',
            method: 'POST',
            data: {_id: match.params.id}
        }) 
            .then ((data) => {
            
            // console.log ('post data',data)
            setOnePost(data.data)
            })
            .catch (() => {console.log ('Ошибка отправки данных на сервер')})
  }

  
  const dynamicPostBg2 = () => ({ 
    backgroundImage: `url(${onePost.urlImg})`,
    
  });

    return (
      <div className='pagepost'>

            <div className='pagepostContent'>

              <div className='pagepostContentBlock'>
                      <h2>{onePost.title}</h2>
                      <p className='fullText'>{onePost.body}</p>
                      {(onePost.link) ? <a href={onePost.link} className='pageLink'> View all works</a>: null}
              </div>

            </div>

            <div className='postImgBg' style={dynamicPostBg2()}>
                
            </div>

      </div>
    );
  }
  
  export default Post;