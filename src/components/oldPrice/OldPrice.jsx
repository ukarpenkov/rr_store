import { useEffect, useState } from 'react'
import './index.scss'

function OldPrice({ props }) {
    const [lineWidth, setLineWidth] = useState('')
    let formatedPrice = parseFloat(props).toFixed(2)
    let rublesValue = Math.floor(formatedPrice)
    let penniesValue = formatedPrice.toString().split(".")[1].substr(0, 2)

    useEffect(() => {
        setLineWidth(document.querySelector('.old-price-values').offsetWidth)
    }, [])

    const style = {
        width: lineWidth
    }

    return <>
        <div className='old-price'>
            <div className='old-price-values'>
                <span className="old-price__rubbles">{rublesValue}</span>
                <span className="old-price__pennies">{penniesValue}</span>
                <span className="old-price__rub-sign">&nbsp;₽</span>
            </div>
            <div className='old-price__line' style={style}></div>
            <div className='old-price__describe'>старая цена</div>
        </div>

    </>
}



export default OldPrice