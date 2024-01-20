
import './cssFile/promodoro.css'

function Promodoro(){
    return(
        <div className='container-promodoro'>
            <h1 className='title-promodoro'>Promodoro</h1>
            <div className='progress-promodoro'>
                <div className='circle-promodoro'>
                    <h1 className='percent-promodoro'>80%</h1>
                    <div className='div-btn-promodoro'>
                        <button className='btn-promodoro'>
                        <svg className='svg-promodoro' xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 96 97" fill="none">
                        <g clipPath="url(#clip0_22_324)">
                            <path d="M51.5 31.7213V22.7213L37.4375 33.9713L51.5 45.2213V36.2213C60.8094 36.2213 68.375 42.2738 68.375 49.7213C68.375 57.1688 60.8094 63.2213 51.5 63.2213C42.1906 63.2213 34.625 57.1688 34.625 49.7213H29C29 59.6663 39.0687 67.7213 51.5 67.7213C63.9313 67.7213 74 59.6663 74 49.7213C74 39.7763 63.9313 31.7213 51.5 31.7213Z" fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_22_324">
                            <rect width="96" height="96.7869" fill="white"/>
                            </clipPath>
                        </defs>
                        </svg>
                        </button>
                        <button className='btn-promodoro'>
                            <div className='carre'></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promodoro