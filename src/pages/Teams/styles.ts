import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { TeamsType } from './index';

export const Container = styled.View`
  flex: 1;
`;

export const List = styled(FlatList as new () => FlatList<TeamsType>).attrs({
  contentContainerStyle: {
    paddingTop: 10,
    paddingBottom: 16,
    paddingHorizontal: 24,
  },
})``;

export const TeamsContainer = styled.TouchableOpacity`
  margin-bottom: 16px;
  margin-top: 16px;
`;

export const TeamsImageDiv = styled.View`
  width: 100%;
  height: 190px;
`;

export const TeamsImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const TeamsTitle = styled.Text`
  color: #326b97;
  align-self: center;
  margin-top: 5px;
  font-size: 18px;
`;

export const SeparatorItem = styled.View`
  width: 100%;
  height: 1px;
  border: 1px solid #e1e1e1;
`;
