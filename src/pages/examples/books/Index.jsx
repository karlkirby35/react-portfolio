import { Link } from 'react-router';

export default function Index(){
    return (
        <>
            <h1>All books</h1>
            <p><Link to={`/examples/books/1`} >Book 1</Link></p>
            <p><Link to={`/examples/books/2`} >Book 2</Link></p>
            <p><Link to={`/examples/books/3`} >Book 3</Link></p>
            <p><Link to={`/examples/books/4`} >Book 4</Link></p>
            <p><Link to={`/examples/books/5`} >Book 5</Link></p>
        </>
    );
}