import Banner from 'componentes/Banner'
import Titulo from 'componentes/Titulo'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './Player.module.scss'
import NaoEncontrada from 'Pages/NaoEncontrada'

export default function Player() {
    const parametro = useParams()
    const id = parametro.id
    const [video, setVideo] = useState()

    // eslint-disable-next-line 
    useEffect(()=>{fetch(`https://my-json-server.typicode.com/Vinicius-G-F/cine-tag-api/videos?id=${id}`).then(resposta=>resposta.json()).then(dado=>{setVideo(...dado)})}, [])

    if(!video){
      return <NaoEncontrada />
    }

  return (
    <>
        <Banner imagem='player' />
        <Titulo>
            <h1>Player</h1>
        </Titulo>
        <section className={styles.container}>
          <iframe 
          width="100%" 
          height="100%" 
          src={video.link} 
          title={video.titulo} 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen></iframe>
        </section>
    </>
  )
}
