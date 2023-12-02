import { FC } from 'react';

type ImageFromBase64Props = {
  base64: string;
};

const ImageFromBase64: FC<ImageFromBase64Props> = ({ base64 }) => {
  return <img src={base64} alt="decoded image" />;
};

export default ImageFromBase64;
