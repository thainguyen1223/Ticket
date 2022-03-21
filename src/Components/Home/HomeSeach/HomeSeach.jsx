import classes from './HomeSeach.module.css'
import logo_seach from '../../image/logo_seach.svg'
import logo_mail from '../../image/logo_mail.svg'
import logo_avatar from '../../image/logo_avatar.svg'
import logo_bell from '../../image/logo_bell.svg'
import { useState } from 'react'
function HomeSeach(){
    const [search , setSeatch] = useState('')
    return(
        <div className={classes.home___top}>
                <div className={classes.home__seach}>
                    <input placeholder="Search" value={search} onChange={(e)=> setSeatch(e.target.value)}/>
       
                        <img src={logo_seach} alt='logo_seach' className={classes.logo__seach}></img>
               
                </div>
           
                <div className={classes.home__information}>
                    <img src={logo_mail} alt='logo_mail' className={classes.logo__mail}></img>
                    <img src={logo_bell} alt='logo_bell' className={classes.logo__bell}></img>
                    <img src={logo_avatar} alt='logo_avatar' className={classes.logo__avatar}></img>
                </div>
            </div>
    )
}

export default HomeSeach;