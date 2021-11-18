import styled from 'styled-components'

export const Container = styled.div`

flex-direction: row;
justify-content: space-between;

Button{
    border-radius: 30px;
    cursor: pointer;
}
.botao{
    position: absolute;
    right: 310px;
    width: 200px;
    height: 50px;
    border-radius: 30px;
    cursor: pointer;
    background-color: #212529;
    color: #FFF;
    border: none;
}
    .botao: hover{
        background-color: red;
    }


`
export const Header = styled.div`

Button{
    position: absolute;
    right: 310px;
    width: 200px;
    height: 50px;
    border-radius: 30px;
    cursor: pointer;
}
input{
    width: 300px;
    height: 50px;
    border: 1px solid;
    border-radius: 30px;
    margin-left: 00px;
    border: 1px solid;
    background-color: transparent;
}
.icon {
    width: 50px;
    height: 50px;
    margin-left: 10px;
    color: gray;
    cursor: pointer;
}
.icon:hover {
    color: #000;
}
`