import Image from 'next/image';
import styled, {ThemeProvider} from 'styled-components';
import Navigation from './navigation'

const theme = {
    navigationHeight: "60px",
    mainPadding: "20px 20px"
}

function Layout({children, seasons}) {

    return (
        <ThemeProvider theme={theme}>
            <BackWrapper>
                <Image
                    alt="Mountains"
                    src="/background.webp"
                    layout="fill"
                    objectFit="cover"
                />
            </BackWrapper>
            <Navigation seasons={seasons} />
            <CompWrapper>
                {children}
            </CompWrapper>
        </ThemeProvider>
    )
}

const BackWrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: -1;

    padding: 0;
    margin: 0;
    
`;

const CompWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export default Layout
