import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import {
  Container,
  List,
  TeamsContainer,
  TeamsImageDiv,
  TeamsImage,
  TeamsTitle,
  SeparatorItem,
} from './styles';

export interface TeamsType {
  Equipe_ID: number;
  Equipe_Nome: string;
  Equipe_imagem: string;
}

const Teams: React.FC = () => {
  const [teams, setTeams] = useState<TeamsType[]>([]);

  useEffect(() => {
    api
      .get(`/equipe`)
      .then(res => {
        res.data.data.map((item: TeamsType) => {
          const newObj = {
            Equipe_ID: item.Equipe_ID,
            Equipe_Nome: item.Equipe_Nome,
            Equipe_imagem: item.Equipe_imagem,
          };

          if (newObj.Equipe_ID !== 0) {
            return setTeams(oldTeams => [...oldTeams, newObj]);
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <List
        ItemSeparatorComponent={() => <SeparatorItem />}
        data={teams}
        keyExtractor={item => item.Equipe_ID.toString()}
        renderItem={({ item }) => (
          <TeamsContainer onPress={() => console.log(typeof item.Equipe_ID)}>
            <TeamsImageDiv>
              <TeamsImage source={{ uri: item.Equipe_imagem }} />
            </TeamsImageDiv>
            <TeamsTitle>
              {item.Equipe_ID} - {item.Equipe_Nome}
            </TeamsTitle>
          </TeamsContainer>
        )}
      />
    </Container>
  );
};

export default Teams;
