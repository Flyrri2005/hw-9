import React from 'react';
import styles from './Statistics.module.css';

export default function Statistics(docx, mp3, pdf, mp4) {
    return (
        <div>
            <section class="statistics">
  <h2 className={styles.title}>UPLOAD STATS</h2>

  <ul className ={styles.stat}>
    <li className={styles.item1}>
      <span className={styles.label1}>.docx</span>
      <span className={styles.percentage1}>32%</span>
    </li>
    <li className={styles.item2}>
      <span className={styles.label2}>.pdf</span>
      <span className={styles.percentage2}>4%</span>
    </li>
    <li className={styles.item3}>
      <span className={styles.label3}>.mp3</span>
      <span className={styles.percentage3}>17%</span>
    </li>
    <li className={styles.item4}>
      <span className={styles.label4}>.psd</span>
      <span className={styles.percentage4}>47%</span>
    </li>
  </ul>
</section>
        </div>
    )
}
