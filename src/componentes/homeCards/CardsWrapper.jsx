import { Card } from "./Card";
import CARDS from "./utils/CARDS";

export default function CardsWrapper() {

    return (
        <div class="flex justify-start flex-wrap mt-20 m-auto max-w-[700px]">
            {CARDS?.map(dataCard => <Card key={dataCard.id} data={dataCard}/>)}
        </div>
    )
}