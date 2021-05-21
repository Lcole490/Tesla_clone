import React from 'react'
import styled from 'styled-components'

function Section() {
    return (
        <Wrap>
           
        <ItemText>
            <h1>Model S</h1>
            <p>Order Online for Touchless Delivery</p>
        </ItemText>

        <ButtonGroup>
            <LeftButton>
                Custom Order
            </LeftButton>

            <RightButton>
                Existing Inventory

            </RightButton>
        </ButtonGroup>
        </Wrap>
    )
}

export default Section



const Wrap = styled.div `


 width: 100vw;
 height: 100vh;
 
background-image: url('/images/tesla_model_s.jpeg');
background-size: cover;
background-repeat: no-repeat;
background-position: center;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;

`


const ItemText = styled.div `

padding-top: 15vh;
text-align: center;
`


const ButtonGroup = styled.div `

display: flex;
margin-bottom: 30px;
`


const LeftButton = styled.div `

Background-color: rgba(23, 26, 32, 0.8);
height: 40px;
width: 256px;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.85;
text-transform: uppercase;
font-size: 12px;
cursor: pointer;

`


const RightButton = styled(LeftButton) ``