import React from 'react'
import './styles.css'
import Data from './data/index'

export default function App() {
  return (
    <div className="main">
      <div className="ocuped-all">
        <div className="title">
          <p>Titulo</p>
        </div>

        <Data />
      </div>
    </div>
  );
}