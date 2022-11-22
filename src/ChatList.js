import React from "react";

function ChatCard(props) {

  const messageData = props.messageData;
  const userName = messageData.name;
  const imgUrl = messageData.img;
  const imgAlt = userName + 'photo';
  const title = messageData.title;
  const post = messageData.post;


  return(
    <div className="post-container">
          <article className="post">
            <div className="post-row meta">
              <div className="col-1">
                <img src={imgUrl} alt={imgAlt}/>
              </div>
              <div className="col-8">
                {userName}
              </div>
              <div className="col-2">

              </div>
            </div>
            <div className="post-row content">
              <h2>{title}</h2>
              <a href="full-post.html">
                <p>
                  {post}
                </p>
              </a>
            </div>
            <div className="post-row meta2">
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
  const ChatList = props.messageData.map(element => {
    const post = (
      <ChatCard
        messageData={element}
        key={element.name}
      />
    )
    return post;
  });

  return (
    ChatList
  )
}