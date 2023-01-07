import styled from "styled-components";

export const StyledDashControlPanel = styled.section`
    height: max-content;
    width: 92%;
    max-width: 1000px;
    margin: 32px auto 0;
    display: flex;
    flex-direction: column;
    gap: 40px;
    transition: .5s ease-in-out;

    @media (min-width: 600px) {
            gap: 60px;
        }

    & > div:nth-child(1){
        display: flex;
        flex-direction: column;
        gap: 32px;
        height: max-content;
        width: 100%;


        @media (min-width: 600px) {
            flex-direction: row-reverse;
            justify-content: space-between;
        }

        @media (min-width: 900px) {

        }

        & > div:first-child{
            display: flex;
            gap: 18px;
        }

        & > div:last-child{
            h2{
                color: var(--primary100);
                font-size: var(--font-size-1);
                font-family: var(--font-family-1);
                letter-spacing: .5px;
                line-height: var(--line-height);
                font-weight: var(--font-weight-3);
                transition: .5s ease-in-out;                

                @media (min-width: 600px) {
                    font-size: var(--font-size-0);
                }

                @media (min-width: 900px) {
                    font-size: calc(var(--font-size-0)*1.2);
                }

            }
        }
    }
`;