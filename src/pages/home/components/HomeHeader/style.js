import styled from "styled-components";
// import bgimage from "./../../../../assets/donatenow.png"


export const StyledHomeHeader = styled.div`

    margin: 0 auto;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    img {
        width: 250%;
        height: 360px;
    }
    div {
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding: 30px 0 20px 25px;
        background-color: var(--primary200);
        /* background-image: url('./../../../../assets/donatenow.png'); */
    }
    h2 {
        font-family: var(--font-family-2);
        font-size: 20px;
        font-weight: var(--font-weight-1);
        line-height: 29px;
        color: var(--primary100);
    }
    h3 {
        font-family: var(--font-family-1);
        font-size: 36px;
        font-weight: var(--font-weight-3);
        line-height: 54px;
        color: var(--primary100);
    }
    @media (min-width: 600px) {
        img {
            width:70%;
            /* height: 360px; */
        }
        div {
            height: 165px;
            width: 70%;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
            background-color: var(--primary200);
        }
	}


`