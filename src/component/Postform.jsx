import React, {useState, useEffect}from 'react'

 function Postform() {
     const [title, setTitle] = useState("")
     const [body, setBody] = useState("")
     
     const setter = set => e => {
        const { target } = e;
        const { value } = target;
        set(value);
      };
      const onSubmit = (e)=>{
          e.preventDefault()
        const post={
           
            title:title,
            body:body,
        }
        fetch("http://jsonplaceholder.typicode.com/posts",{
            method:"POST",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data=>console.log(data))
      }
    return (
        <div>
            <h1>Add Post</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label> Title: </label><br/>
                    <input type="text" name="title" value={title} onChange={setter(setTitle)}/>
                </div>
                <div>
                    <label> Body: </label><br/>
                    <input type="text" name="body" value={body} onChange={setter(setBody)}/>
                </div>
                <button type='submit'>submit</button>
            </form>
            
        </div>
    )
}

export default Postform