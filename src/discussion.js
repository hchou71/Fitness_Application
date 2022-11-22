import React from 'react';

export function DiscussionPage(props) {
  return(
    <main className="discussion-main">
      <div className="nav-container">
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

      <div>
        <section className="scroll">

        <div className="row post-container">
          <article className="post">
            <div className="row meta">
              <div className="col-1">
                <img src="./public/img/user-icon.png" alt="User Image"/>
              </div>
              <div className="col-8">
                UserName
              </div>
              <div className="col-2">

              </div>
            </div>
            <div className="row content">
              <h2>Motivation to go to the gym</h2>
              <a href="full-post.html">
                <p>
                  Hi, I am relatively new to the gym and with all the work and stuff going on, I feel
                  rly burt out and am wondering what keeps you guys motivated to go to the gym? Maybe
                  my willpower just insn't strong enough yet. I am wondering is there anything I can do
                  to make myself more motivated to go the gym?
                </p>
              </a>
            </div>
            <div className="row meta2">
              <div className="col-4 col-sm-2">
                <a href="#" className="material-icons">favorite_border</a>
                <span>42</span>
              </div>
              <div className="col-4 col-sm-2">
                <a href="#" className="material-icons">question_answer</a>
                <span>13</span>
              </div>
              <div className="col-4 col-sm-2">
                <a href="#" className="material-icons">bookmark_border</a>
              </div>
            </div>
          </article>
        </div>

        </section>
      </div>

  </main>
  )
}