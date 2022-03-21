
import {REQ,SUCCESS,ERROR,SUCCESSDATATICKET,SUCCESSDATACHANGETICKET,SUCCESSDATASETTING

} from './DataAltaTypes'

import db from '../../firebase.config';


export const FETCHSUCCESS = (data:any)=>{ 
    return {
        type:SUCCESS,
        payload: data
    }
}



export const FETCHREQ = ()=>{
    return {
        type: REQ,
    }
}
export const FETCHERROR = (error:any)=>{ 
    return {
        type:ERROR,
        payload: error
    }
}



export const FETCHSUCCESSDATATICKET= (data:any)=>{ 
    return {
        type:SUCCESSDATATICKET,
        payload: data
    }
}



export const FETCHSUCCESSDATACHANGETICKET= (data:any)=>{ 
    return {
        type:SUCCESSDATACHANGETICKET,
        payload: data
    }
}

export const FETCHSUCCESSDATASETTING= (data:any)=>{ 
    return {
        type:SUCCESSDATASETTING,
        payload: data
    }
}





export const fetchData = ()=>{
    return (dispatch:any)=>{

        dispatch(FETCHREQ)

        const responseDataTicket=db.collection('dataTicket');
                responseDataTicket.get()
                .then(response =>{
                const usersSuccess:any = []
                response.docs.forEach(item =>{
                    
                  usersSuccess.push(item.data())
                })
               dispatch(FETCHSUCCESSDATATICKET(usersSuccess))

                })
                .catch(error =>{
                    const errorMessage = error.message

                dispatch(FETCHERROR(errorMessage))
                })  



                const responsedataChangeTicket =db.collection('dataChangeTicket');
                responsedataChangeTicket.get()
                .then(response =>{
                const usersSuccess:any = []
                response.docs.forEach(item =>{
                    
                    
                    usersSuccess.push(item.data())

                })
               
                
                dispatch(FETCHSUCCESSDATACHANGETICKET(usersSuccess))
               

                
                


                })
                .catch(error =>{
                    const errorMessage = error.message

                dispatch(FETCHERROR(errorMessage))
                })  


            const responsedatasetting =db.collection('datasetting');
            responsedatasetting.get()
            .then(response =>{
                const usersSuccess:any = []
                response.docs.forEach(item =>{
                    
                    usersSuccess.push(item.data())
                  })
                  dispatch(FETCHSUCCESSDATASETTING(usersSuccess))
                })
                .catch(error =>{
                    const errorMessage = error.message

                dispatch(FETCHERROR(errorMessage))
                })    
 }}
