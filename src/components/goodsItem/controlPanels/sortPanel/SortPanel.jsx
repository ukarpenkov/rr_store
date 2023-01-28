import { useDispatch } from 'react-redux'
import './index.scss'
import { useState } from 'react'

function SortPanel() {
    const [isSortedByName, setIsSortedByName] = useState(false)
    const [isSortedByViews, setIsSortedByViews] = useState(false)
    const [isSortedByStartDate, setIsSortedByStartDate] = useState(false)
    const [isSortedByEndDate, setIsSortedByEndDate] = useState(false)

    const dispatch = useDispatch()

    const sortByName = () => {
        setIsSortedByName(!isSortedByName)
        dispatch({
            type: 'SORT_BY_NAME',
            payload: isSortedByName
        })
    }
    const sortByViews = () => {
        setIsSortedByViews(!isSortedByViews)
        dispatch({
            type: 'SORT_BY_VIEWS',
            payload: isSortedByViews
        })
    }
    const sortByStartDate = () => {
        setIsSortedByStartDate(!isSortedByStartDate)
        dispatch({
            type: 'SORT_BY_START_DATE',
            payload: isSortedByStartDate
        })
    }
    const sortByEndDate = () => {
        setIsSortedByEndDate(!isSortedByEndDate)
        dispatch({
            type: 'SORT_BY_END_DATE',
            payload: isSortedByEndDate
        })
    }


    return <div className='sort-panel'>
        <div className='sort-panel__info-text'>Сортировать:</div>
        <div className='sort-panel__btn' onClick={() => sortByName()}>по названию{isSortedByName ? '↓' : '↑'}</div>
        <div className='sort-panel__btn' onClick={() => sortByViews()}>по просмотрам{isSortedByViews ? '↓' : '↑'}</div>
        <div className='sort-panel__btn' onClick={() => sortByStartDate()}>по дате начала{isSortedByStartDate ? '↓' : '↑'}</div>
        <div className='sort-panel__btn' onClick={() => sortByEndDate()}>по дате окончания{isSortedByEndDate ? '↓' : '↑'}</div>
    </div>
}


export default SortPanel