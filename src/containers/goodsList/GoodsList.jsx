import { useDispatch, useSelector } from "react-redux"
import GoodsItem from "../../components/goodsItem/GoodsItem";




function GoodsList() {
    // const dispatch = useDispatch()
    const goods = useSelector(state => state)



    return <div className="goods__wrapper">
        {goods.map(item => <GoodsItem {...item} key={item.name} />)}

    </div>


}


export default GoodsList