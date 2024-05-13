import { DataAPI } from "../types/productsAPI.type"

const Card = ({product, isLoading} : {product: DataAPI, isLoading: boolean}) => {


  return (
    <div className='containerCard'>
      <img src={product.images} alt="" className='imgProduct'/>
      <p>${product.price}</p>
    </div>
  )
}

export default Card
