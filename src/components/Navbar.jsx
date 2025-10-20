import { Link } from 'react-router';

export default function(){
    return (
        <div>
            <Link to='/'>Home</Link> | 
            <Link to='about'>About</Link> |
            <Link to='contact'>Contact</Link>
        </div>
    );
}