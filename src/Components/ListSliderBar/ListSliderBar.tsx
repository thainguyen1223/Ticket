import classes from './ListSliderBar.module.css'
import insight from '../image/insight.svg'
import logo_ticket from '../image/logo_ticket.svg'
import logo_home from '../image/logo_home.svg'
import logo_list from '../image/logo_list.svg'
import logo_sevice from '../image/logo_sevice.svg'
import logo_setting from '../image/logo_setting.svg'
import logo_checking from '../image/logo_checking.svg'

import { Link } from 'react-router-dom'





function ListSliderBar(){

  
    return(
        <div className={classes.listsliderbar}> 
        <div className={classes.list}>
            <div className={classes.insight}>
                 <Link to="/" className={classes.link}>
                <img 
                    src={insight} alt='insight' className={classes.insightIMG}>
                </img>   
                </Link>
            </div>    
            <div className={classes.list__Sliderbar}>
            <Link to="/home" className={classes.link}>
            <div className={classes.list__item}>
                    <img src={ logo_home } alt='logo_home' className={classes.logo_IMG}  ></img>
                
                <div className={classes.list__title}>Trang chủ</div>
            </div> 
            </Link>
            <Link to="/List__ticket" className={classes.link}>
            <div className={classes.list__item} >
                <img src={logo_ticket} alt='logo_ticket' className={classes.logo_IMG}></img>
                <div className={classes.list__title}>Quản lý vé</div>
            </div>
            </Link>
            <Link to="/Change__ticket" className={classes.link}>
            <div className={classes.list__item}>
                <img src={logo_checking} alt='logo_checking' className={classes.logo_IMG}></img>
                <div className={classes.list__title}>Đối soát vé</div>
            </div>
            </Link>
            <Link to="/event " className={classes.link}>
            <div className={classes.list__item}>
                <img src={logo_list} alt='logo_list' className={classes.logo_IMG}></img>
                <div className={classes.list__title}>Danh sách sự kiện</div>
            </div>
            </Link>
            <div className={classes.list__item}>
                <img src={logo_sevice} alt='logo_sevice' className={classes.logo_IMG}></img>
                <div className={classes.list__title}>Quản lý thiết bị</div>
            </div>
            <Link to="/Setting" className={classes.link}>
            <div className={classes.list__item}>
                <img src={logo_setting} alt='logo_setting' className={classes.logo_IMG}></img>
                <div className={classes.list__title}>Cài đặt</div>
            </div>
            </Link>
            <div className={classes.list__item1}>   
                <div className={classes.list__title}>Gói dịch vụ</div>
            </div>
            </div>
        </div>
       
    </div>
    )
}

export default ListSliderBar