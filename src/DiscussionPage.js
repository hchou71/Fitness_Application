import React from 'react';
import { ChatList } from './ChatList.js';

export function DiscussionPage(props) {
  return(
    <div>
      <header className='discussion-pg'>
        <div className="container-fluid">
          <h1>Discussion Page</h1>
        </div>
      </header>

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
            <ChatList messageData={props.messageData}/>
          </section>
        </div>

      </main>
    </div>

  )
}