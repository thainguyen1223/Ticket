import classes from './Ticketpeople.module.css'

import {useState, useEffect} from 'react';
import logo_seach from '../../image/logo_seach.svg'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import logo_filter from '../../image/logo_filter.svg';
import {fetchData} from '../../../redux/DataAlta/DataAltaActions';
import red from '../../image/red.svg';
import green from '../../image/green.svg';
import black from '../../image/black.svg';
import {connect} from 'react-redux';
import ReactPaginate from 'react-paginate';
import back from '../../image/back.svg'
import next from '../../image/next.svg'

import list from '../../image/list.svg'

function Ticketpeople({dataTable,fetchData }:any){
    useEffect(() => {
        fetchData();
      }, []);
    const [isshow,setIsshow]=useState(false)
    const [search , setSeatch] = useState('')
    const [checked , setChecked]=useState(1)
    
    const coursedata=[
        {
        id:1,
        name:'Tất cả'
        },
        {
        id:2,
        name:'Đã sử dụng'
        },
        {
        id:3,
        name:'Chưa sử dụng'
        },  
        {
        id:4,
         name:'Hết hạn'
        }
    ]


    const ServiceWaitPoint = ()=>{
        return (
            <div className={classes.black}>
                <img src={black} alt=''></img>
                    <div className={classes.black__title}>Đã sử dụng</div>
            </div>
        )
    }  
    
    
    const ServiceUsedPoint = ()=>{
    return (
            <div className={classes.green}>
            <img src={green} alt=''></img>
                <div className={classes.green__title}>Chưa sử dụng</div>
        </div>
    )
    }  
    
    
    const ServiceUnactivePoint = ()=>{
          return (  
            <div className={classes.red}>
                <img src={red} alt=''></img>
                    <div className={classes.red__title}>Hết hạn</div>
            </div>
          ) 
    }

    //showlist
    const[showlist,setShowlist]=useState(false)
    const datalist = dataTable.dataTicket


    const [data , setData] = useState(datalist)
    const [dataButton , setDataButton] = useState(coursedata[0].name)
    const handleButton=()=>{
        if(dataButton=="Đã sử dụng"){
            const show =datalist.filter((item:any)=>item.status=="Đã sử dụng")
            
            setData(show)
            
        }else if(dataButton=="Chưa sử dụng"){
            const show =datalist.filter((item:any)=>item.status=="Chưa sử dụng")
            setData(show)
        }else if(dataButton=="Hết hạn"){
            const show =datalist.filter((item:any)=>item.status=="Hết hạn")
            setData(show)
        }else if(dataButton=="Tất cả"){
            const show =datalist.filter((item:any)=>item.status=="Tất cả")
            setData(show)
        } else{
            setData(datalist)
        }
      
    }

    const handleRadio=(value:any)=>{
        setDataButton(value)
    }
    const [pageNumber, setPageNumber] = useState(0);
    const usersPrePage = 12;
    const pagesVisited = pageNumber * usersPrePage;
    const changePage = ({ selected }: { selected: any }) => {
        setPageNumber(selected);
      };
const displayUsers =data.slice(pagesVisited, pagesVisited + usersPrePage) .map((item:any,index:any) => {
    return(
        <tr key={index} className={classes.ticket__list}>
        <th style={{opacity: '0.7'}}>{item.stt}</th>
        <th style={{opacity: '0.7'}}>{item.code}</th>
        <th style={{opacity: '0.7'}}>{item.number}</th>
     
        <th style={{ width: 17  }}>
        {
                item.status =='Đã sử dụng' && <ServiceWaitPoint/> ||
                item.status =='Chưa sử dụng' && <ServiceUsedPoint/> ||
                item.status =='Hết hạn' && <ServiceUnactivePoint/>
                }

        </th>
        <th style={{opacity: '0.7'}}>{item.day}</th>
        <th style={{opacity: '0.7'}}>{item.nextday}</th>
        <th style={{opacity: '0.7' ,width:200 }}>{item.checkid||
                                    <div className={classes.list__context} >
                                          <span className={classes.checklist} >_</span>   
                                    
                                    <span  className={classes.listIMG}  onClick={() => setShowlist(true)}>
                                        <img src={list} alt="" />
                                     
                                    </span>
                                    </div>
     }
        
        
        </th>   
        </tr>
   
        )}
    )
  const [startDate, setStartDate] = useState(new Date());
  
    return(
        <div className={classes.list__ticket}>
            <div className={classes.ticket__top}>
               
            </div>
            <div className={classes.ticket__bottom}>
                <div className={classes.title}>Danh sách vé</div>
                <div className={classes.ticket__titlelist}>
                    <div className={classes.ticket__seach}>
                        <input placeholder="Search" value={search} onChange={(e)=> setSeatch(e.target.value)}/>
        
                            <img src={logo_seach} alt='logo_seach' className={classes.logo__seach}></img>
                
                    </div>
                    <div className={classes.ticket__manager}>
                        <div className={classes.ticket__item} onMouseEnter={()=>setIsshow(!isshow)}>
                            <img src={logo_filter} alt='logo_filter' className={classes.logo_filter}></img>
                            <p className={classes.ticket__title}>Lọc vé</p> 
                            {isshow && <div className={classes.list__filter}>
                                <div className={classes.filter__title}>Lọc vé</div> 
                                <div className={classes.filter__day}>
                                    <div className={classes.day__item}>
                                        <div className={classes.day}>Từ ngày</div>
                                        <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)}   
                                    />
                                    </div>
                                    <div className={classes.day__item}>
                                        <div className={classes.day}>Đến ngày</div>
                                        <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)}   
                                    />
                                    </div>
                                </div>
                                <div className={classes.filter__status}>
                                    <div className={classes.status}>
                                        Tình trạng sử dụng
                                    </div>
                                    <div className={classes.list}>
                                        {coursedata.map(course=>
                                            <div key={course.id} className={classes.radio__checkid}>
                                                <input type="radio"
                                                checked={checked==course.id}
                                                value={course.name}

                                                onChange={(e)=> {
                                                setChecked(course.id)
                                                handleRadio(e.target.value)
                                                }}
                                            
                                                
                                        
                                                />
                                            <span>  {course.name}</span>
                                            
                                            </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className={classes.checked__in}>
                                        <div className={classes.checked__title}>
                                            Cổng Check - in
                                        </div>
                                        <div className={classes.checkbox}>
                                            <div className={classes.checked__id}>
                                                <div className={classes.check__box}>
                                                    <input type="checkbox"/>
                                                </div>
                                                <div className={classes.check__name}>
                                                    tất cả
                                                </div>
                                            </div>
                                            <div className={classes.checked__id}>
                                                <div className={classes.check__box}>
                                                    <input type="checkbox"/>
                                                </div>
                                                <div className={classes.check__name}>
                                                    cổng 1
                                                </div>
                                            </div>
                                            <div className={classes.checked__id}>
                                                <div className={classes.check__box}>
                                                    <input type="checkbox"/>
                                                </div>
                                                <div className={classes.check__name}>
                                                    cổng 2
                                                </div>
                                            </div>
                                        </div>
                                        <div className={classes.checkbox}>
                                            <div className={classes.checked__id}>
                                                <div className={classes.check__box}>
                                                    <input type="checkbox"/>
                                                </div>
                                                <div className={classes.check__name}>
                                                    cổng 3
                                                </div>
                                            </div>
                                            <div className={classes.checked__id}>
                                                <div className={classes.check__box}>
                                                    <input type="checkbox"/>
                                                </div>
                                                <div className={classes.check__name}>
                                                    cổng 4
                                                </div>
                                            </div>
                                            <div className={classes.checked__id}>
                                                <div className={classes.check__box}>
                                                    <input type="checkbox"/>
                                                </div>
                                                <div className={classes.check__name}>
                                                    cổng 5
                                                </div>
                                            </div>
                                        </div>
                                       
                                    </div>
                                        <div className={classes.footer}>
                                            <div className={classes.footer__title}
                                            onClick={handleButton}
                                            >
                                                lọc
                                            </div>
                                        </div>
                            </div>
}
                        </div>
                                      
                        <div className={classes.ticket__item}>
                            <p className={classes.ticket__title}>Xuất file (.csv)</p> 
                        </div>
                    </div>
                </div>

                <div className={classes.ticket__table}>
                    <table className={classes.table__list}>
                        <tbody>
                            <tr   >
                            <th>STT</th>
                            <th>Booking code</th>
                            <th>Số vé</th>
                      
                            <th style={{ width: 17 + '%' }}>Tình trạng sử dụng</th>
                            <th>Ngày sử dụng</th>
                            <th>Ngày xuất vé</th>
                            <th>Cổng check - in</th>
                            </tr>  

                        { displayUsers}
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

                    { showlist &&  <div className={classes.modal}>
                        <div className={classes.modal__item}>
                            <div className={classes.modal__header}>
                                Đổi ngày sử dụng vé
                            </div>

                            <div className={classes.modal__des}>
                                <div className={classes.modal__des__heaer}>
                                    Số vé
                                </div>
                            <div className={classes.modal__info}>PKG20210502</div>

                            </div>
                            <div className={classes.modal__des}>
                                <div className={classes.modal__des__heaer}>
                                    Số vé
                                </div>
                                <div className={classes.modal__info}>Vé cổng - Gói sự kiện</div>

                                </div>

                            <div className={classes.modal__des}>
                                <div className={classes.modal__des__heaer}>
                                    Tên sự kiện
                                </div>
                                <div className={classes.modal__info}>Hội trợ triển lãm hàng tiêu dùng 2021</div>

                                </div>
                            <div className={classes.modal__des}>
                                <div className={classes.modal__des__heaer}>
                                    Hạn sử dụng
                                </div>
                                <div className={classes.modal__des__calendar}> 
                                    <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)}   
                                    />
                                    </div>
                                </div>

                                <div className={classes.button__click} >
                                    <div className={classes.button__cancle}>
                                        <span className={classes.cancle__title} 
                                        onClick={()=>setShowlist(false)}
                                        >
                                            Huỷ
                                        </span>
                                    </div>
                                    <div className={classes.button__accpect}>
                                        <span className={classes.accpect__title}>
                                            Lưu
                                        </span>
                                    </div>
                                </div>
                                        </div>
                                        </div>}
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
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(Ticketpeople);