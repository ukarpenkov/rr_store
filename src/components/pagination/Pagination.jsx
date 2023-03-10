import './index.scss'

function Pagination({ goodsPerPage, totalGoods, paginate, setGoodsPerPage, nextPage, prevPage }) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalGoods / goodsPerPage); i++) {
        pageNumbers.push(i)
    }

    const changeBthHandler = (e) => {
        if (Number(e.target.value) === totalGoods) {
            paginate(1)
        }
        setGoodsPerPage(e.target.value)
    }

    return (
        <div className='pagination'>
            <button className='pagination__btn' onClick={() => prevPage()}>{'<'}</button>
            {
                pageNumbers.map(number => (
                    <button className='pagination__btn' key={number} onClick={() => paginate(number)}>{number}</button>
                ))
            }
            <button className='pagination__btn' onClick={() => nextPage()}>{'>'}</button>
            <select className='pagination__select pagination__btn' onChange={(e) => changeBthHandler(e)}>
                <option value={totalGoods}>Все</option>
                <option value={3}>3</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
            </select>
        </div>
    )
}

export default Pagination