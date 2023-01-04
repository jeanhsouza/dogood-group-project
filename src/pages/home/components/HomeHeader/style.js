import styled from "styled-components";


export const StyledHomeHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0 auto;
    width: 300px;
    height: 500px;
    background-color: red;
    div {
        width: 90%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        padding: 15px;
    }
    img {
        width: 50px;
        height: 50px;
    }
    button {
        margin: 0;
        padding: 0;
    }

`