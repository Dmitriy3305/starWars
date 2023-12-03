import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers/rootReducer';
import ImageFromBase64 from './upload';
import styles from './main.module.css';

const Main: FC = () => {
  const submissions = useSelector(
    (state: RootState) => state.unconrolled.submissions.submissions
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.uncontrolled}>
        <h2>Unconrolled</h2>
        {submissions.map((submission, index) => (
          <div key={index} className={styles.list}>
            <p>Name: {submission.name as string}</p>
            <p>Age: {submission.age as string}</p>
            <p>Email: {submission.name as string}</p>
            <p>Password: {submission.password as string}</p>
            <p>Gender: {submission.gender as string}</p>
            <p>Accept T&C: {submission.tc as string}</p>
            <div className={styles.upload}>
              <p>Upload:</p>
              <ImageFromBase64 base64={submission.upload as string} />
            </div>
            <p>Country: {submission.country as string}</p>
          </div>
        ))}
      </div>
      <div className={styles.controlled}>
        <h2>Conrolled</h2>
      </div>
    </div>
  );
};

export default Main;
