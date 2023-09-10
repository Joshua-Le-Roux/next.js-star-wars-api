import Header from './Header'
import Head from 'next/head'

//creating layout to be used in my /pages
const Layout = (props) => (
  <div >
    {/* using next/head to insert bootstrap stylesheet */}
    <Head>
      <link 
          rel='stylesheet'
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
      />
    </Head>
    <div className='main'>
      {/* where header and /pages files will be rendered */}
      <Header />
      {props.children}
    </div>
    <style jsx>{`.main{ text-align: centre;}`}</style>
  </div>
)

export default Layout
