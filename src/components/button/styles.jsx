import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const StyledButton = styled.button`
    background-color: ${theme.primaryDarkColor};
    cursor: pointer;
    color: pink;

    &:hover {
        background-color: black;
    }
`;