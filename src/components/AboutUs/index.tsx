import {
    Container,
    Wrapper
} from "./about-us.styles"

import {useEffect} from "react";
import {useReadyStore} from "../../ready.store.ts";

export function AboutUs() {
    const {makeAboutUsReady} = useReadyStore();
    useEffect(() => {
        makeAboutUsReady();
    }, [makeAboutUsReady]);
    return (
<Wrapper id={"quem-somos"}>
        <Container>


        </Container>
</Wrapper>
    )
}
