import Banner from 'componentes/Banner'
import Card from 'componentes/Card'
import Titulo from 'componentes/Titulo'
import styles from './Inicial.module.scss'
import React, { useEffect, useState } from 'react'

export default function Inicial() {
  const [videos, setVideos] = useState([])

  useEffect(()=>{
    fetch('https://my-json-server.typicode.com/Vinicius-G-F/cine-tag-api/videos')
    .then(resposta=> resposta.json())
    .then(dados=> {setVideos(dados)})
  }, [])

  return (
    <main>
      
      <Banner imagem='home' />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map(video =>{
          return <Card {...video} key={video.id} />
        })}
      </section>
      
    </main>
  )
}
