import './cssFile/findDate.css'
import {useEffect, useState} from 'react'




function FindDate(){

    const [year,setYear] = useState(2023)
    const [listMonth,setListMonth] = useState(['January','February','March','April','May','June','July','August','September','October','November','December'])
    const [month,setMonth] = useState('January')
    const [show,setShow]=useState('hide')
    const [daySelect , setdaySelect] = useState('')
    const [fullDate,setFullYear] = useState(`${year}-${month}-${daySelect}`)
    const [days,setDays] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31])
    
    const [lastDay,setLastDay] = useState(new Date(new Date(`${year}-${month}-1`).getFullYear(),new Date(`${year}-${month}-1`).getMonth() + 1 ,0))





    useEffect(()=>{
        document.querySelector('.date').addEventListener('click',()=>{
            console.log('hh')
            if(show==='hide'){
                document.querySelectorAll('#list-date').forEach(item=>item.style.display='block');
                setShow('show')   
            }else{
                document.querySelectorAll('#list-date').forEach(item=>item.style.display='none')
                setShow('hide') 
            }
        })
        setFullYear(`${year}-${month}-${daySelect}`)
        console.log(fullDate)
    },[year,month,daySelect,show])
   


    useEffect(()=>{
        setLastDay(new Date(new Date(`${year}-${month}-${daySelect}`).getFullYear(),new Date(`${year}-${month}-${daySelect}`).getMonth() + 1 ,0))
    },[month,year,daySelect])
    
    const hanadelMonth=(e)=>{
        setMonth(e.target.id)
        setFullYear(`${year}-${month}-1`)
    }

    const hanadelYear=(e)=>{
        setYear(e.target.id)
        setFullYear(`${year}-${month}-1`)
    }
    const hanadelActive=(e)=>{
        const active = document.querySelectorAll('.active')
        active.forEach(item=>item.classList.remove('active'))
        document.getElementById(e.target.id).classList.add('active')
        setdaySelect(e.target.id)
      }

  const filterDay = days.slice(0,lastDay.getDate()).map((item, index)=>(
    <li key={index} id={index+1} onClick={hanadelActive} className='days'>{item}</li>
    
  ))

 


    return(
       
        <div className='container-find-date'>
            <h1 className='date'>
                <span className='year'>{year} </span>
                <span className='month'>{month}</span>
            </h1>
            <div className="find-date">
                    <ul className='list-date' id='list-date'>
                      <li className='year-month' id='2023' onClick={hanadelYear} >2023</li>
                      <li className='year-month' id='2024' onClick={hanadelYear} >2024</li>
                      <li className='year-month' id='2025' onClick={hanadelYear} >2025</li>
                    </ul>
                    <div className='list-date' id='list-date'>
                        {listMonth.map((item, index)=> <button key={index} id={item} onClick={hanadelMonth} className='year-month' >{item}</button>)}
                    </div>
            </div>
            <div className='list-days'>
            
            {filterDay}
            </div>
        </div>
    )
}

export default FindDate;