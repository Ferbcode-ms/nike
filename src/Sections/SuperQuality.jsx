import Button from "../Components/Button"
import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex  justify-between items-center max-lg:flex-col
    gap-10 w-full max-container">
      <div className="flex flex-1 flex-col sm:ml-20">

        <h1 className=" max-sm:mt-2 font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          We provide you <span className="text-coral-red inline-block mt-3 max-sm:mt-1">Super</span> <br />
          <span className="text-coral-red inline-block mt-3 max-sm:mt-1">Quality</span> Shoes
        </h1>
        <p className=" mt-4 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eaque porro quis excepturi architecto rem natus illum molestiae iste molestias dolores iure reiciendis, corrupti quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus similique enim, dicta </p>
        <p className=" mt-4 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus similique enim, dicta </p>
        <div className="mt-11">

          <Button label="View Details" />
        </div>
      </div>

      {/* img */}

      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="shoe8"
          width={570}
          height={522}
          className="object-contain" />
      </div>

    </section>
  )
}

export default SuperQuality