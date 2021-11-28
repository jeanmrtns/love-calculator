import { ReactElement } from 'react';
import Header from '../Header';
import { Container } from './styles';

interface LayoutProps {
    children: ReactElement
}

function Layout( { children }: LayoutProps) {

    return (
        <Container>

            <Header />

            {children}

        </Container>
    )
}

export default Layout;