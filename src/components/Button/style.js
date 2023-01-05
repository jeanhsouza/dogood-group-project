import styled, { css } from "styled-components";
export const StyledButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    transition: 0.4s;
    ${({ buttonSize }) => {
        switch (buttonSize) {
            case "default":
                return css`
                    padding: 8px 10px;
                `;
            case "medium":
                return css`
                    padding: 10px;
                `;
        }
    }}
    ${({ buttonStyle }) => {
        switch (buttonStyle) {
            case "brand1":
                return css`
                    background-color: var(--primary200);
                    color: var(--primary100);
                    opacity: 70%;
                    &:hover {
                        opacity: 100%;
                    }
                `;
            case "solid1":
                return css`
                    background: var(--primary200);
                    color: var(--primary100);
                    &:hover {
                        background: var(--gray200);
                        color: var(--white100);
                    }
                `;
            case "solid2":
                return css`
                    background: var(--gray300);
                    color: var(--gray200);
                    &:hover {
                        background: var(--brand100);
                        color: var(--white100);
                    }
                `;
        }
    }}
`;