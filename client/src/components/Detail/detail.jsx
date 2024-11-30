import React from 'react';
import './detail.css'

function Detail() {
  return (
    <div className="feed-detail">
      <div className="bg"></div>

      <div className="wrapper">
        <div className="close">
          <img src="/assets/feed/close.svg" alt="close" />
        </div>

        <div className="main-image"></div>

        <div className="contents">
          <div className="feed-contents">

            <div className="top">
              <div className="profile-image"></div>
              <div className="feed-desc">
                <div className="nickname txt-bold">paesir</div>
                <div className="timeStamp">8:15pm, yesterday</div>
              </div>
            </div>

            <div className="body">
              contents
            </div>

            <div className="bottom">
              <div className="like">
                <div className="asset">
                  <img src='/assets/feed/like-dac.svg' alt="like" />
                </div>
                <div className="title txt-bold">25k</div>
              </div>
                <div className="comment">
                  <div className="asset">
                    <img src="/assets/feed/comment.svg" alt="comment" />
                  </div>
                  <div className="title txt-bold">2k</div>
                </div>
            </div>

          </div>

          <div className="feed-comments">
            <div className="comment-form comment">
              <div className="top">
                <div className="left">
                  <div className="profile-image"></div>
                  <div className="feed-desc">
                    <div className="nickname txt-bold">paesir</div>
                    <div className="timeStamp">8:15pm, yesterday</div>
                  </div>
                </div>

                <div className="right">
                  <div className="like">
                    <div className="asset">
                      <img src="/assets/feed/like-dac.svg" alt="like" />
                    </div>
                    <div className="title txt-bold">34k</div>
                  </div>

                  <div className="reply-btn">답글</div>
                </div>

              </div>

              <div className="body">
                contents
              </div>

            </div>

            <div className="comment-form reply">
              <div className="top">
                <div className="left">
                  <div className="profile-image"></div>
                  <div className="feed-desc">
                    <div className="nickname txt-bold">paesir</div>
                    <div className="timeStamp">8:15pm, yesterday</div>
                  </div>
                </div>

                <div className="right">
                  <div className="like">
                    <div className="asset">
                      <img src="/assets/feed/like-dac.svg" alt="like" />
                    </div>
                    <div className="title txt-bold">34k</div>
                  </div>

                  <div className="reply-btn">답글</div>
                </div>

              </div>

              <div className="body">
                contents
              </div>

            </div>

            <div className="comment-form comment">
              <div className="top">
                <div className="left">
                  <div className="profile-image"></div>
                  <div className="feed-desc">
                    <div className="nickname txt-bold">paesir</div>
                    <div className="timeStamp">8:15pm, yesterday</div>
                  </div>
                </div>

                <div className="right">
                  <div className="like">
                    <div className="asset">
                      <img src="/assets/feed/like-dac.svg" alt="like" />
                    </div>
                    <div className="title txt-bold">34k</div>
                  </div>

                  <div className="reply-btn">답글</div>
                </div>

              </div>

              <div className="body">
                contents
              </div>

            </div>

            <div className="comment-form comment">
              <div className="top">
                <div className="left">
                  <div className="profile-image"></div>
                  <div className="feed-desc">
                    <div className="nickname txt-bold">paesir</div>
                    <div className="timeStamp">8:15pm, yesterday</div>
                  </div>
                </div>

                <div className="right">
                  <div className="like">
                    <div className="asset">
                      <img src="/assets/feed/like-dac.svg" alt="like" />
                    </div>
                    <div className="title txt-bold">34k</div>
                  </div>

                  <div className="reply-btn">답글</div>
                </div>

              </div>

              <div className="body">
                contents
              </div>

            </div>

          </div>

          <div className="feed-write-comment">
            <div className="profile-image"></div>
            <div className="write-comment">
              <input type="text" placeholder="댓글을 남겨주세요" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Detail;