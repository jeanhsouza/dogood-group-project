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
    width: 280px;
    flex-wrap: wrap; 

    h3{
        color: var(--secundary100);

        font-size:1.9rem;
        font-weight: 400;
        line-height: 54px;
    }

    li{
        margin-top: 20px;
        margin-bottom: 5px;
    }
   
    
    @media (min-width:900px){
        width: 760px;

        h3{ 
            position: relative;
            margin-left: 50px;
            margin-right: 30%;
            font-size: 36px;
        }

        li{
            margin: 24px 50px 50px;
            height: max-content;
        }
    }
`
