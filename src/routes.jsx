import Favoritos from 'Pages/Favoritos'
import Inicial from 'Pages/Inicial'
import NaoEncontrada from 'Pages/NaoEncontrada'
import PaginaBase from 'Pages/PaginaBase/PaginaBase'
import Player from 'Pages/Player'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<PaginaBase />}>
          <Route index element={<Inicial />} />
          <Route path='favoritos' element={<Favoritos />} />
          <Route path=':id' element={<Player />} />
          <Route path='*' element={<NaoEncontrada />} />
        </Route>
      </Routes>

    </BrowserRouter>
  )
}
