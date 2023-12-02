import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers/rootReducer';
import ImageFromBase64 from './upload';

const Main: FC = () => {
  const submissions = useSelector(
    (state: RootState) => state.unconrolled.submissions.submissions
  );

  return (
    <div>
      <h1>Unconrolled</h1>
      {submissions.map((submission, index) => (
        <div key={index}>
          <p>Name: {submission.name as string}</p>
          <p>Age: {submission.age as string}</p>
          <p>Email: {submission.name as string}</p>
          <p>Gender: {submission.gender as string}</p>
          <p>Accept T&C: {submission.tc as string}</p>
          <p>
            Upload:
            <ImageFromBase64 base64={submission.upload as string} />
          </p>
          <p>Country: {submission.country as string}</p>
        </div>
      ))}
    </div>
  );
};

export default Main;
