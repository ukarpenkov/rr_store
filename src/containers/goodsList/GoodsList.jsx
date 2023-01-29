import { useSelector } from 'react-redux'
import GoodsItem from '../../components/goodsItem/GoodsItem'
import './index.scss'
import SortPanel from '../../components/goodsItem/controlPanels/sortPanel/SortPanel'
import SearchInput from '../../components/goodsItem/controlPanels/searchInput/SearchInput'
import { useEffect, useState } from 'react'
import Pagination from '../../components/pagination/Pagination'


function GoodsList() {
    const goods = useSelector(state => state.goods)
    const filteredData = useSelector(state => state.filteredGoods)
    const goodsWithFilter = goods.filter(good => good.name.toLowerCase().includes(filteredData.toLowerCase()))
    const [goodListWithFilter, setGoodListWithFilter] = useState(goodsWithFilter)

    const totalGoods = goodsWithFilter.length
    const [currentPage, setCurrentPage] = useState(1)
    const [goodsPerPage, setGoodsPerPage] = useState(totalGoods)
    const lastGoodIndex = currentPage * goodsPerPage
    const firstGoodIndex = lastGoodIndex - goodsPerPage
    const currentGoods = goodListWithFilter.slice(firstGoodIndex, lastGoodIndex)


    const paginate = pageNumber => setCurrentPage(pageNumber)
    const nextPage = () => setCurrentPage(prev => {
        if (prev >= (totalGoods / goodsPerPage)) {
            return prev
        }
        return prev + 1
    })
    const prevPage = () => setCurrentPage(prev => {
        if (prev === 1) {
            return prev
        }
        return prev - 1

    })


    useEffect(() => {
        setGoodListWithFilter(goodsWithFilter)
    }, [filteredData, goods])

    const getAllList = () => {
        setGoodListWithFilter(goods)
    }

    return <div className='goods-page'>
        <h1 className='goods-page__header'>Карточки контента</h1>
        <div className='controls_wrapper'>
            <SortPanel />
            <SearchInput />
        </div>
        <div>
            <Pagination
                goodsPerPage={goodsPerPage}
                totalGoods={totalGoods}
                paginate={paginate}
                setGoodsPerPage={setGoodsPerPage}
                nextPage={nextPage}
                prevPage={prevPage}
            />
        </div>
        {
            goodListWithFilter.length
                ?
                <div className='goods-wrapper'>
                    <div className='goods-header'>
                        <div className='goods-header__item'>Фото</div>
                        <div className='goods-header__item'>Название</div>
                        <div className='goods-header__item'>Просмотры</div>
                        <div className='goods-header__item'>Начало ротации</div>
                        <div className='goods-header__item'>Конец ротации</div>
                    </div>
                    {currentGoods.map(item => <GoodsItem {...item} key={item.name} />)}
                </div>
                :
                <div className='no-goods'>
                    <h1>
                        Такого товара нет!
                    </h1>
                    <button
                        className='go-back-btn'
                        onClick={() => getAllList()}
                    >Перейти ко всему списку
                    </button>
                </div>
        }
    </div>

}


export default GoodsList