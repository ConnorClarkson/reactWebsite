import Header from './Header'
import Sidenav from './Sidenav'

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
}

const Layout = (props) => (
    <div style={layoutStyle}>
        <Sidenav />
        <Header />
        {props.children}
    </div>
)

export default Layout