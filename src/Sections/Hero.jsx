import Button from "../Components/Button"
import ShoeCard from "../Components/ShoeCard"
import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import { shoes, statistics } from "../constants"
import { useState } from "react"


const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1)
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center
    min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 max-sm:mt-2 font-palanquin text-8xl max-sm:text-[50px] max-sm:leading-[60px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival </span>
          <br />
          <span className="text-coral-red inline-block mt-3 max-sm:mt-1">Nike</span> Shoes
        </h1>
        <p className=" font-montserrat text-slate-gray text-lg leading-8 mt-4 mb-8 max-sm:mt-2 max-sm:mb-8
        sm:max-w-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus similique enim, dicta </p>
        <Button label="Show now" iconURl={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full   mt-10 max-sm:mt-8 gap-16 max-sm:gap-8">
          {statistics.map((stat) =>
          (<div key={stat.label}>
            <p className="text-4xl max-sm:text-3xl font-palanquin font-bold">{stat.value}</p>
            <p className="leading-7 font-montserrat text-slate-gray ">{stat.label}</p>
          </div>))}

        </div>
      </div>



      {/* pictire section  */}



      <div className="relative  flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-cover bg-center ">
        <img src={bigShoeImg} alt=""
          width={600}
          height={500}
          className="object-contain  -translate-y-10 z-10 " />

        <div className="flex sm:gap-6 gap-6 absolute bottom-4
        sm:left-[10%] max-sm:px-6  ">
          {shoes.map((shoe, index) => (
            <div key={index}>

              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(Shoe) => setbigShoeImg(Shoe)}
                bigShoeImg={bigShoeImg} />


            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero