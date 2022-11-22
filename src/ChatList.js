import React from "react";

function ChatCard(props) {

  const messageData = props.messageData;
  const userName = messageData.name;
  const imgUrl = messageData.img;
  const imgAlt = userName + 'photo';
  const title = messageData.title;
  const post = messageData.post;


  return(
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
  )
}

export function ChatList(props) {

}