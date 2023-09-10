import Layout from '../components/AppLayout.js'
import fetch from 'isomorphic-unfetch'

//data which will be displayed based on the title clicked on the index page
//bootstrap styling used
const Post = (props) => (
    <Layout>
      <div className='card'>
        <div className='card-body'>
          <h2 className='card-title'>{props.data.title}</h2>
          <div className='card-subtitle'>Directed by {props.data.director}</div>
          <div className='card-subtitle'>Produced by {props.data.producer}</div>         
          <div className='card-text'>{props.data.opening_crawl.replace(/<[/]?p>/g, '')}</div>
        </div>
        <style jsx>{`
        .card{text-align: centre; background-image: url("/static/images/star-wars-fantasy-7wry1swbjrgg2o7h.jpg/"); background-size: contain;}
        .card-body{color: white}
        .card-title{font-family: fantasy}
        .card-text {margin: 10px; background-color: rgb(84, 123, 123, 0.5); border-radius: 7px; padding: 5px;}
        .card-subtitle {background-color: rgb(84, 123, 123, 0.5); width: fit-content; margin: 5px; border-radius: 7px; padding: 5px}
        `}</style>
      </div>
    </Layout>
)


Post.getInitialProps = async function (context) {
  //accessing the id of the option that was clicked 
  const { id } = context.query
  // placing that id directly in the api call to get the specific item
  const res = await fetch(`https://swapi.dev/api/films/${id}`)
  const data = await res.json()

  return { data }
}

export default Post