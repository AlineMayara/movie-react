import React from 'react'
import './Card.css'

const Card = () => {
  return (
    <>
      <section>
        <div id="secao" className="flex-center">
          <button className="backward-btn">
            <span className="material-symbols-outlined">chevron_backward</span>
          </button>

          <button className="forward-btn">
            <span className="material-symbols-outlined">chevron_forward</span>
          </button>
        </div>
      </section>
    </>
  )
}
export default Card
