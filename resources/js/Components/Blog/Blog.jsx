import React from 'react'
import './blog.css'

import {BsArrowRightShort} from 'react-icons/bs'

import img from '../../Assets/image(2).jpg'
import img2 from '../../Assets/image(3).jpg'
import img3 from '../../Assets/image(9).jpg'
import img4 from '../../Assets/image(10).jpg'

import { createRoot } from 'react-dom/client';

const Posts = [
    {
      id: 1,
      postImage: img,
      title: 'Lorem, ipsum dolor.',
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, soluta veniam exercitationem est commodi tempore.',
    },
    {
      id: 2,
      postImage: img2,
      title: 'Lorem, ipsum dolor.',
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, soluta veniam exercitationem est commodi tempore.',
    },
    {
      id: 3,
      postImage: img3,
      title: 'Lorem, ipsum dolor.',
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, soluta veniam exercitationem est commodi tempore.',
    },
    {
      id: 4,
      postImage: img4,
      title: 'Lorem, ipsum dolor.',
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, soluta veniam exercitationem est commodi tempore.',
    },
]


const Blog = () => {
  return (
    <section className='blog container section'>
      <div className="secContainer">

        <div className="secIntro">
          <h2 className='secTitle'>
            Nuestro Mejor Blog?
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="mainContainer grid">
          {
            Posts.map(({ id, postImage, title, desc }) => {
              return (
                <div className="singlePost" key={id}>
                  <div className="imgDiv">
                    <img src={postImage} alt={title} />
                  </div>

                  <div className="postDetails">
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>

                  <a href="#" className='flex'>
                    <BsArrowRightShort className="icon" />
                    Saber Mas
                  </a>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}


export default Blog

if (document.getElementById('blog')) {
  const Index = createRoot(document.getElementById("blog"));

  Index.render(
      <React.StrictMode>
          <Blog/>
      </React.StrictMode>
  )
}