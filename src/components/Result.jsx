



export const Result = ({result})=>{

  console.log(result)
  
    return(
      
  result.map((e)=>(

      
    
     <div className="result" key={e.id}>
    <h3>{e.url}</h3>
    <h3>{e.title}</h3>
     <p>{e.description}</p>
     <p>{e.author}</p>
     </div>
  
  ))


    )

}