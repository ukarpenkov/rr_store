import { useDispatch } from 'react-redux'
import './index.scss'
import { useEffect, useState } from 'react'


function SearchInput() {
    const [searchTerm, setSearchTerm] = useState('')

    const keydownHandler = ({ key }) => {
        switch (key) {
            case 'Enter':
                findGoods()
                break;
            default:
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', keydownHandler);
        return () => document.removeEventListener('keydown', keydownHandler);
    });
    const dispatch = useDispatch()


    const findGoods = () => {
        dispatch({
            type: "SEARCH_GOODS",
            payload: searchTerm
        })
        setSearchTerm('')
    }

    return <div className='search-instruments'>
        <button className="search__input-btn" onClick={() => findGoods()}></button>
        <input className="search__input-field" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder="Поиск..." />
    </div>
}


export default SearchInput