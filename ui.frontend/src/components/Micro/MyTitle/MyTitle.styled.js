import styled from "styled-components";

export const TitleDiv = styled.div`
    width: 37rem;

    @media (max-width: 960px) {
        width: 24rem;
    }

    @media (max-width: 768px) {
        width: 18rem;
    }
`;

export const StyledTitle = styled.h2`
    &.description {
        font-family: 'Space Mono', monospace;
        color: #333333;
        font-weight: 700;
        font-size: 3.2rem;
        line-height: 4.75rem;
        margin-block:0;
        margin-bottom: 1.6rem;

        @media (max-width: 960px) {
            font-size: 2.6rem;
            line-height: 3rem;
        }

        @media (max-width: 768px) {
            font-size: 2.4rem;
            line-height: 3.55rem;
            margin-bottom: 1rem;
        }

        @media (max-width: 376px) {
            line-height: 3rem;
            margin-bottom: 0.5rem;
        }
    }

    &.header {
        font-family: 'Inconsolata';
        color: #333333;
        font-weight: 700;
        font-size: 1.2rem;
    }
`;