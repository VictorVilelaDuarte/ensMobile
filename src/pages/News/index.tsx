import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import {
  Container,
  List,
  NewsContainer,
  NewsImageDiv,
  NewsImage,
  NewsTitle,
  SeparatorItem,
} from './styles';

export interface NewsType {
  noticia_cod: string;
  noticia_titulo: string;
  noticia_imagem: string;
}

const News: React.FC = () => {
  const [news, setNews] = useState<NewsType[]>([]);

  useEffect(() => {
    api
      .get('/noticia?page=0')
      .then(res => {
        setNews(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <List
        ItemSeparatorComponent={() => <SeparatorItem />}
        data={news}
        renderItem={({ item }) => (
          <NewsContainer>
            <NewsImageDiv>
              <NewsImage source={{ uri: item.noticia_imagem }} />
            </NewsImageDiv>
            <NewsTitle>{item.noticia_titulo}</NewsTitle>
          </NewsContainer>
        )}
      />
    </Container>
  );
};

export default News;
