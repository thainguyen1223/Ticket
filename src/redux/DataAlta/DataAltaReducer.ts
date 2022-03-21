import {REQ,SUCCESS,ERROR,SUCCESSDATATICKET,SUCCESSDATASETTING
    ,SUCCESSDATACHANGETICKET
  
  } from './DataAltaTypes'
  
  
  const initState : any = {
      loading: true,
      error:'',
      dataTicket:[],
      datasetting:[],
      dataChangeTicket:[],
    
     
  
     
    }
  
    const reducer = (state = initState, action:any) =>{
      switch(action.type){
          case REQ:
            return {
              ...state,
              
            }
          case SUCCESS:
            return {
              ...state,
              
              loading: false,
           
              dataChart: action.payload
            }
            case SUCCESSDATATICKET:
            return {
              ...state,
              
              loading: false,
           
              dataTicket: action.payload
            }
  
            case SUCCESSDATASETTING:
  
             return {
              ...state,
              
              loading: false,
           
              datasetting: action.payload
            }
  
            case SUCCESSDATACHANGETICKET:
              return {
                ...state,
                
                loading: false,
             
                dataChangeTicket: action.payload
              }
          case ERROR:
           return {
            ...state,
            dataChart:[],
            error:action.payload
            }
           
          default:
            return state
      }
    }
    
    export default reducer