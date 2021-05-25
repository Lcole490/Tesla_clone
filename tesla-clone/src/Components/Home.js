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
            backgroundImg = "tesla_model_s.jpg"
            leftBtnText = "Custom Order"
            rightBtnText = "Existing Inventory"/>
            {/* <Section />
            <Section />
            <Section /> */}
            </Container>
        </div>
    )
}

export default Home




const Container = styled.div `

    height: 100vh;
`