import classes from './Homepeople.module.css'
import HomeSafe from '../Home/HomeSafe/HomeSafe';
import HomeSeach  from '../Home/HomeSeach/HomeSeach';
import chart_people from '../image/chart_people.svg'
import chart_event from '../image/chart_event.svg'
import chart_orange from '../image/chart_orange.svg'
import chart_blue from '../image/chart_blue.svg'
import "react-datepicker/dist/react-datepicker.css";
import '../style/style.css'
import { useState } from 'react';
import DatePicker from "react-datepicker";

function Homepeople(){
    const [startDate, setStartDate] = useState(new Date());
    return(
        <div className={classes.home}>
            <div className={classes.home___top}>
                <HomeSeach/>
            </div>
            <div className={classes.home___bottom}>
                
                    <p className={classes.title}>Thống kê</p>
              
                <div className={classes.home__titlelist}>
                    <div className={classes.home__safe}>
                        <p className={classes.title__safe}>Doanh thu</p>
                    </div>
                    <div className={classes.home__calendar}>
                    <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)}   
                    />
                   
                                    
                    </div>
                </div>
                <div className={classes.Home__chartsafe}>
                    <HomeSafe/>
                </div>
                <div className={classes.Home__coin}>
                    <div className={classes.total__week}>
                        Tổng doanh thu theo tuần
                    </div>
                    <div className={classes.total__list}>
                        <span className={classes.money}>
                            525.145.000
                        </span>
                        <span className={classes.coin}>
                            đồng
                        </span>
                    </div>
                </div>
                <div className={classes.package__list}>
                    <div className={classes.package__calendar}>
                    <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)}   
                                    />
                    </div>
                    <div className={classes.chart_item}>
                        <div className={classes.chart_title}>Gói gia đình</div>
                        <img src={chart_people} alt='chart_people' className={classes.chartIMG}></img>
                    </div>
                    <div className={classes.package__chart}>
                        <div className={classes.chart_item}>
                            <div className={classes.chart_title}>Gói sự kiện</div>
                            <img src={chart_event} alt='chart_event' className={classes.chartIMG}></img>
                        </div>
                        <div className={classes.package__use}>
                            <div className={classes.use_item}>
                                <img src={chart_blue} alt='chart_blue'></img>
                                <p className={classes.use_title}>Vé đã sử dụng</p>
                            </div>
                            <div className={classes.use_item}>
                                <img src={chart_orange} alt='chart_blue'></img>
                                <p className={classes.use_title}>Vé chưa sử dụng</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Homepeople;