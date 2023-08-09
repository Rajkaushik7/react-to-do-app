import React, {useEffect, useState} from 'react'
import axios from 'axios'
import win_logo from '../../public/assets/images/win_logo.svg'
import add_list_img from '../../public/assets/images/add_list.svg'
import '../styles/header.less'

const Header = () => {

    const [userData, setUserData] = useState('')


    useEffect(() => {
        axios.get('https://randomuser.me/api/').then((response) => {
            let userData = response.data.results[0]
            setUserData({
                name: userData.name.first,
                imgURL: userData.picture.thumbnail
            })
            console.log(response.data.results[0])
        }).catch((error) => {
            console.error(error)
        })
    },[])

    return (
        <div className="header-container">
            <div className="circle"></div>
            <div className="content">
                <img className="win-logo" src={win_logo} />
                <div className="right-nav">
                    <img id="add_task" src={add_list_img} />
                    {
                        userData && 
                        <div className="user-details">
                            <img src={userData.imgURL} />
                            <p>{userData.name}</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export {Header}