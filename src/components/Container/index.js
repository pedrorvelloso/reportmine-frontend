import React from 'react'
import { Container, LoginContainer, Cover, Page, PageContent, Brand } from './styles';

import Background from "../../assets/images/background.jpg";
import SiteBg from "../../assets/images/sitebg.png";

const ContainerPage = (props) => {
    return (
        <Container background={SiteBg}>
            <LoginContainer>
                <Cover background={Background} />
                <Page>
                    <Brand>Reportmine © 2019</Brand>
                    <PageContent>{props.children}</PageContent>
                </Page>
            </LoginContainer>
        </Container>
    )
}

export default ContainerPage;