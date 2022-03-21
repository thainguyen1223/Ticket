import {
   
    XAxis,
    YAxis,
   
    Tooltip,
  
    AreaChart,
    Area,
    ResponsiveContainer,
  } from 'recharts'
import classes from './HomeSafe.module.css'
function HomeSafe(){
    const data = [
        {
          name: 'thứ 2',
          value:150,
        
        },
   
        {
          name: 'thứ 3',
          value: 175,
          
        },
        {
          name: 'thứ 4',
          value: 155,
          
        },
        {
          name: 'thứ 5',
          value: 220,
          
        },
        {
          name: 'thứ 6',
          value: 200,
         
        },
        {
          name: 'thứ 7',
          value: 190,
         
        },
        {
            name: 'CN',
            value:185,
           
          },
        
      ];

 
  return(
    <div className={classes.chart__safe}>
         <ResponsiveContainer width="99%" aspect={ 5}>
                <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
                >
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#FAA05F" stopOpacity={1}/>
                        <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.5}/>
                    </linearGradient>
                 </defs>
                <XAxis dataKey="name" />
                <YAxis type="number" domain={[140, 260]}  ticks={[140, 180, 220, 260 ]}/>
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#FAA05F" fill="url(#colorUv)" />
                </AreaChart>
        </ResponsiveContainer>  
  </div>
  )
}

export default HomeSafe;