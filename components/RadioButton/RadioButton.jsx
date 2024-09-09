'use client';

import PropTypes from 'prop-types';
import styles from './RadioButton.module.scss';

export default function RadioButton({
  label,
  name,
  value,
  selectedValue,
  onChange,
}) {
  const isSelected = value === selectedValue;

  const handleClick = () => {
    onChange(value);
  };

  return (
    <div
      id="Container"
      className={`${styles.container} ${isSelected ? styles.selected : ''}`}
      onClick={handleClick}
      role="radio"
      aria-checked={isSelected}
      aria-labelledby={`${name}-${value}`}
    >
      <div id="button" className={styles.button}>
        {isSelected ? (
          <div id="innerCircle" className={styles.innerCircle} />
        ) : null}
      </div>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
