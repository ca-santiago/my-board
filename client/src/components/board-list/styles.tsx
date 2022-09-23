import styled from 'styled-components';

export const BoardCardContainer = styled.div`
    width: 100%;
    background: white;
    box-sizing: border-box;
    padding: 5px 15px;
    margin-top: 10px;
    padding-bottom: 10px;
    border-radius: 5px;
    /* box-shadow: 0px 3px 5px -5px rgb(35, 35, 35),
        0px -1px 5px -4px rgb(35, 35, 35); */
    border: 1px solid rgb(163, 167, 171);
`;

export const BoardCardHeader = styled.h3`
    font-size: 16px;
    margin: 3px;
    margin-left: 0;
    color: rgb(38, 38, 38);
`;

export const SubText = styled.p`
    margin: 0;
    font-size: 10px;
    color: rgb(120, 135, 157);
`;

export const BoardListContainer = styled.div`
    max-width: 50%;
    background-color: #edf0f7;
    height: 100vh;
    min-height: 100vh;
    padding: 5px;
`;

export const CreateBoardContainer = styled.div`
    width: 100%;
    min-height: 40px;
`;

export const BoardTitleInput = styled.input`
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid rgb(163, 167, 171);
`;

export const MainCTA = styled.button`
    width: 100%;
    border: 0;
    margin-bottom: 10px;
    padding: 5px;
    border-radius: 5px;
    color: white;
    background-color: #2b2bad;
    &:hover {
        background-color: #1c1c70;
    }

    &.disabled {
        background-color: #9ba1af;
        color: #242424;
    }
`;
