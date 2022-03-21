import classes from './ChangeTicket.module.css'
import HomeSeach from '../HomeSeach/HomeSeach';
import {useState, useEffect} from 'react';
import logo_seach from '../../image/logo_seach.svg'
import {connect} from 'react-redux';
import {fetchData} from '../../../redux/DataAlta/DataAltaActions';
import ReactPaginate from 'react-paginate';
import back from '../../image/back.svg'
import next from '../../image/next.svg'
import DatePicker from "react-datepicker";
import '../../style/style.css'

function ChangeTicket({dataTable,fetchData }:any){
    useEffect(() => {
        fetchData();
      }, []);

      const [showButton , setShowButton  ] = useState(false)
      const datacourse = [
        {
          id:1,
          name:'Tất cả'
        },
        {
          id:2,
          name:'Đã đối soát'
        },
        {
          id:3,
          name:'Chưa đối soát'
        },
        
      
      
      ]
     
    const [startDate, setStartDate] = useState(new Date());
    const [checked,setChecked]=useState(1)  
    const [dataButton , setDataButton] = useState(datacourse[0].name)
    const handleButton=()=>{
        if(dataButton=="Đã đối soát"){
            const show=datalist.filter( (value:any)=>{
                return dataButton ==  value.state
              })
              setData(show)
              setShowButton (false)
              
        }else if(dataButton=='Chưa đối soát'){
            const show=datalist.filter( (value:any)=>{
                return dataButton == value.state
              })
              setData(show)
              setShowButton (true)
    
            }
        
        else{
            setData(datalist)
          }
      
    }

    const handleRadio=(value:any)=>{
        setDataButton(value)
    }
 

   
    const [search , setSeatch] = useState('')
  
        
    
    const  datalist = dataTable.dataChangeTicket
    const [data , setData] = useState(datalist)
    const [pageNumber, setPageNumber] = useState(0);
    const usersPrePage = 12;
    const pagesVisited = pageNumber * usersPrePage;
    const changePage = ({ selected }: { selected: any }) => {
        setPageNumber(selected);
      };
      const displayUsers =data .slice(pagesVisited, pagesVisited + usersPrePage) .map((item:any,index:any) => {
        return(
            <tr key={index} className={classes.ticket__list}>
                <td style={{opacity: '0.7'}}>{item.stt}</td>
                <td style={{opacity: '0.7'}}>{item.number}</td>      
                <td style={{opacity: '0.7'}}>{item.day}</td>   
                <td style={{opacity: '0.7'}}>{item.name}</td> 
                <td style={{opacity: '0.7'}}>{item.checkid}</td>
                <td  style={{fontStyle:'italic',color: '#A5A8B1'}}>
            
              
                {item.state ='  Chưa đổi soát'?(              
                    <td style={{fontStyle:'italic',color: '#A5A8B1'}}>
                        Chưa đổi soát
                    </td>
                    
                ):(
                   
                    <td style={{fontStyle:'italic',color: '#FD5959'} }>
                    Đã đổi soát
                    </td>
                 )
                }
                </td>
            </tr>
       
            )}
        )
    return(
        <div className={classes.change__ticket}>
            <div className={classes.ticket__top}>
                <HomeSeach/>
            </div>
            <div className={classes.ticket}>
                <div className={classes.ticket__left}>
                    <p className={classes.title}>Đối soát vé</p>
                    <div className={classes.ticket__titlelist}>
                        <div className={classes.ticket__seach}>
                            <input placeholder="Tìm bằng số vé" />
            
                              
                        </div>
                        <div className={classes.ticket__item}>
                        {showButton ?(
                                    
                           <div className={classes.ticket__expot} >
                                <p className={classes.title_expot}> Xuất file (.csv)</p>
                             </div>
                            ):(
                            <div className={classes.ticket__title} >
                                <p className={classes.title__change}>Chốt đối soát</p> 
                             </div>
                            )
                        }
                        </div>
  
                    </div>
                    <div className={classes.ticket__table}>
                        <table className={classes.table__list}>
                        <tbody>
                            <tr   >
                            <td>STT</td>
                            <td >Số vé</td>
                            <td>Ngày sử dụng</td>
                            <td>Tên loại vé</td>
                            <td>Cổng check - in</td>
                            <th></th>
                            </tr>  
                        {displayUsers}
                        </tbody>    
                    </table>

                    <div className={classes.page}>
                    <ReactPaginate
                            previousLabel={<img src={back} />} 
                            nextLabel={<img src={next} />}
                            pageCount={20}
                            onPageChange={changePage}    
                            containerClassName={"paginationBttns"}
                            previousLinkClassName={"previousBttn"}
                            nextLinkClassName={"nextBttn"}
                            disabledClassName={"paginationDisabled"}
                            activeClassName={"paginationActive"} 
                            
                    />
                    </div>
                    </div>
                </div>
                <div className={classes.ticket__right}>
                    <p className={classes.item__ticket}>Lọc vé</p>
                    <div className={classes.ticket__container}>
                        <div className={classes.container__title}>
                            Tình trạng đối soát
                        </div>
                        <div className={classes.container__title}>
                           {datacourse.map(course=>
                            <div key={course.id} className={classes.radio__checkid}>
                                <input type="radio"
                                checked={checked==course.id}
                                value={course.name}
                                onChange={(e)=>{ setChecked(course.id)
                                handleRadio(e.target.value)
                                }}
                                
                         
                                />
                               <span>  {course.name}</span>
                               
                            </div>
                            )}
                        </div>

                        
                    </div>
                    <div className={classes.container__ticket}>
                        <div className={classes.ticket__type}>
                            Loại vé
                        </div>
                        <div className={classes.ticket__gate}>
                            Vé cổng
                        </div>
                    </div>

                    <div className={classes.container__ticket}>
                        <div className={classes.ticket__type}>
                           Từ ngày
                        </div>
                        <div className={classes.ticket__calendar}>
                            <input type="01/05/2021" placeholder='01/05/2021' className={classes.value} />
                        </div>
                    </div>

                    <div className={classes.container__ticket}>
                        <div className={classes.ticket__type}>
                            Đến ngày
                        </div>
                        <div className='calendar__on'> 
                            <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)}   
                            value='dd/mm/yy'  className={classes.value}
                            />
                        </div>
                    </div>
                    
                    <div className={classes.container__fitter}  onClick={handleButton} >
                        
                        Lọc
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state:any) =>{
    return {
  
      dataTable:state.dataAlta
  
     
        
        
        
    }
  }
  const mapDispatchToProps = (dispatch:any) =>{
    return {
            fetchData: ()=>  dispatch(fetchData()),
      
    }
  }
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(ChangeTicket);