import windMill from '../../assets/Windmill.jpg'

export const Card = ({ data }) => {

    const { description, title, price, link } = data

    return (
        <div class='flex p-4 max-w-[145px] ml-2 px-3 mb-4 border-black border-2 m-0 align-middle flex-col justify-center'>
            <span class='flex justify-center'>
                <img class='rounded-xl pt-1' alt='Windmill' width={120} src={windMill} />
            </span>
            <h3 class='font-bold mt-3 mb-5 text-[11px] text-left'>{title}</h3>
            <span class='flex'>
                <p class='font-bold text-[11px]'>${Number(price).toFixed(2)}</p>
                <input type='numeric' class={'focus:outline-gray-200 ml-2 h-4 w-6 border text-[8px] text-center text-gray-500 '} placeholder='1' />
            </span>
            <div class='mt-1 mb-3 max-w-[120px]'>
                <p class='leading-3 text-[9px] text-slate-500'>
                    {description}
                </p>
            </div>
            <div class='m-auto pb-1'>
                <span class='bg-pink-100 text-slate-900 hover:bg-pink-200 cursor-pointer w-20 px-2 py-1 text-xs border border-black'>Add to cart</span>
                <div class='flex justify-center mt-2'>
                    <a href={link || '#'} class='underline text-xs'>Learn more</a>
                </div>
            </div>
        </div>
    )
}