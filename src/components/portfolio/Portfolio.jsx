import "./portfolio.css"
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.png"
import IMG6 from "../../assets/portfolio6.jpg"

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Portfolio Project 1",
    github: "/",
    demo: "/"
  },
    {
    id: 2,
    image: IMG2,
    title: "Portfolio Project 2",
    github: "/",
    demo: "/"
  },
    {
    id: 3,
    image: IMG3,
    title: "Portfolio Project 3",
    github: "/",
    demo: "/"
  },
    {
    id: 4,
    image: IMG4,
    title: "Portfolio Project 4",
    github: "/",
    demo: "/"
  },
    {
    id: 5,
    image: IMG5,
    title: "Portfolio Project 5",
    github: "/",
    demo: "/"
  },
    {
    id: 6,
    image: IMG6,
    title: "Portfolio Project 6",
    github: "/",
    demo: "/"
  }
  ]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map( ({id,image,title,github,demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt="error" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} target="_blank" rel="noreferrer" className="btn">GitHub</a>
                  <a href={demo} target="_blank" rel="noreferrer" className="btn">See It Live</a>
                </div>
              </article>
              )
          } )
        }
      </div>
    </section>
    )
}

export default Portfolio



















































