import { useState, useRef } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Header from '../componentes/Header';
import FormPost from '../componentes/FormPost';
import Posts from '../componentes/Posts';
import PostContext from '../contexto/postContext';
import ScrollContext from '../contexto/scrollContext';
import Observer from '../componentes/Observer';

import './Feed.css';

const Feed = () => {
  const [posts, setPosts] = useState([]); // variavel do context
  const [numPosts, setNumPosts ] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <main>
      <Header setModalVisible={setModalVisible}/>
      <Container style={{maxWidth:"80%"}}>
        <PostContext.Provider value={[posts, setPosts]}>
        <ScrollContext.Provider value={[numPosts, setNumPosts]}>
          <Row>
            <FormPost modalVisible={modalVisible} setModalVisible={setModalVisible}/>
          </Row>
          <Posts />
          <Observer/>
        </ScrollContext.Provider>
        </PostContext.Provider>
      </Container>
    </main >
  )
}

export default Feed;