import { TextInput, StyleSheet } from 'react-native';

const textInputComponent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <label htmlFor={props.label} className={styles.label}>
          {props.label}
        </label>
        <div className={styles.input_container}>
          <input
            type={props.type}
            className={styles.input_value}
            value={props.value}
            placeholder={props.placeholder}
          />
          <span className={styles.icon}>
            <i>{props.icon}</i>
          </span>
        </div>
      </div>
    </div>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 100,
  },
  });

  
export default textInputComponent;