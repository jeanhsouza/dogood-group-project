import styled from "styled-components";



export const StyledDonationModal = styled.div`
    background-color: RGBA( 0, 0, 0, 0.4 );
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: 20;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .modalWrapper {
        background-color: #FFFFFF;
        width: 696px;
        height: 445px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .headerContainer {
        margin: 30px 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        /* background-color: blue; */
    }
    .titleContainer {
        display: flex;
        justify-content: center;
        width: 100%;
        /* background-color: red; */
        color: var(--gray100);
        font-family: var(--font-family-1);
        font-weight: var(--font-weight-3);
        font-size: var(--font-size-1);
        line-height: 39px;
    }
    .closeButton {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        background-color: green;
        border: 1px solid var(--primary100);
        border-radius: 5px;
        background-color: var(--primary200);
        color: var(--primary100);
    }
    .descriptionContainer {
        width: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80px;
        background-color: var(--primary200);
        color: var(--primary100);
        border-radius: 10px;
    }
    .donationForm {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 90%;
        height: 300px;
    }
    input {
        color: var(--gray100);
        /* width: 100px; */
        height: 50px;
        font-family: var(--font-family-2);
        font-weight: var(--font-weight-3);
        font-size: var(--font-size-5);
        line-height: 20px;
        border-bottom: 2px solid var(--gray100);
    }
    .cardInput{
        width: 50px;
    }
    .donationButton {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 74px;
        background-color: var(--primary100);
        color: #FFFFFF;
        font-family: var(--font-family-1);
        font-weight: var(--font-weight-3);
        font-size: 20px;
        line-height: 30px;
        border-radius: 10px ;
        margin-top: 5px;
    }

`