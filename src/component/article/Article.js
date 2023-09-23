import React from 'react';
import { useContext } from 'react';
import { ContextData } from '../../data/Data';
import { useParams, Link } from 'react-router-dom';
import './Article.css';
import Footer from '../footer/Footer'

const writter = [
  { name: "Ajay Dhangar", date: "28th July, 2023", img: 'https://avatars.githubusercontent.com/u/99037494?v=4', },
  { name: "Ajay Dhangar", date: "1st August, 2023", img: 'https://avatars.githubusercontent.com/u/99037494?v=4' },
  { name: "Ajay Dhangar", date: "30th July, 2023", img: 'https://avatars.githubusercontent.com/u/99037494?v=4' },
];

const Article = () => {
  const [data] = useContext(ContextData);
  let { path } = useParams();
  path = +path;
  let categories;
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === path) {
      categories = data[i].category;
      break;
    }
  }

  // Randomly select a writer's information for this article
  const randomWriterIndex = Math.floor(Math.random() * writter.length);
  const writerInfo = writter[randomWriterIndex];

  return (
    <>
      <div className='ArticleContainer'>
        <div className='extra-Content'>
          <img src="https://api.iconify.design/ic:outline-share.svg" alt="share" className='share-icon' /> <br />
          <img src="https://api.iconify.design/ph:hands-clapping.svg" alt="Clap" style={{ marginTop: '15px' }} className='share-icon' />
        </div>
        <div className='all-article-content'>
          {data
            .filter((value) => value.id === path)
            .map((val) => {
              return (
                <>
                  <div className="article-container">
                    <h2 className='article-title'>{val.name}</h2>
                    <img src={val.image} alt="" className="article-img" />
                    <div className="writter-container">
                      <div className='writer-header'>
                        <div className='writter-info-container'>
                          <img src={writerInfo.img} alt="" className="writerInfo-img" />
                          <div className='render-text-info'>
                            <p className="writer-name">Written By: <span className='name-info'>{writerInfo.name}</span></p>
                            <p className="written-date">Date: {writerInfo.date}</p>
                          </div>
                        </div>
                        <div className='social-icons'>
                          <ul className="icons">
                          <li><Link className="github" to="https://github.com/React-js-Mastery/blog-app" target="_blank"><i className="fa fa-github"></i></Link></li>
                            <li><Link className="twitter"  to="https://twitter.com/AJAYDHA27250016" target="_blank"><i className="fa fa-twitter"></i></Link></li>
                            <li><Link className="youtube-play" to="https://www.youtube.com/channel/UCRQBq8dfTEZfIMxmq-Ba9Tw" target="_blank"><i className="fa fa-youtube-play"></i></Link></li>
                            <li><Link className="linkedin" to="https://www.linkedin.com/in/ajay-dhangar/" target="_blank"><i className="fa fa-linkedin"></i></Link></li>
                         </ul>                          
                        </div>
                      </div>
                    </div>
                    <p className='article-content'>
                      {val.content}
                    </p>
                    <div className='like-img'>
                      <img src='https://api.iconify.design/ph:thumbs-up-duotone.svg' alt='like' className='share-icon' />
                      <img src='https://api.iconify.design/ic:outline-share.svg' alt="share" style={{ marginLeft: '10px' }} className='sb share-icon' />
                      <img src="https://api.iconify.design/ph:hands-clapping.svg" alt="Clap-2" style={{ marginLeft: '10px' }} className='cb share-icon' />
                    </div>
                    <hr
                      style={{ marginTop: '2rem', position: 'relative', width: '100%' }}
                    />
                  </div>
                </>
              )
            })}

          <div className="article-bottom-info">
            {data
              .filter((value) => value.id !== path && value.category === categories).slice(2, 6)
              .map((val) => (
                <div key={val.id} className="article-botton-contener">
                  <Link
                    to={`/article/${val.id}`}
                    style={{ position: 'relative', width: '5rem' }}
                  >
                    <img src={val.image} alt="img" className="article-botton-img" />
                  </Link>

                  <h3>{val.details || val.desc}</h3>
                  <h2 className="article-bottom-texts">{val.name}</h2>
                  <span className='extra-main-info'>
                    Date:
                  </span>
                  <span className='extra-info'>
                    TODAY
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};


export default Article;
