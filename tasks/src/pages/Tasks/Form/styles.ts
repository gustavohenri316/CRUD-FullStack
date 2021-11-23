import styled from 'styled-components'

export const Container = styled.div`
flex-direction: row;
justify-content: space-between;
Button{
    width: 200px;
    height: 50px;
    border-radius: 30px;
    border: none;
}
Button: hover {
    background-color: red;
}

h3 {
    color: #FFF;
}


  
`
export const Header = styled.div`
display: flex;
Button{
    position: absolute;
    right: 310px;
    width: 200px;
    height: 50px;
    border-radius: 30px;
    border: none;
}
Button: hover {
    background-color: blue;
}
`