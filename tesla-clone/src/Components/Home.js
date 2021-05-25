import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <div>
            <Container>
            <Section 
            title = "Model S"
            description = "Order Online for Touchless Delivery"
            backgroundImg = "tesla_model_s.jpeg"
            leftBtnText = "Custom Order"
            rightBtnText = "Existing Inventory"/>


            <Section 
            title = "Model 3"
            description = "Order Online for Touchless Delivery"
            backgroundImg = "tesla_model_3.jpg"
            leftBtnText = "Custom Order"
            rightBtnText = "Existing Inventory"/>

            <Section 
            title = "Model X"
            description = "Order Online for Touchless Delivery"
            backgroundImg = "tesla_model_s.jpeg"
            leftBtnText = "Custom Order"
            rightBtnText = "Existing Inventory"/>

            <Section 
            title = "Model Y"
            description = "Order Online for Touchless Delivery"
            backgroundImg = "tesla_model_y.jpg"
            leftBtnText = "Custom Order"
            rightBtnText = "Existing Inventory"/>


            <Section 
            title = "Lowest Cost Solar Panels in America"
            description = "Money-back guarantee"
            backgroundImg = "tesla_solar_panels.jpg"
            leftBtnText = "Order Now"
            rightBtnText = "Learn More"/>

            <Section 
            title = "Solar for New Roofs"
            description = "Solar Roof Costs Less Than a New Roof"
            backgroundImg = "tesla_roof.jpg"
            leftBtnText = "Order Now"
            rightBtnText = "Learn More"/>

        
            <Section 
            title = "Accessories"
            description = ""
            backgroundImg = "accessories.jpg"
            leftBtnText = "Shop Now"
            rightBtnText = ""/>

            </Container>
        </div>
    )
}

export default Home




const Container = styled.div `

    height: 100vh;
`