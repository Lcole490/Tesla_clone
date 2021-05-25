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

            </Container>
        </div>
    )
}

export default Home




const Container = styled.div `

    height: 100vh;
`