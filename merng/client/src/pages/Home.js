import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { FETCH_POSTS_QUERY } from '../graphql';
import { Grid } from 'semantic-ui-react';
import { PostCard } from '../components';

const Home = () => {
  const { loading, data } = useQuery(FETCH_POSTS_QUERY);
  console.log(data);
  return (
    <Grid columns={3}>
      <Grid.Row className="page-title">
        <h1>Recent Posts</h1>
      </Grid.Row>
      <Grid.Row>
        {loading ? (
          <h1>Loading posts...</h1>
        ) : (
          data.getPosts &&
          data.getPosts.map((post) => (
            <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
              <PostCard post={post} />
            </Grid.Column>
          ))
        )}
      </Grid.Row>
    </Grid>
  );
};

export default Home;
