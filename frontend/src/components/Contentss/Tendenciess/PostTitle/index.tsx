import { Typography } from '@mui/material';
import React from 'react';
import { Content } from './styled';

interface PostTitlePros {
    title: string
}

const PostTitle: React.FC<PostTitlePros> = ({ title }) => {
    return (
        <Content>
            <Typography variant="h1">{title}</Typography>
        </Content>
    );
};

export default PostTitle;