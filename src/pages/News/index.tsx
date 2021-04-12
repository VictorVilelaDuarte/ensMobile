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
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [news, setNews] = useState<NewsType[]>([]);

  useEffect(() => {
    api
      .get(`/noticia?page=${page}`)
      .then(res => {
        res.data.data.map((item: NewsType) => {
          const newObj = {
            noticia_cod: item.noticia_cod,
            noticia_imagem: item.noticia_imagem,
            noticia_titulo: item.noticia_titulo,
          };

          if (news.find(el => el.noticia_cod === newObj.noticia_cod)) {
            return setHasMore(false);
          }

          return setNews(oldNews => [...oldNews, newObj]);
        });
      })
      .catch(err => {
        console.log(err);
      });
  }, [page]);

  function loadNews() {
    if (hasMore) {
      setPage(page + 1);
    }
  }

  return (
    <Container>
      <List
        onEndReached={loadNews}
        onEndReachedThreshold={0.1}
        ItemSeparatorComponent={() => <SeparatorItem />}
        data={news}
        keyExtractor={item => item.noticia_cod}
        renderItem={({ item }) => (
          <NewsContainer onPress={() => console.log(item.noticia_cod)}>
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
