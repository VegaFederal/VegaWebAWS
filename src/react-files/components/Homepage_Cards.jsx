export default function Homepage_Cards({image, title, description_one, description_two}){
    return (
        <div class='flex flex-col gap-5 w-100 md:h-120 lg:h-150 2xl:h-160 md:w-full bg-primary'>
            <img class='' src={image} alt={title}/>
            <h7 class='text-[20px] md:text-xl font-bold ml-[20px] text-secondary mb-[20px] md:mb-0 mt-[-7rem] md:mt-0 2xl:mt-[-60px]'>{title}</h7>
            <p class='text-[16px] md:text-md ml-[20px] text-white lg:mb-[20px] font-bold'>{description_one}</p>
            <p class='text-[16px] md:text-md ml-[20px] text-white mb-10 md:mb-20 lg:mb-[60px] font-bold'>{description_two}</p>
        </div>
    )
}