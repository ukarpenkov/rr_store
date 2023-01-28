import { useDispatch } from 'react-redux'
import './index.scss'
import { useEffect, useState } from 'react'


function SearchInput() {
    const dispatch = useDispatch()
    const [searchTerm, setSearchTerm] = useState('')

    const keydownHandler = ({ key }) => {
        switch (key) {
            case "Enter":
                findGoods()
                break;
            default:
        }
    }

    const findGoods = () => {
        dispatch({
            type: "SEARCH_GOODS",
            payload: searchTerm
        })
        setSearchTerm('')
    }

    useEffect(() => {
        document.addEventListener('keydown', keydownHandler)
        return () => document.removeEventListener('keydown', keydownHandler)
    })


    return <div className='search-instruments'>
        <button
            className='search-instruments__input-btn'
            onClick={() => findGoods()}
        >
        </button>
        <input
            className='search-instruments__input-field'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type='text'
            placeholder='Поиск...'
        />
    </div>
}


export default SearchInput