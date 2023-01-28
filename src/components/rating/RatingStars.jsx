import './index.scss'

function RatingStars({ props }) {

    return <div className='rating-area'>
        <input type='radio' id='star-5' name='rating' value='5' checked={props === 5 ? true : false} onChange={e => { }} />
        <label htmlFor='star-5' title='Оценка «5»'></label>
        <input type='radio' id='star-4' name='rating' value='4' checked={props === 4 ? true : false} onChange={e => { }} />
        <label htmlFor='star-4' title='Оценка «4»'></label>
        <input type='radio' id='star-3' name='rating' value='3' checked={props === 3 ? true : false} onChange={e => { }} />
        <label htmlFor='star-3' title='Оценка «3»'></label>
        <input type='radio' id='star-2' name='rating' value='2' checked={props === 2 ? true : false} onChange={e => { }} />
        <label htmlFor='star-2' title='Оценка «2»'></label>
        <input type='radio' id='star-1' name='rating' value='1' checked={props === 1 ? true : false} onChange={e => { }} />
        <label htmlFor='star-1' title='Оценка «1»'></label>
    </div>
}


export default RatingStars