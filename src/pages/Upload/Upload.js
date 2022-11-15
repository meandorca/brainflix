import './Upload.scss'
import blue from '../../assets/Images/Upload-video-preview.jpg'
import publish from '../../assets/Icons/publish.svg'
import {useNavigate} from 'react-router-dom';

function Upload() {
    
    const navigate = useNavigate();
    const navigateHome = () => {
        navigate('/');
      };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target);

        const form = event.target;
        const title = form.title.value;
        const description = form.description.value

        if (title === "" || description === "") {
            alert("Uploaded!") 
            return;
        }
    };
    

    return (
        <div>
            <div className='upload'>
                <h1 className='upload__title'>Upload Video</h1>
                <div className='upload__content'>
                    <p className='upload__content--name'>VIDEO THUMBNAIL</p>
                    <img className='upload__content--img' src={blue} />
                </div>
            </div>





            <form className='upload__form' onSubmit={(handleSubmit, navigateHome)}>
                <p className='upload__content--name'>TITLE YOUR VIDEO</p>
                <label>
                    <input type="text" className='upload__input' placeholder='Add a title to your video' name="title" />
                </label>
                <p className='upload__content--name'>ADD A VIDEO DESCRIPTION</p>
                <label>
                    <input type="description" className='upload__input upload__description' placeholder='Add a description to your video' name="description" />
                </label>

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