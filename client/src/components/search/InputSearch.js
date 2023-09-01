import React, {useState} from 'react'
import styles from './InputSearch.module.scss';
import { useNavigate } from 'react-router-dom';

const InputSearch = ({placeholder}) => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const queryHandler = e =>{
        setQuery(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if (!query.length) return
        
        navigate(query.split(' ').join('-'));
        setQuery('')
    }
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <form className={styles.form} onSubmit={submitHandler}>
                <input className={styles.input} placeholder={placeholder} value={query} onChange={queryHandler}/>
            </form>
        </div>
    </div>
  )
}

export default InputSearch