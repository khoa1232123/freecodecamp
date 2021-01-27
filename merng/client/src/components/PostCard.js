import React from 'react';
import { Button, Card, Icon, Image, Label } from 'semantic-ui-react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  const { body, createdAt, id, username, likeCount, commentCount } = post;

  const likePost = () => {
    console.log('Like post');
  };

  const commentPost = () => {
    console.log('Comment on Post');
  };

  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
        />
        <Card.Header>{username}</Card.Header>
        <Card.Meta>{moment(createdAt).fromNow()}</Card.Meta>
        <Card.Description as={Link} to={`/post/${id}`}>
          {body}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button as="div" labelPosition="right" onClick={commentPost}>
          <Button basic color="blue">
            <Icon name="comments" />
          </Button>
          <Label basic color="blue" pointing="left">
            {commentCount}
          </Label>
        </Button>
        <Button
          as="div"
          labelPosition="right"
          floated="right"
          onClick={likePost}
        >
          <Button basic color="teal">
            <Icon name="heart" />
          </Button>
          <Label basic color="teal" pointing="left">
            {likeCount}
          </Label>
        </Button>
      </Card.Content>
    </Card>
  );
};

export default PostCard;
