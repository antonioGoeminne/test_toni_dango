import { useState } from 'react'
import windMill from '../../assets/Windmill.jpg'

export const Card = ({ updateDataCards, data }) => {

    const { description, title, price, link, id } = data

    const [newTitle, setNewTitle] = useState(title)
    const [editTitle, setEditTitle] = useState(false)
    const [fontTitleSize, setFontTitleSize] = useState('11')

    const [quantity, setQuantity] = useState(1)

    const changeTitle = (bool) => setEditTitle(bool)

    const handleNewTitle = (e) => { setNewTitle(e.target.value) }

    const changeValue = (e) => { setFontTitleSize(e.target.value) }


    return (
        <div class='flex p-4 max-w-[145px] ml-2 px-3 mb-4 border-black border-2 m-0 align-middle flex-col justify-center'>
            <span class='flex justify-center'>
                <img class='rounded-xl pt-1' alt='Windmill' width={120} src={windMill} />
            </span>
            {!editTitle
                ? <h3 onClick={() => changeTitle(true)} class={`font-bold cursor-pointer mt-[15px] mb-5 text-[${fontTitleSize}px] text-left hover:underline`}>{newTitle}</h3>
                :
                <>
                    <textarea class={` resize-none font-bold mt-3 mb-5 text-[${fontTitleSize}px] text-left`} onChange={handleNewTitle} value={newTitle} />
                    <input onChange={changeValue} value={fontTitleSize} min="11" max="15" type='range' class="w-full h-3 mb-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                    <button class={`m-2 border rounded-sm ${!newTitle.length ? 'bg-gray-200' : 'hover:bg-gray-100'} ${!newTitle.length ? 'bg-gray-200' : 'bg-white'}`} disabled={!newTitle.length} onClick={() => changeTitle(false)}>Guardar</button>
                </>
            }
            <span class='flex'>
                <p class='font-bold text-[11px]'>${Number(price).toFixed(2)}</p>
                <input onChange={(e) => { updateDataCards(id, Number(e.target.value)); setQuantity(Number(e.target.value)) }} value={quantity} pattern='[*9]' type='numeric' class={'focus:outline-gray-200 ml-2 h-4 w-6 border text-[8px] text-center text-gray-500 '} placeholder='1' />
            </span>
            <div class='mt-1 mb-3 max-w-[120px]'>
                <p class='leading-3 text-[9px] text-slate-500'>
                    {description}
                </p>
            </div>
            <div class='m-auto pb-3'>
                <span class='bg-[#ead7e5] text-slate-900 hover:bg-[#d3c2ce] cursor-pointer w-20 px-2 py-1 text-xs border border-black'>Add to cart</span>
                <div class='flex justify-center mt-2'>
                    <a href={link || '#'} class='underline text-xs'>Learn more</a>
                </div>
            </div>
        </div>
    )
}