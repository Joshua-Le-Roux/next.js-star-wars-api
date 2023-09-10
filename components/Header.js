import Link from 'next/link'

//header component to navigate to home page
//using the next/link
const Header = () => (
  <div className="card" >
    <div className="card-header">
      <div className="nav">
        <div className="nav-item">
          <Link href="/">
            <p><b>Home</b></p>
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default Header
