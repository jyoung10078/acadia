'use client';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import { useState } from 'react';

export default function Page() {
    const [diceArray, setDiceArray] = useState<number[]>([1,3,4,4,2,3,5,6,2,1]);



    return(
        <>
            <body>
                <div className={styles.specialcard}>
                    <h1 className={styles.title}>Tenzies</h1>
                    <p className={styles.description}>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                    <div className={styles.dice_container}>
                        {diceArray.map((die) => <button className={styles.die}>{die}</button>)}
                    </div>
                    <h2>
                        <Link href="/">Back to home</Link>
                    </h2>
                </div>
            </body>
            
        </>

    )
}