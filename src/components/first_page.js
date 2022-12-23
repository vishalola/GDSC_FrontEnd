import { Link } from 'react-router-dom';

export default function First(){
    return (
        <div>
            hello this is the first page.
            <Link to="/second"><button>Second</button></Link>
            <Link to="/"><button>Home</button></Link>

        </div>

    );
}