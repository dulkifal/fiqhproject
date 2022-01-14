import styles from '../../styles/fatwas.module.css'
import Link from 'next/link';
import { server } from '../../next.config';

export const getServerSideProps  = async ({req}) => {
    const protocol = req.headers['x-forwarded-proto'] || 'http'
    const baseUrl = req ? `${protocol}://${req.headers.host}` : ''

    const res = await fetch(`${baseUrl}/json.json`);
    const data = await res.json()
    console.log(baseUrl);
     return {
        props: { fatwas: data }
    }
}

const Fatwas = ({ fatwas } ) => {
     
    return (
        <div>
            <h1> All fatwas</h1>
          {fatwas && fatwas.map(fatwa => (
                    // eslint-disable-next-line react/jsx-key
                    <div className={styles.single }>
                    
                       
                           
                            <h2>{fatwa.q}</h2>
                        <p>{fatwa.p}</p>
                        
                    </div>
              )) } 
        </div>
    );
}

export default Fatwas; 