import classes from './Setting.module.css'
import logo_seach from '../../image/logo_seach.svg';
import logo_mail from '../../image/logo_mail.svg';
import logo_avatar from '../../image/logo_avatar.svg';
import logo_bell from '../../image/logo_bell.svg';
import {useState, useEffect} from 'react';
import {fetchData} from '../../../redux/DataAlta/DataAltaActions';
import {connect} from 'react-redux';
import ReactPaginate from 'react-paginate';
import red from '../../image/red.svg';
import dropdown from '../../image/dropdown.svg';
import green from '../../image/green.svg';
import back from '../../image/back.svg';
import logo_start from '../../image/logo_start.svg';
import logo_update from '../../image/logo_update.svg';
import next from '../../image/next.svg';
import DatePicker from "react-datepicker";


function Setting({dataTable,fetchData }:any){
    useEffect(() => {
        fetchData();
      }, []);
      const [startDate, setStartDate] = useState(new Date());

     
      const ServiceUsedPoint = ()=>{
        return (
                <div className={classes.green}>
                <img src={green} alt=''></img>
                    <div className={classes.green__title}>Đang áp dụng</div>
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
    const [isshow,setIsshow]=useState(false)
    const [isshowdrop,setIsshowdrop]=useState(false)
    const  data=dataTable.datasetting
    const [pageNumber, setPageNumber] = useState(0);
    const usersPrePage = 12;
    const pagesVisited = pageNumber * usersPrePage;
    const changePage = ({ selected }: { selected: any }) => {
        setPageNumber(selected);
      };

      const displayUsers =data .slice(pagesVisited, pagesVisited + usersPrePage) .map((item:any,index:any) => {
        return(
            <tr key={index}>
            <th style={{opacity: '0.7'}}>{item.stt}</th>
            <th style={{opacity: '0.7'}}>{item.code}</th>
            <th style={{opacity: '0.7'}}>{item.name}</th>
            <th style={{opacity: '0.7'}}>{item.day}</th>
            <th style={{opacity: '0.7'}}>{item.nextday}</th>
            <th style={{opacity: '0.7'}}>{item.price}</th>
            <th style={{opacity: '0.7'}}>{item.combo}</th>
            <th >
            {
             
                item.status =='Đang áp dụng' && <ServiceUsedPoint/> ||
                item.status =='Hết hạn' && <ServiceUnactivePoint/>
                }
            </th>
            <th className={classes.update}> 
                <img src={logo_update} alt='logo_update'></img>
                <div className={classes.update__title} onClick={()=>setIsshowdrop(!isshowdrop)} >  cập nhập</div>

                </th>
        </tr>
              )}
              )
    const [search , setSeatch] = useState('')
    return(
        <div className={classes.setting} >
            <div className={classes.setting__top} >
                <div className={classes.setting__information}>
                    <img src={logo_mail} alt='logo_mail' className={classes.logo__mail}></img>
                    <img src={logo_bell} alt='logo_bell' className={classes.logo__bell}></img>
                    <img src={logo_avatar} alt='logo_avatar' className={classes.logo__avatar}></img>
                </div>
            </div>
            <div className={classes.setting__bottom} >
                <p className={classes.title}>Danh sách gói vé</p>
                <div className={classes.setting__titlelist}>
                    <div className={classes.setting__seach}>
                        <input placeholder="Tìm bằng số vé" />      
                    </div>
                    <div className={classes.setting__manager}>
                        <div className={classes.setting__expot}>
                            <p className={classes.title__expot}> Xuất file (.csv)</p>
                        </div>
                        <div className={classes.setting__add}>
                            <p className={classes.title__add} onMouseEnter={()=>setIsshow(!isshow)}> Thêm gói vé</p>
                            {isshow &&<div className={classes.list__add}>
                                <p className={classes.list__title}>Thêm gói vé </p>
                                <div className={classes.list__name}>
                                    <div className={classes.name__item}>
                                        <div className={classes.name__title}>Tên gói vé </div>
                                        <img src={logo_start} alt='logo_start' className={classes.logo_start}></img>
                                    </div>  
                                    <input placeholder="Nhập tên gói vé"  />     
                                </div>
                                <div className={classes.list__day}>
                                    <div className={classes.day__accept}>
                                        <div className={classes.accept}>
                                            Ngày áp dụng
                                        </div>
                                        <div className={classes.day__time}>
                                            <div className='calendar__setting'>
                                            <DatePicker  selected={startDate} onChange={(date: Date) => setStartDate(date)} 
                                            value='dd/mm/yy'
                                            />
                                            </div>
                                            <div className={classes.time}>
                                                <input type="time"   step="1"/>
                                            </div>
                                        </div>
                                        
                                        
                                    </div>
                                    <div className={classes.day__expire}>
                                        <div className={classes.accept}>
                                            Ngày hết hạn
                                        </div>
                                        <div className={classes.day__time}>
                                            <div className='calendar__setting'>
                                            <DatePicker  selected={startDate} onChange={(date: Date) => setStartDate(date)} 
                                            value='dd/mm/yy'
                                            />
                                            </div>
                                            <div className={classes.time}>
                                                <input type="time" placeholder='08:00:00'  step="1"/>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div className={classes.price__ticket}>
                                        Giá vé áp dụng
                                </div>
                                <div className={classes.ticket}>
                                    <div className={classes.check__box}>
                                      <input
                                        type="checkbox"
                                       
                                      />
                                    </div>
                                    <span >Vé lẻ (vnđ/vé) với giá</span>
                                    <span className={classes.check__title}>
                                        Giá vé
                                    </span>
                                    <span>/ vé</span>

                                    
                                </div>

                                <div className={classes.ticket}>
                                    <div className={classes.check__box}>
                                      <input
                                        type="checkbox"
                                     
                                      />
                                    </div>
                                    <span >Combo vé với giá</span>
                                    <span className={classes.check__title}>
                                        Giá vé
                                    </span>
                                    <span>/</span>
                                    <span className={classes.check__title1}>
                                        Giá vé
                                    </span>
                                    <span> vé</span>

                                </div>
                                
                                <div className={classes.status}>
                                        Tình trạng
                                </div>
                                <div className={classes.status__accept}>
                                <input
                                        type="text" placeholder='Đang áp dụng'
                                       
                                      />
                                      <img src={dropdown} alt='dropdown' className={classes.dropdown}></img>
                                </div>
                                <div className={classes.informtion}>
                                    <img src={logo_start} alt='logo_start' className={classes.logo_start}></img>
                                   <div className={classes.from}> là thông tin bắt buộc</div>
                                </div>

                                <div className={classes.button__click} >
                                    <div className={classes.button__cancle}>
                                        <span className={classes.cancle__title} 
                                        onClick={()=>setIsshow(!isshow)}
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
}
                        </div>
    
    
                    </div>
                    
                </div>
                <div className={classes.setting__table}>
                    <table className={classes.table__list}>
                        <tbody>
                            <tr>
                                <th>STT</th>
                                <th>Mã gói</th>
                                <th>Tên gói vé</th>
                                <th >Ngày áp dụng</th>
                                <th >Ngày hết hạn</th>
                                <th>Giá vé (VNĐ/Vé)</th>
                                <th>Giá Combo (VNĐ/Combo)</th>
                                <th>Tình trạng</th>
                                <th></th>
                            </tr>  
                        
                            {displayUsers}
                        </tbody>
                    </table>

                   
                    </div>
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

                          {isshowdrop &&  <div className={classes.show}>
                            <div className={classes.list__update}>
                                <p className={classes.list__title}>Cập nhật thông tin gói vé</p>
                                <div className={classes.list__name}>
                                    <div className={classes.list__event}>
                                      
                                            <div className={classes.name__item}>
                                                <div className={classes.item__event}>
                                                    <div className={classes.event}>
                                                        <div className={classes.name__title}>Mã sự kiện </div>
                                                        <img src={logo_start} alt='logo_start' className={classes.logo_start}></img>
                                                    </div>
                                                    <input placeholder="PKG20210502" /> 
                                                </div>
                                            </div>
                                            <div className={classes.item__name}>
                                                <div className={classes.name__event}>Tên sự kiện </div>  
                                                <input placeholder="Hội chợ triển lãm hàng tiêu dùng 2021"/>
                                            </div>
                                    </div>
                                         
                                </div>
                                <div className={classes.list__day}>
                                    <div className={classes.day__accept}>
                                        <div className={classes.accept}>
                                            Ngày áp dụng
                                        </div>
                                        <div className={classes.day__time}>
                                            <div className='calendar__setting'>
                                            <DatePicker  selected={startDate} onChange={(date: Date) => setStartDate(date)} 
                                            value='dd/mm/yy'
                                            />
                                            </div>
                                            <div className={classes.time}>
                                                <input type="time"  step="1"/>
                                            </div>
                                        </div>
                                        
                                        
                                    </div>
                                    <div className={classes.day__expire}>
                                        <div className={classes.accept}>
                                            Ngày hết hạn
                                        </div>
                                        <div className={classes.day__time}>
                                            <div className='calendar__setting'>
                                            <DatePicker  selected={startDate} onChange={(date: Date) => setStartDate(date)} 
                                            value='dd/mm/yy'
                                            />
                                            </div>
                                            <div className={classes.time}>
                                                <input type="time"   step="1"/>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div className={classes.price__ticket}>
                                        Giá vé áp dụng
                                </div>
                                <div className={classes.ticket}>
                                    <div className={classes.check__box}>
                                      <input
                                        type="checkbox"
                                   
                                      />
                                    </div>
                                    <span >Vé lẻ (vnđ/vé) với giá</span>
                                    <span className={classes.check__title}>
                                        Giá vé
                                    </span>
                                    <span>/ vé</span>

                                    
                                </div>

                                <div className={classes.ticket}>
                                    <div className={classes.check__box}>
                                      <input
                                        type="checkbox"
                                    
                                      />
                                    </div>
                                    <span >Combo vé với giá</span>
                                    <span className={classes.check__title}>
                                        Giá vé
                                    </span>
                                    <span>/</span>
                                    <span className={classes.check__title1}>
                                        Giá vé
                                    </span>
                                    <span> vé</span>

                                </div>
                                
                                <div className={classes.status}>
                                        Tình trạng
                                </div>
                                <div className={classes.status__accept}>
                                <input
                                        type="text" placeholder='Đang áp dụng'
                                       
                                      />
                                      <img src={dropdown} alt='dropdown' className={classes.dropdown__event}></img>
                                </div>
                                <div className={classes.informtion}>
                                    <img src={logo_start} alt='logo_start' className={classes.logo_start}></img>
                                   <div className={classes.from}> là thông tin bắt buộc</div>
                                </div>

                                <div className={classes.button__click} >
                                    <div className={classes.button__cancle}>
                                        <span className={classes.cancle__title} 
                                        onClick={()=>setIsshowdrop(!isshowdrop)}
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
                            </div>

}
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
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(Setting);