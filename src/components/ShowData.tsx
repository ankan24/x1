import { useEffect, useState } from "react"


function ShowData() {
        const [data , setData] = useState([]);
        const [show , setShow] = useState(false)
    
        useEffect(()=>{
            const fetchData =async()=>{
                const res =await fetch('https://jsonplaceholder.typicode.com/posts');
                const val =await res.json();
                console.log(val);
                setData(val);
            }
            fetchData()
        },[])
    return (
        <>
          {/* {
            data.map((item)=>{  
                return(
                <> 
                   <div>
                        <h3>{item.title}</h3>
                   </div>
                </>
                )
            })
          } */}


          <button onClick={()=>{setShow(true)}}>Show Data</button>
            {show ? (
                <div>
                    {
                        data.map((item)=>{
                            return <h1>{item.title}</h1>
                        })
                    }
                </div>
            ): null
            }
        </>
    )
}

export default ShowData