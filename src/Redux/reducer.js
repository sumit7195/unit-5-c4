
import { sortByAsc } from "./actions"
import { SORT_BY_ASC, SORT_BY_DSC,SORT_BY_DATE,SORT_BY_QUALITY } from "./actionTypes"





export const reducer = (state=[], {type,payload})=>{

  switch(type){

  case SORT_BY_ASC:
      return {...state, data: payload.sort((a,b)=> a-b)}
  
  
  
   case SORT_BY_DSC:
  return {...state, data: payload.sort((a,b)=> b-a)}
 
  case SORT_BY_DATE:
  return {...state, data: payload.sort((a,b)=> b-a)}

  case SORT_BY_QUALITY:
  return {...state, data: payload.sort((a,b)=> b-a)}

  
  


  }





}