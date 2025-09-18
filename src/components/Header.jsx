
const Header = ({pageTitle}) => {
    return (
      <header>
      <nav className="navigation">
        <ul className="mb-0">
        </ul>
      </nav>
        <h1> 
          {pageTitle} 
        </h1>
      </header>
    )
  }

export default Header;