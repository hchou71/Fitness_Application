import React from 'react';

export function DisccusionPage(props) {
  return(
    <main className="discussion-main">
      <div className="nav-container">
        <div className="container">
          <nav className="row-12 nav-content">
            <ul className="row col-12">
              <li className="col-3 main-li">
                <a href="#" className="material-icons">local_fire_department</a>
                <span>Hot</span>
              </li>
              <li className="col-5 main-li">
                <a href="#" className="material-icons">schedule</a>
                <span>Recent</span>
              </li>
              <li className="col-4 main-li">
                <a href="#" className="material-icons">create</a>
                <span>New Post</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div>
        <section className="container scroll">
        </section>
      </div>

  </main>
  )
}