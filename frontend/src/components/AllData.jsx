import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const AllData = () => {

 const [list , setList] = useState([])

        const fetchData = async()=>{
            await axios.get("http://localhost:2000/item")
            .then((res)=> setList(res.data));
        }

        useEffect(()=>{
            fetchData()
        },[])

        // console.log(list);
        

  return (
    <div>
        {
            list.map((item)=>{
                
                return(
                
                <>
                <p>{item?.date}</p>
                <p>{item?.amount}</p>
                <p>{item?.description}</p>
                </>
                )
            })
        }
    </div>
  )
}
