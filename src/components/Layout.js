import styled from 'styled-components';

export const Layout = styled.div`
  background: repeating-linear-gradient(
    135deg,
    #052650 9% 9%,
    #383781ff 10% 10%
  );
  box-shadow: 0 0 10px #380bdccc, 0 0 20px #380bdccc, 0 0 22px #380bdccc,
    0 0 25px #380bdccc, 0 0 30px #380bdccc, 0 0 32px #380bdccc,
    0 0 36px #380bdccc, 0 0 55px #380bdccc, 0 0 66px #380bdccc;

  padding: 15px;
  text-align: center;
  margin: 0 auto;

  justify-content: center;
  display: flex;
  width: 500px;
  gap: 10px;
  flex-direction: column;
  padding: 10px;

  border-radius: 10px;
`;
