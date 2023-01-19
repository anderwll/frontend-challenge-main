import React from 'react';
import { Content } from './styled';
import { Box } from '@mui/material';

interface PostContentProps {
    setInnerHTML: any
}

const PostContent: React.FC<PostContentProps> = ({ setInnerHTML }) => {
    return (
        <Box>
            <Content  dangerouslySetInnerHTML={setInnerHTML}/>
        </Box>
    );
};

export default PostContent;