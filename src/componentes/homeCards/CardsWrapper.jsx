import { useState } from "react";
import { Card } from "./Card";
import { calculateQuantititys } from "./utils/calculateQuantitys";
import { calculateSum } from "./utils/calculateSum";
import CARDS from "./utils/CARDS";

export default function CardsWrapper() {

    const [dataCards, setDataCards] = useState(CARDS)

    const updateDataCards = (id, q) => {
        const indexToUpdate = dataCards.findIndex(x => x.id === id)
        const dataUpdated = { ...dataCards, [indexToUpdate]: { ...dataCards[indexToUpdate], quantity: q } }
        setDataCards(Object.entries(dataUpdated || {}).flatMap((x => x[1])))
    }

    return (
        <>
            <div class='grid max-w-[1440px] justify-center mx-auto  mt-8 gap-y-3 gap-x-2 grid-cols-fluid'>
                {dataCards?.sort((a, b) => a.id - b.id).map(dataCard => <Card updateDataCards={updateDataCards} key={dataCard.id} data={dataCard} />)}
            </div>
            <span class='flex justify-center'>
                <h2 class='font-bold ml-2 inline text-xl'>Suma total:</h2>
                <p class='inline ml-2 text-center text-xl'>${calculateSum(dataCards)} de {calculateQuantititys(dataCards)} items</p>
            </span>
        </>
    )
}