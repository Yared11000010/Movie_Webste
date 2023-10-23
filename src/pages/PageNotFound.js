import { Link } from 'react-router-dom';
import PageNotFoundImage from '../assets/imagenotfound.jpg';
import Button from '../components/Button';

const PageNotFound = () => {
    return (
        <main>
            <section className="flex flex-col justify-center px-2">
                <div className="flex flex-col items-center my-4">
                    <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">
                        404, Oops
                    </p>  
                    <div className='flex justify-center my-4'>
                    <img className="rounded" src={PageNotFoundImage} alt="404 Page Not Found" />
                    </div>
                </div>
                <div className='flex justify-center my-4 mb-4'>
                    <Link to="/">
                       <Button >
                        Back To Cinemate
                       </Button>
                    </Link>
                </div>
            </section>    
        </main>
    );
}

export default PageNotFound;
