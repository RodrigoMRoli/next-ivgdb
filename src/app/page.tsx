"use client";

import AlertDefault from "@/components/AlertDefault";

async function fetchCatFacts() {
    try {
        const publicUrl = "https://catfact.ninja/fact";
        const result = await fetch(publicUrl, {
            cache: "no-cache",
        });
        if (!result.ok) {
            throw new Error("Response was not OK");
        }
        const catFact = await result.json();
        console.log(catFact);
        return catFact;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export default async function Home() {
    const catFact = await fetchCatFacts();
    return <AlertDefault title={"Cat Fact"} description={catFact.fact} />;
}
