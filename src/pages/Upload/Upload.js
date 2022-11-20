import './Upload.scss'
import blue from '../../assets/Images/Upload-video-preview.jpg'
import publish from '../../assets/Icons/publish.svg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

function Upload() {
    const [formData,setFormData] = useState({
        "id": "",
        "title": "",
        "channel": "Red Cow",
        "image": "/images/nicki-thick.jpg",
        "description": "",
        "views": "0",
        "likes": "0",
        "duration": "4:01",
        "video": "https://project-2-api.herokuapp.com/stream",
        "timestamp": "",
        "comments": [
        ]
      },
    )

    const navigate = useNavigate();
    const navigateHome = (e) => {
        e.preventDefault() 

        axios.post('http://localhost:8000/videos', formData)
        .then((response => {
            alert("Uploaded!")
            navigate('/');
        })).catch((error) => {
            console.log(error)
        })
    };

    function dataChange(e) {
        setFormData ({...formData,[e.target.name]:e.target.value})

    }


    return (
        <div className='upload'>
            <div className='upload__top'>
                <h1 className='upload__title'>Upload Video</h1>
        
                <div className='upload__content'>
                    <p className='upload__content--name'>VIDEO THUMBNAIL</p>
                    <img className='upload__content--img' src={blue} />
                </div>
            </div>

            <form className='upload__form' onSubmit={navigateHome}>
                <div className='upload__desk'>
                <p className='upload__content--name'>TITLE YOUR VIDEO</p>
                <label>
                    <input type="text" onChange={dataChange} value={formData.title} className='upload__input' placeholder='Add a title to your video' name="title" />
                </label>
                <p className='upload__content--name'>ADD A VIDEO DESCRIPTION</p>
                <label>
                    <input type="description" onChange={dataChange} value={formData.description} className='upload__input upload__description' placeholder='Add a description to your video' name="description" />
                </label>
                </div>

                <div className='upload__button'>
                    <div className='upload__button--content'>
                        <div className='upload__button--detail'>
                            <img className='upload__button--img' src={publish} />
                            <button className='upload__button--item'>PUBLISH</button>
                        </div>
                    </div>
                    <button className='upload__button--item2'>CANCEL</button>
                </div>
            </form>



        </div>
    );
}

export default Upload;