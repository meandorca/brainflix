import './Upload.scss'
import blue from '../../assets/Images/Upload-video-preview.jpg'
import publish from '../../assets/Icons/publish.svg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

function Upload() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const navigateHome = async(e) => {
    
    e.preventDefault();
       await axios.post('http://localhost:8000/videos', {
            title: title,
            description: description,
    })
    .then(function (response) {
        alert("Uploaded!")
        navigate('/');
    })
    .catch(function (error) {
    });
       
    };
    const handleTitle = (e) => {
        setTitle(e.target.value);
    };
    const handleDescription = (e) => {
        setDescription(e.target.value);
    };
    
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
                    <input type="text" onChange={handleTitle} value={title} className='upload__input' placeholder='Add a title to your video' name="title" />
                </label>
                <p className='upload__content--name'>ADD A VIDEO DESCRIPTION</p>
                <label>
                    <input type="description" onChange={handleDescription} value={description} className='upload__input upload__description' placeholder='Add a description to your video' name="description" />
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