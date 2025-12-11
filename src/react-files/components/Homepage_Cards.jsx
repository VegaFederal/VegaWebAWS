export default function Homepage_Cards({image, title, description_one, description_two}){
    return (
        <div class='flex flex-col gap-5 w-100 sm:h-145 md:w-full bg-primary '>
            <img class='' src={image} alt={title} className='w-full'/>
            <h7 class='text-[20px] md:text-xl font-bold ml-[20px] text-secondary mb-[20px] md:mb-0 mt-[4rem] pr-5'>{title}</h7>
            <p class='text-[16px] md:text-md ml-[20px] text-white lg:mb-[20px] font-bold pr-5'>{description_one}</p>
        </div>
    )
}