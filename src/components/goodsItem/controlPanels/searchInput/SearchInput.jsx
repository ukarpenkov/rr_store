import { useDispatch } from 'react-redux'
import './index.scss'
import { useState } from 'react'


function SearchInput() {
    const [searchTerm, setSearchTerm] = useState('')

    const dispatch = useDispatch()


    const findGoods = () => {
        setSearchTerm('')
        dispatch({
            type: "SEARCH_GOODS",
            payload: searchTerm
        })
    }

    return <div>
        <input className="search__input" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder="🔍 Поиск..." />
        <button onClick={() => findGoods()}>Искать</button>
    </div>
}


export default SearchInput