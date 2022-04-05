import classes from './SliderBarevent.module.css'
import insight from '../image/insight.svg'
import logo_ticket from '../image/logo_ticket.svg'
import logo_home from '../image/logo_home.svg'
import unlogo_home from '../image/unlogo_home.svg'
import unlogo_ticket from '../image/unlogo_ticket.svg'
import logo_setting from '../image/logo_setting.svg'
import logo_checking from '../image/logo_checking.svg'
import unlogo_setting from '../image/unlogo_setting.svg'
import unlogo_checking from '../image/unlogo_checking.svg'
import vector1 from '../image/Vector (4).svg'
import copyright from '../image/Copyright.svg'
import alta from '../image/2020 Alta Software.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function SliderBarevent(){

    const onactives= document.querySelectorAll('.SliderBarevent_list__item__Lsty8')
    onactives.forEach( (onactive:any) => {
    onactive.onclick=function(){
        let items = document.querySelector<HTMLElement>('.SliderBarevent_list__item__Lsty8.SliderBarevent_active__X3kMt')!
        items.classList.remove('SliderBarevent_active__X3kMt')
    
    this.classList.add('SliderBarevent_active__X3kMt')
    
    }   
})
const [isShow, setIsShow] = useState(false);
const [isShowticket, setIsShowticket] = useState(true);
const [isShowchecking, setIsShowchecking] = useState(true);
const [isShowsetting, setIsShowsetting] = useState(true);

const handleLogoHome = ( ) => {
    setIsShow(false)
    setIsShowticket(true)
    setIsShowchecking(true)
    setIsShowsetting(true)
    
}
const handleLogoticket = ( ) => {
    setIsShow(true)
    setIsShowticket(false)
    setIsShowchecking(true)
    setIsShowsetting(true)
    
}
const handleLogochecking = ( ) => {
    setIsShow(true)
    setIsShowticket(true)
    setIsShowchecking(false)
    setIsShowsetting(true)
    
}
const handleLogosetting = ( ) => {
    setIsShow(true)
    setIsShowticket(true)
    setIsShowchecking(true)
    setIsShowsetting(false)
    
}
    return(
        <div className={classes.sliderbar}> 
        <div className={classes.list}>
            <div className={classes.insight}>
                <Link to="/" className={classes.link}>
                <img 
                    src={insight} alt='insight' className={classes.insightIMG}>
                </img>   
                </Link>
            </div>    
            <div className={classes.list__Sliderbar}>
            <Link to="/event" className={classes.link}>
            <div className={`${classes.list__item} ${classes.active}` }onClick={handleLogoHome}>
               
                    <img src={isShow ? logo_home : unlogo_home} alt='logo_home' className={classes.logo_IMG}  ></img>
              
                <div className={classes.list__title}>Trang chủ</div>
            </div> 
            </Link>
            <Link to="/event/List__ticket" className={classes.link}>
            <div className={classes.list__item}
                onClick={handleLogoticket} >
                <img src={isShowticket? logo_ticket :unlogo_ticket} alt='logo_home' className={classes.logo_IMG}></img>
                <div className={classes.list__title}>Quản lý vé</div>
            </div>
            </Link>
            <Link to="/event/Change__ticket" className={classes.link}>
            <div className={classes.list__item}
                onClick={handleLogochecking}>
                <img src={isShowchecking ? logo_checking : unlogo_checking} alt='logo_home' className={classes.logo_IMG}></img>
                <div className={classes.list__title}>Đối soát vé</div>
            </div>
            </Link>
            <Link to="/event/Setting" className={classes.link}
             onClick={handleLogosetting}>
            <div className={classes.list__item}>
                <img src={isShowsetting ? logo_setting : unlogo_setting} alt='logo_home' className={classes.logo_IMG}></img>
                <div className={classes.list__title}>Cài đặt</div>
            </div>
            </Link>
            <div className={classes.list__item1}>   
                <div className={classes.list__title}>Gói dịch vụ</div>
            </div>
            </div>
        </div>
        <div className={classes.title}>
            <img src={copyright} alt='copyright' className={classes.titleIMG}></img>
            <img src={vector1} alt='vector1'className={classes.titleIMG}></img>
            <img src={alta} alt='alta'className={classes.titleIMG}></img>
        </div>
    </div>
    

    )
}

export default SliderBarevent;