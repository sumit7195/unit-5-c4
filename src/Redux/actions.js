import { SORT_BY_ASC,SORT_BY_DSC, SORT_BY_DATE,SORT_BY_QUALITY,FILTER } from "./actionTypes";




export const sortByAsc = (payload)=>{

    type:SORT_BY_ASC,
    payload

}



export const sortByDsc = (payload)=>{

    type:SORT_BY_DSC,
    payload

}



export const sortByDate = (payload)=>{

    type:SORT_BY_DATE,
    payload

}

export const sortByQuality = (payload)=>{

    type:SORT_BY_QUALITY,
    payload

}
export const sortByfilter = (payload)=>{

    type:FILTER,
    payload

}
