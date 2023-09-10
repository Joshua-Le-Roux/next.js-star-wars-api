//imported components
import Layout from '../components/AppLayout.js'
import Link from 'next/link'
//used to fetch the data
import fetch from 'isomorphic-unfetch'

const Idx = (props) => (
  <Layout>
    {/* style jsx and bootstrap were giving me some issues so i styled directly in the element */}
    <div className='card' style={{'text-align': 'center', 
    'background-image': 'url("/static/images/199675.jpg/")', 
    'background-size': 'cover',
    'background-repeat': 'no-repeat'}}>
      <div className='card-body'>
        <h1 style={{'font-family': 'fantasy'}}>Star Wars Films</h1>
        <div className='listgroup'>
          {/* will iterate through the info returned from the api call and display them */}
          {props.films.map((film, id ) => (
            <div className='listgroup-item' key={id + 1}>
              {console.log(id + 1)}
              <Link as={`/p/${id + 1}`} href={`/post?id=${id + 1}`}>
                <p style={{'background-color': 'rgb(127, 255, 212, 0.8)'}}>{film.title}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Layout>
)

//api call to get the info for the star wars films
Idx.getInitialProps = async function() {
  const res = await fetch('https://swapi.dev/api/films')
  const data = await res.json()
  const results = await data.results
  //the amount of items that will be displayed
  console.log(data.count)
  return {
    // key value which is accessed via props in Idx above
    films: results
  }
}

export default Idx