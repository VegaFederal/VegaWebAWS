export default function Homepage_Cards({image, title, description_one, description_two}){
    return (
        <div class='flex flex-col gap-5 w-130 md:w-full bg-primary'>
            <img src={image} alt={title}/>
            <h7 class='text-[20px] font-bold ml-[20px] text-secondary mb-[20px] mt-[-200px] md:mt-0'>{title}</h7>
            <p class='text-[16px] ml-[20px] text-white mb-[20px]'>{description_one}</p>
            <p class='text-[16px] ml-[20px] text-white mb-[60px]'>{description_two}</p>
        </div>
    )
}