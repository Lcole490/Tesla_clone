import React, { useState } from 'react'
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { Translate } from '@material-ui/icons';
import { selectCar } from "../features/car/carSlice";
import { useSelector } from 'react-redux';

function Header() {



    const [burgerMenuStatus, setBurgerMenuStatus] = useState(false);
    const cars = useSelector(selectCar);



    return (
        <Container>
            <Logo src="/images/tesla_logo.png"/>

            <Menu>

                {cars && cars.map((car, index) =>

                    <a key= {index} href = "#"> {car}</a>
                )}

                    {/* <a href= "#"> Model S</a>           // This is what the above code does
                    <a href= "#"> Model 3</a>
                    <a href= "#"> Model X</a>
                    <a href= "#"> Model Y</a> */}
                    
            </Menu>

            <RightMenu>
                     <a href = "#">Shop</a>
                     <a href = "#">Tesla Account</a>
                     <CustomMenu onClick= {()=> setBurgerMenuStatus(true)}/>
            </RightMenu>

            <BurgerMenu show = {burgerMenuStatus} >
                <BurgerCloseWrapper>
                <BurgerClose onClick = {() => setBurgerMenuStatus(false)}/>
                </BurgerCloseWrapper>

                


                <li><a href = "#">Existing Inventory</a></li>
                <li><a href = "#">Used Inventory</a></li>
                <li><a href = "#">Trade-in</a></li>
                <li><a href = "#">Cybertruck</a></li>
                <li><a href = "#">Roadster</a></li>
                <li><a href = "#">Semi</a></li>
                <li><a href = "#">Charging</a></li>
                <li><a href = "#">PowerWall</a></li>
                <li><a href = "#">Commercial Energy</a></li>
                <li><a href = "#">Utilities</a></li>
                <li><a href = "#">Test Drive</a></li>
                <li><a href = "#">Find Us</a></li>
                <li><a href = "#">Support</a></li>
                <li><a href = "#">United States</a></li>
            </BurgerMenu>

            

            
        </Container>
    )
}

export default Header





const Container = styled.div `


min-height: 60px;
position: fixed;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;
top: 0;
left: 0;
right: 0;
z-index: 1;
`


const Logo = styled.img `

height: 100px;
cursor: pointer;
`

const Menu = styled.div `

display: flex;
align-items: center;
justify-content: center;
flex: 1;

a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
}

@media(max-width: 768px){
    display: none
}
`

const RightMenu = styled.div `

display: flex;
align-items: center;

a{
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: no-wrap;
}
`


const CustomMenu = styled(MenuIcon) `

cursor: pointer;
`



const BurgerMenu = styled.div `

position: fixed;
top:0;
bottom: 0;
right: 0;
background: white;
width: 300px;
z-index: 10;
list-style: none;
padding: 20px;
display: flex;
flex-direction: column;
text-align: start;
text-transform: uppercase;
justify-content: space-between;

transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
transition: transform 0.2s ease-in;

li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
}

a {
    font-weight: 600;

}


`


const BurgerClose = styled(CloseIcon) `

cursor: pointer;
`


const BurgerCloseWrapper = styled.div `


display: flex;
justify-content: flex-end;
`