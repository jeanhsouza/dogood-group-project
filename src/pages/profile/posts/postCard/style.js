import styled from "styled-components";
export const StyledCard = styled.li`
    width: 280px;

    @font-face {
        font-family: Heebo;
        src: url("https://fonts.googleapis.com/css2?family=Anton&display=swap");
    }   

    @media (min-width: 900px) {  
        width: 280px;

        h2{
            font-size: 20px;
        }

        p{
            font-size: 10px;
        }

        button{
            font-size: 15px;
        }
    }

    h2{
        margin-top: 13px;
        margin-bottom: 5px;

        color: var(--gray100);

        font-size: 1.25rem;
        font-weight: 400;
        line-height: 30px;
    }

    p{
        color: var(--black100);
        font-family: Heebo;

        font-size: 0.7rem;
        font-weight: 400;
        line-height: 15px;
    }

    button{
        font-size: 0.93rem;
        padding: 10px 30px;
        margin-top: 10px;

        background-color: var(--primary200);
        color: var(--primary100);
    } 

    img{
        width: 280px;
        height: 210px;
    }
`