import classes from './SliderBarpeople.module.css'
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

    function SliderBarpeople(){
        const onactives= document.querySelectorAll('.SliderBarpeople_list__item__6Q56z')
            onactives.forEach( (onactive:any) => {
            onactive.onclick=function(){
                let items = document.querySelector<HTMLElement>('.SliderBarpeople_list__item__6Q56z.SliderBarpeople_active__fG55r')!
                items.classList.remove('SliderBarpeople_active__fG55r')
            
            this.classList.add('SliderBarpeople_active__fG55r')
            
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
                    <Link to="/homepeople" className={classes.link}>
                    <div className={`${classes.list__item} ${classes.active}` }onClick={handleLogoHome}>
                       
                            <img src={isShow ? logo_home : unlogo_home} alt='logo_home' className={classes.logo_IMG}  ></img>
                      
                        <div className={classes.list__title}>Trang chủ</div>
                    </div> 
                    </Link>
                    <Link to="/List__ticket_people" className={classes.link}>
                    <div className={classes.list__item}
                        onClick={handleLogoticket} >
                        <img src={isShowticket? logo_ticket :unlogo_ticket} alt='logo_home' className={classes.logo_IMG}></img>
                        <div className={classes.list__title}>Quản lý vé</div>
                    </div>
                    </Link>
                    <Link to="/Change__ticket_people" className={classes.link}>
                    <div className={classes.list__item}
                        onClick={handleLogochecking}>
                        <img src={isShowchecking ? logo_checking : unlogo_checking} alt='logo_home' className={classes.logo_IMG}></img>
                        <div className={classes.list__title}>Đối soát vé</div>
                    </div>
                    </Link>
                    <Link to="/Setting__people" className={classes.link}
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


    export default SliderBarpeople