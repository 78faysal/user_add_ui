import React, { useState } from 'react';

const Product = (props) => {
    const { _id, name, profession, about, image } = props.profileDetails;
    console.log(image)
    const handleDeleteUser = props.deleteUser;

    const [isFollowed, setIsFollowed] = useState(false);
    const [followerCount, setFollowerCount] = useState(0);

    function handleFollowClick() {
        setIsFollowed(true);
        setFollowerCount(prevCount => prevCount + 1);
    }

    function handleUnfollowClick() {
        setIsFollowed(false);
        setFollowerCount(prevCount => prevCount - 1);
    }

    return (
        <div>
            <div
                key={_id}
                className="card">
                <div className="banner">
                    <img src={image} />
                </div>
                <span className='closeBtn text-center rounded-circle position-absolute top-0 end-0 m-3 text-bg-light' onClick={() => handleDeleteUser(_id)}>X</span>
                <div className="menu">
                    <div className="opener"></div>
                </div>
                <h2 className="name">{name}</h2>
                <div className="title">{profession}</div>
                <div className="actions">
                    <div className="follow-info">
                        <h2><a href="#"><span>{followerCount}</span><small>Followers</small></a></h2>
                        <h2><a href="#"><span>0</span><small>Following</small></a></h2>
                    </div>
                    <div className='btn-section'>
                        {isFollowed ? (
                            <button className="follow-btn me-3" onClick={handleUnfollowClick}>Following</button>
                        ) : (
                            <button className="follow-btn me-3" onClick={handleFollowClick}>Follow</button>
                        )}
                        <button className="contact-btn">Contact</button>
                    </div>
                </div>
                <div className="desc">{about}</div>
            </div>
        </div>
    );
};

export default Product;