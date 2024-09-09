'use client';

import styles from './NumberField.module.scss';

export default function NumberField({
  title,
  prefixText,
  value,
  setValue,
  hasError = false,
  errorText = '',
  prefixPosition = 'left',
}) {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div id="container" className={styles.container}>
      <span id="title" className={styles.className}>
        {title}
      </span>
      <div
        id="input container"
        className={`${styles.inputContainer} ${hasError ? styles.error : ''} ${prefixPosition === 'right' ? styles['prefix-right'] : ''} `}
      >
        <div
          id="prefix"
          className={`${styles.prefix} ${prefixPosition === 'right' ? styles.right : styles.left}`}
        >
          {prefixText}
        </div>
        <div id="text container" className={styles.textContainer}>
          <input
            className={styles.input}
            value={value}
            onChange={handleChange}
          />
        </div>
      </div>
      <span className={`${styles.errorText} ${hasError ? styles.visible : ''}`}>
        {errorText}
      </span>
    </div>
  );
}
