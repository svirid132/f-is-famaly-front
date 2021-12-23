import Image from 'next/image';
import styled from 'styled-components';
import Navigation from './navigation'

function Layout({children, seasons}) {

    return (
        <>
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
        </>
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
  max-width: 900px;
  margin: 0 auto;
`;

export default Layout
