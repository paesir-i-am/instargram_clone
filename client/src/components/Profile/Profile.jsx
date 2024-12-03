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
      </div>
    </div>
  );
}

export default Profile;