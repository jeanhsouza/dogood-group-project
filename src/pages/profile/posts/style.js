import styled from "styled-components";
export const StyledPosts = styled.ul`
    @font-face {
        font-family: Anton;
        src:  url("https://fonts.googleapis.com/css2?family=Anton&display=swap");
    }

    *{
        font-family: Anton;
    }

    display: flex;
    margin: 80px auto;
    width: 760px;
    flex-wrap: wrap; 

    h3{
       position: relative;

       margin-left: 50px;
       margin-right: 30%;

        color: var(--secundary100);

       font-size: 36px;
       font-weight: 400;
       line-height: 54px;
    }

    li{
        margin: 24px 50px 50px;
        height: max-content;
    }
`
