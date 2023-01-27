import { useEffect, useState } from 'react'
import './index.scss'

function Price(props) {
    const [lineWidth, setLineWidth] = useState('')
    let formatedPrice = ''
    let rublesValue = 'Уточните цену по телефону!'
    let penniesValue = ''
    if (props.price) {
        formatedPrice = parseFloat(props.price).toFixed(2)
        rublesValue = Math.floor(formatedPrice)
        penniesValue = formatedPrice.toString().split(".")[1].substr(0, 2)
    }

    let classes = {
        wrapper: props.priceType === 'old' ? 'old-price' : 'new-price',
        priceValues: props.priceType === 'old' ? 'old-price-values' : 'new-price-values',
        rubbles: props.priceType === 'old' ? 'old-price__rubbles' : 'new-price__rubbles',
        pennies: props.priceType === 'old' ? 'old-price__pennies' : 'new-price__pennies',
        sing: props.priceType === 'old' ? 'old-price__rub-sign' : 'new-price__rub-sign',
        noPrice: !props.price ? 'new-price__no-rubbles' : ''
    }

    useEffect(() => {
        setLineWidth(document.querySelector('.old-price-values').offsetWidth)
    }, [])

    const style = {
        width: lineWidth
    }

    return <>
        <div className={classes.wrapper}>
            <div className={classes.priceValues}>
                <span className={!!props.price ? classes.rubbles : classes.noPrice}>{rublesValue}</span>
                <span className={classes.pennies}>{penniesValue}</span>
                {props.price ? <span className={classes.sing}>&nbsp;₽</span> : null}
            </div>
            {props.priceType === 'old' ? <div className='price-line' style={style}></div> : null}
            {props.priceType === 'old' ? <div className='price__describe'>старая цена</div> : <div className='price__describe'>цена по акции</div>}
        </div>

    </>
}



export default Price