import Button from "../Components/Button"
import { offer } from "../assets/images"


const SpecialOffers = () => {
  return (
    <section className="flex justify-center wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 ">
        <img src={offer} height={687} width={773} alt="" className="object-contain w-full" />
      </div>

      {/* ------ */}


      <div className="flex flex-1 flex-col">

        <h1 className=" max-sm:mt-2 font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          <span className="text-coral-red inline-block mt-3 max-sm:mt-1">Special</span> Offer

        </h1>
        <p className=" mt-4 lg:max-w-lg info-text">iste molestias dolores iure reiciendis, corrupti quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus similique enim, dicta </p>
        <p className=" mt-4 lg:max-w-lg info-text">Lorem ipsum Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, optio. dolor sit amet consectetur  </p>
        <div className="mt-11 max-sm:mt-6 max-sm:flex-row flex sm:flex-wrap gap-2.5 sm:gap-5">

          <Button label="Shop now" />
          <Button label="Learn more" backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers