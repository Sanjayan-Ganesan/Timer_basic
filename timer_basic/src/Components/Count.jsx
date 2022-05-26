import React, { useEffect } from 'react'
import Countvalue from './Countvalue';

const Count = () => {


const[count,setCount] = React.useState(0);
const[starttimer,setstarttimer] = React.useState(false);
const[timerid,settimerid] = React.useState(0);
useEffect(()=>{
    let id = null;
    if(starttimer){
        id = setInterval(()=>{
            setCount(prev => prev += 1);
        },1000);


        settimerid(id);
    }else{
        clearInterval(timerid);
    }


    return ()=>{
        if(timerid != 0){
            clearInterval(timerid);
        }
    }

},[starttimer])





  return (
    <div>

<div>
<h1>Counter:</h1>
<Countvalue count={count}/>

<button onClick={()=>setstarttimer(true)}>Start</button>
<button onClick={()=>setstarttimer(false)}>Stop</button>

</div>


    </div>
  )
}

export default Count