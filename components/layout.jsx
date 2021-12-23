import Navigation from './navigation'

function Layout({children, seasons}) {
    return (
        <>
            <Navigation seasons={seasons} />
            {children}
        </>
    )
}

export default Layout
