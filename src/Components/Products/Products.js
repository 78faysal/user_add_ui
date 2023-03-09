import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {

    const [btnText, setBtnText] = useState("Follow")

    const [profiles, setProfiles] = useState([]);

    const handleBtnClick = (text) => {
        setBtnText(text)
    }



    useEffect(() => {
        fetch('http://localhost:1000/userInfo')
            .then(res => res.json())
            .then(data => setProfiles(data))
    }, [])

    // get profile card id from child component 
    const handleGetProfileData = (id) => {

    }

    // delete user 
    const handleDeleteUser = (id) => {
        const url = `http://localhost:1000/userInfo/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Deleted Succesfully')
                    const remainingUsers = profiles.filter(profile => profile._id !== id)
                    setProfiles(remainingUsers)
                }
            })
    }


    // follower increase decrease

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
            <div className='profiles'>
                <div className="card">
                    <div className="banner">
                        <img src="https://thumbs2.imgbox.com/15/0d/dxP0qBsF_t.jpg" alt="image host" />
                    </div>
                    <div className="menu">
                        <div className="opener"></div>
                    </div>
                    <h2 className="name">Md Faysal</h2>
                    <div className="title">Web Developer</div>
                    <div className="actions">
                        <div className="follow-info">
                            <h2><a href="#"><span>{2559 + followerCount}</span><small>Followers</small></a></h2>
                            <h2><a href="#"><span>10</span><small>Following</small></a></h2>
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
                    <div className="desc">I am Mohammad Faysal a Web Developer. I focusing on my goal to be expert in web developement. I have 1+ years of experience in this field</div>
                </div>
                {
                    profiles.map(profile => <Product
                        key={profile._id}
                        profileDetails={profile}
                        deleteUser={handleDeleteUser}

                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;