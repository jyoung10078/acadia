
import Link from 'next/link';
import styles from '../tensies/tensies.modules.css';

export default function Page() {
    return(
        <>
            <h1>Welcome to the tensies page!</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2> 
        </>

    )
}