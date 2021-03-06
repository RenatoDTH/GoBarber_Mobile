import styled from 'styled-components/native';
import Input from '~/pages/components/Input';
import Button from '~/pages/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Seperator = styled.View`
  height: 1px;
  background: rgba(255, 255, 255, 0.3);
  margin: 20px 0 30px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 40px;
`;

export const Form = styled.ScrollView.attrs({
  contentContainerStyle: { padding: 30 },
  showsVerticalScrollIndicator: false,
})`
  align-self: stretch;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const LogoutButton = styled(Button)`
  margin-top: 10px;
  background: #f64c75;
`;
