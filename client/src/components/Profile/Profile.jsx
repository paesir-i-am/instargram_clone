import React from 'react';
import './profile.css';

function Profile() {
  return (
    <div className="profile">
      <div className="wrapper">
        <div className="info">
          <div className="profile-image"></div>
          <div className="profile-desc">
            <div className="nickname txt-bold">paesir</div>
            {false ?
              (<div className="quote">
                <textarea placeholder="자신의 한줄평을 입력해주세요" />
              </div>) : (
                <>
                  <div className="quote">
                    if not follow show content
                  </div>
                  <div className="follow-btn">팔로우하기</div>
                </>
              )}
          </div>
        </div>
        <div className="feed-images">
          <div className="feed-image">
            <img
              src="https://flexible.img.hani.co.kr/flexible/normal/800/464/imgdb/original/2022/0907/20220907500854.jpg"
              alt="image" />
          </div>
          <div className="feed-image">
            <img
              src="https://img.freepik.com/free-photo/ultra-detailed-nebula-abstract-wallpaper-4_1562-749.jpg"
              alt="image" />
          </div>
          <div className="feed-image">
            <img
              src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3"
              alt="image" />
          </div>
        </div>

        <div className="profile-contents">

          <div className="feed-list">
            <div className="title txt-bold">작성한 글</div>
            <div className="feeds">
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
          </div>

          <div className="profile-info-desc">
            <div className="desc">
              <div className="title txt-bold">좋아요</div>
              <div className="count">739,000</div>
            </div>
<div className="desc">
              <div className="title txt-bold">팔로워</div>
              <div className="count">739,000</div>
            </div>
<div className="desc">
              <div className="title txt-bold">포스트</div>
              <div className="count">320</div>
            </div>
<div className="desc">
              <div className="title txt-bold">친구</div>
              <div className="count">222,400</div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Profile;