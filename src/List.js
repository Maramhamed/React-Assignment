import { slice } from "lodash";
import { useState } from "react";

const  List =({List})=> {
const [arr,setArr]= useState(List)
const deletehandler = ()=> {
    setArr(arr,slice(0, -1));
}
return   <>


<table>
<tr>  <th>Name:</th>  <th>Age:</th> </tr>
<tbody>
{arr.map((el,i)=> {
    return <tr key={i}>
<td> {el.name}</td>
<td>{el.age}</td>

    </tr>
})}
</tbody>
</table>

<button onClick={deletehandler} > delete </button>
</>
}

export default List