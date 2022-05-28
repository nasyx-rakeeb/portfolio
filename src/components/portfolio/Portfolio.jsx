import "./portfolio.css"
import IMG1 from "../../assets/tesla.jpeg"
import IMG2 from "../../assets/disney.jpeg"
import IMG3 from "../../assets/e-commerce.png"
import IMG4 from "../../assets/gpt.png"
import IMG5 from "../../assets/chat.png"

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Tesla Clone",
    github: "https://github.com/nasyx-rakeeb/tesla-clone",
    demo: "https://tesla-clone-4.vercel.app/"
  },
    {
    id: 2,
    image: IMG2,
    title: "Disney Clone",
    github: "https://github.com/nasyx-rakeeb/cp-disney-plus-clone",
    demo: "https://disney-clone-d1e27.web.app/"
  },
    {
    id: 3,
    image: IMG3,
    title: "E-Commerce Website",
    github: "https://github.com/nasyx-rakeeb/ecommerce_sanity_stripe",
    demo: "https://e-commerce-3.vercel.app/"
  },
    {
    id: 4,
    image: IMG4,
    title: "Modern UI/UX Website",
    github: "https://github.com/nasyx-rakeeb/project_modern_ui_ux_gpt3",
    demo: "https://modern-web-1.vercel.app/"
  },
    {
    id: 5,
    image: IMG5,
    title: "Chat App",
    github: "https://github.com/nasyx-rakeeb/airdrop?organization=nasyx-rakeeb&organization=nasyx-rakeeb",
    demo: "https://relp.vercel.app/"
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
                  <a href="/" target="_blank" rel="noreferrer" className="btn">Info</a>
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



















































