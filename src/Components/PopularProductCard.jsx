import { star } from "../assets/icons"


const PopularProductCard = ({ imgURL, name, price }) => {
    return (
        <div className="flex flex-1 flex-col w-full max-sm:w-full">
            <img src={imgURL} alt={name}
                className="w-[230px] h-[230px] max-sm:h-[200px]" />
            <div className="flex justify-start gap-2.5">
                <img src={star} alt="rating" width={18} height={18} />
                <p
                    className=" font-montserrat leading-normal text-slate-gray ">{4.5}</p>
            </div>
            <h3 className="mt-2 sm:text-xl leading-normal font-semibold   font-palanquin">{name}</h3>
            <p className="mt-2 font-semibold font-montserrat text-coral-red leading-normal">{price}</p>
        </div>
    )
}

export default PopularProductCard