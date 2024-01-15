import './cssFile/container.css'

import FindDate from './findDate.js'
import PercenTask from './percentTask.js'
import Promodoro from './promodoro.js'
import Task from './task.js'



function Container(){
    return(
        <section className='section1' id='section1'>
            <div className='container-section1'>
              <FindDate />
              <Task />
              <PercenTask />
              <Promodoro />
            </div>
        </section>
    )
}

export default Container