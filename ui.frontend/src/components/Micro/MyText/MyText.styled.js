import styled from "styled-components";

export const TextDiv = styled.div`
    width: 20rem;
`;

export const StyledText = styled.p`
    &.description {
        font-family: 'Space Mono', monospace;
        color: #4F4F4F;
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 2rem;
    }

    &.footer {
        font-family: 'Montserrat';
        color: #BDBDBD;
        font-weight: 500;
        font-size: 0.8rem;
        line-height: 1rem;
        margin-block: 0;
    }
`;
