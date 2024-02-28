import styled from "styled-components";


const SideBtsLayout = styled.div`
    width: 100px;
    height: 100vh;
    background: #edd;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    margin-top: 20px;
`;

const SideTapLayout = styled.div`
    width: 200px;
    height: 100vh;
    background: #eda;
    display: flex;
    flex-direction: column;
`;

const TapBt = styled.button`
    width: 70px;
    height: 30px;
    background-color: #ada;
    margin-bottom: 15px;
`
const TapMenu = styled.div `
    width: 110px;
    height: 30px;
    background-color: #dfa;
    text-align: left;
    padding-left: 7px;
    line-height: 30px;
    margin-bottom: 5px;
    cursor: pointer;
`
export  { SideBtsLayout, SideTapLayout , TapBt , TapMenu }