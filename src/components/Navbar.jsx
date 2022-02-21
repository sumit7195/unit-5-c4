import { store } from "../Redux/store"
// import {useSelector,useDispatch} from "react-redux"

// import { sortByAsc } from "../Redux/actions"









export const Navbar = ({searchData})=>{

//  const  data  = useSelector(store => store)
let data = searchData;

const sortByAscData = ()=>{
    data.sort((a,b)=>{

   let elm1 = a.title;
   let elm2 = b.title;

   if(elm1 < elm2){
       return -1
   }
   if(elm2 > elm2){
       return 1
   }


   return 0;

    
}



)


console.log(data)

}


//  console.log(data)





 return(

  <div>


 <button onClick={sortByAscData}>Sort A-Z</button>
 <button>Sort Z-A</button>
 <button>Sort by date(Asc)</button>
 <button>Sort by date(Desc)</button>
 <button>Sort by quality(Asc))</button>
 <button>Sort by quality(Desc))</button>
 <button>Filter explicit)</button>







  </div>








 )




}