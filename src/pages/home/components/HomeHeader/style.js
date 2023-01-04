import styled from "styled-components";



export const StyledHomeHeader = styled.div`
    background-color: var(--primary200);
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    img {
        width: 100%;
    }
    div {
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding: 30px 0 20px 25px;
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



`