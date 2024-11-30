import React from 'react';
import './mainFeed.css'

function MainFeed() {
  return (
    <div className="mainFeed">
      <div className="wrapper">
        <div className="feed-list">
          <div className="write-feed">
            <div className="profile-image"></div>
            <div className="inp">
              <input type="text" placeholder="오늘 무슨 일이 있었나요?" />
            </div>
            <div className="get-image">
              <label htmlFor="get-image-input">
                <img src="/assets/main/add-image.svg" alt="addImage" />
              </label>
              <input id="get-image-input" type="file" />
            </div>
          </div>
          <div className="feed">
            <div className="top">
              <div className="profile-image"></div>
              <div className="profile-desc">
                <div className="nickname">paesir</div>
                <div className="timeStamp">8:15 pm, yesterday</div>
              </div>
            </div>
            <div className="contents">
              contents
            </div>
            <div className="bottom">
              <div className="like">
                <div className="asset">
                  <img src="/assets/feed/like-dac.svg" alt="like" />
                </div>
                <div className="count txt-bold">25k</div>
              </div>
              <div className="comment">
                <div className="asset">
                  <img src="/assets/feed/comment.svg" alt="comment" />
                </div>
                <div className="count txt-bold">2k</div>
              </div>
            </div>
          </div>
          <div className="feed">
            <div className="top">
              <div className="profile-image"></div>
              <div className="profile-desc">
                <div className="nickname">paesir</div>
                <div className="timeStamp">8:15 pm, yesterday</div>
              </div>
            </div>
            <div className="contents">
              contents
              <div className="image"></div>
            </div>
            <div className="bottom">
              <div className="like">
                <div className="asset">
                  <img src="/assets/feed/like-dac.svg" alt="like" />
                </div>
                <div className="count txt-bold">25k</div>
              </div>
              <div className="comment">
                <div className="asset">
                  <img src="/assets/feed/comment.svg" alt="comment" />
                </div>
                <div className="count txt-bold">2k</div>
              </div>
            </div>
          </div>
          <div className="feed">
            <div className="top">
              <div className="profile-image"></div>
              <div className="profile-desc">
                <div className="nickname">paesir</div>
                <div className="timeStamp">8:15 pm, yesterday</div>
              </div>
            </div>
            <div className="contents">
              contents
            </div>
            <div className="bottom">
              <div className="like">
                <div className="asset">
                  <img src="/assets/feed/like-dac.svg" alt="like" />
                </div>
                <div className="count txt-bold">25k</div>
              </div>
              <div className="comment">
                <div className="asset">
                  <img src="/assets/feed/comment.svg" alt="comment" />
                </div>
                <div className="count txt-bold">2k</div>
              </div>
            </div>
          </div>
          <div className="feed">
            <div className="top">
              <div className="profile-image"></div>
              <div className="profile-desc">
                <div className="nickname">paesir</div>
                <div className="timeStamp">8:15 pm, yesterday</div>
              </div>
            </div>
            <div className="contents">
              contents
              <div className="image"></div>
            </div>
            <div className="bottom">
              <div className="like">
                <div className="asset">
                  <img src="/assets/feed/like-dac.svg" alt="like" />
                </div>
                <div className="count txt-bold">25k</div>
              </div>
              <div className="comment">
                <div className="asset">
                  <img src="/assets/feed/comment.svg" alt="comment" />
                </div>
                <div className="count txt-bold">2k</div>
              </div>
            </div>
          </div>
          <div className="feed">
            <div className="top">
              <div className="profile-image"></div>
              <div className="profile-desc">
                <div className="nickname">paesir</div>
                <div className="timeStamp">8:15 pm, yesterday</div>
              </div>
            </div>
            <div className="contents">
              contents
            </div>
            <div className="bottom">
              <div className="like">
                <div className="asset">
                  <img src="/assets/feed/like-dac.svg" alt="like" />
                </div>
                <div className="count txt-bold">25k</div>
              </div>
              <div className="comment">
                <div className="asset">
                  <img src="/assets/feed/comment.svg" alt="comment" />
                </div>
                <div className="count txt-bold">2k</div>
              </div>
            </div>
          </div>
          <div className="feed">
            <div className="top">
              <div className="profile-image"></div>
              <div className="profile-desc">
                <div className="nickname">paesir</div>
                <div className="timeStamp">8:15 pm, yesterday</div>
              </div>
            </div>
            <div className="contents">
              contents
              <div className="image"></div>
            </div>
            <div className="bottom">
              <div className="like">
                <div className="asset">
                  <img src="/assets/feed/like-dac.svg" alt="like" />
                </div>
                <div className="count txt-bold">25k</div>
              </div>
              <div className="comment">
                <div className="asset">
                  <img src="/assets/feed/comment.svg" alt="comment" />
                </div>
                <div className="count txt-bold">2k</div>
              </div>
            </div>
          </div>
        </div>
        <div className="friend-list">
          <div className="my-profile">
            <div className="profile-image">

            </div>
            <div className="nickname txt-bold">
              paesir
            </div>
          </div>
          <div className="my-friends">
            <div className="title txt-bold">
              나의 친구
            </div>
            <ul className="friend-list-wrapper">
              <li className="friend">
                <div className="profile-image">

                </div>
                <div className="nickname">
                  Friend Name
                </div>
              </li>
              <li className="friend">
                <div className="profile-image">

                </div>
                <div className="nickname">
                  Friend Name
                </div>
              </li>
              <li className="friend">
                <div className="profile-image">

                </div>
                <div className="nickname">
                  Friend Name
                </div>
              </li>
              <li className="friend">
                <div className="profile-image">

                </div>
                <div className="nickname">
                  Friend Name
                </div>
              </li>
              <li className="friend">
                <div className="profile-image">

                </div>
                <div className="nickname">
                  Friend Name
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainFeed;