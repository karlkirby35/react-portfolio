import { useParams } from 'react-router';

export default function Show(){

    let { id } = useParams();

    return (
        <>
            <h1>Hello from Books / Show page</h1>
            <p>You are looking at book with id: {id}</p>
        </>
    );
}