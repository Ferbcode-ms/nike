import { star } from "../assets/icons"


const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
    return (
        <div className="flex justify-center items-center flex-col">
            <img src={imgURL} alt="customer"
                className="rounded-full object-cover h-[90px] sm:w-[120px] sm:h-[120px]" />
            <p className="mt-6 max-w-sm text-center max-sm:text-[15px] info-text">{feedback}</p>
            <div className="mt-3 flex justify-center items-center gap-2.5">
                <img src={star}
                    className="object-contain m-0" width={24}
                    height={24} alt="" />

                <p className="text-[15px] sm:text-xl font-montserrat text-slate-gray">({rating})</p>
            </div>
            <h3 className="max-sm:mt-3 mt-1 font-palanquin text-2xl sm:text-3xl text-center font-bold ">{customerName}</h3>
        </div>
    )
}

export default ReviewCard