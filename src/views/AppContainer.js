import React from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'



const Container = styled.div`
    width:100%;
    height:100%;
    position:absolute;
`



export default class AppContainer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Container>
                hello world
            </Container>
        )
    }
}

