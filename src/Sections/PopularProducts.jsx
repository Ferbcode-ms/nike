
import PopularProductCard from "../Components/PopularProductCard"
import { products } from "../constants"


const PopularProducts = () => {
  return (
    <section id="products" className="max-container ">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold ">
          <span className="text-coral-red">
            Popular
          </span> Products</h2>
        <p className="text-slate-gray mt-2 font-montserrat lg:max-w-lg">Lorem ipsum dolor quod quam ipsum dolorum modi error reprehenderit temporibus necessitatibus corporis assumenda esse porro, impedit molestias blanditiis!</p>
      </div>

      {/* cards */}

      <div className=" sm:mt-16 mt-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 
      sm:gap-4 gap-6">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />


        ))}
      </div>
    </section>
  )
}

export default PopularProducts