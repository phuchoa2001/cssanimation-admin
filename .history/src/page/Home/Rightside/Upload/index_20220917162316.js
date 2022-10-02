import React from 'react';

import { Comment, Avatar } from 'antd';

function Upload({ name, desc }) {
    return (
        <Comment
            author={<a href="#!">{name}</a>}
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
            content={
                <p>
                    {desc}
                </p>
            }
        />
    );
}

export default Upload;