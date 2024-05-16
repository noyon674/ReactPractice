import React, {useState} from 'react';
import data from './data';
import Faq from './faq';
import style from './style.module.css';

function Faqs() {
    const [faqs, setFaqs] = useState(data);

  return (
    <div>
        <h1 className={style.header}>This is FAQs</h1>
        {
            faqs.map(faq=> <Faq key={faq.id} {...faq}/>)
        }
    </div>
  )
}

export default Faqs;