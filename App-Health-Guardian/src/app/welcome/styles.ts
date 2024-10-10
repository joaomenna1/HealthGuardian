import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Subtitle = styled.Text`
  font-size: 16px;
  color: #666;
  margin-bottom: 40px;
`;

const Button = styled.TouchableOpacity`
  background-color: #4caf50;
  padding: 12px 30px;
  border-radius: 25px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;


export { Container, Title, Subtitle, Button, ButtonText }