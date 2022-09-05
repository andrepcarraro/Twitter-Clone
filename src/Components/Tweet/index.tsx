import React from 'react';

import {
    Container,
    Retweeted,
    RocketSeatIcon,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
        <Retweeted>
            <RocketSeatIcon />
            Voce Retweetou
        </Retweeted>

        <Body>
            <Avatar />
            <Content>
                <Header>
                    <strong>RocketSeat</strong>
                    <span>@rocketseat</span>
                    <Dot />
                    <time>30 de jun</time>
                </Header>

                <Description> O André é top ✔</Description>

                <ImageContent />

                <Icons>
                    <Status>
                        <CommentIcon />
                        18
                    </Status>
                    <Status>
                        <RetweetIcon />
                        189
                    </Status>
                    <Status>
                        <LikeIcon />
                        1M
                    </Status>
                </Icons>
            </Content>
        </Body>
    </Container>
  );
}

export default Tweet;