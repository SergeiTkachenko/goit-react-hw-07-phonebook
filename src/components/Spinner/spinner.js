import { RotatingLines } from 'react-loader-spinner';
import { SpinnerStyled } from './spinner.styled';

export default function Spinner() {
  return (
    <SpinnerStyled
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50% -50%)',
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
        // justifycontent: 'center',
      }}
    >
      <RotatingLines
        strokeColor="#f7f8e5"
        strokeWidth="5"
        animationDuration="0.75"
        width="150"
        visible={true}
      />
    </SpinnerStyled>
  );
}
