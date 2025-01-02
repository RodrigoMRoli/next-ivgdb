import { fetchCatFacts } from "@/actions/fetch-cat-facts";
import AlertDefault from "@/components/alert-default";
import CardDefault from "@/components/card-default";

export default async function Home() {
    const catFact = await fetchCatFacts();
    return (
        <CardDefault
            cardTitle="Cat Fact"
            cardDescription="A random cat fact..."
            cardActionLabel="Send"
        >
            <AlertDefault
                title={"Cat Fact"}
                description={catFact}
            ></AlertDefault>
        </CardDefault>
    );
}
