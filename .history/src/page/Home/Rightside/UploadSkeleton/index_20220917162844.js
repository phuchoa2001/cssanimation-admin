import React from 'react';

import { Comment, Avatar } from 'antd';

import LoadingSkeleton from '../../../../components/form/LoadingSkeleton';

function Upload({ name, desc }) {
    return (
        <Comment
            author={<LoadingSkeleton height={13} width={50} />}
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
            content={
                <LoadingSkeleton height={22} width={1000} />
            }
        />
    );
}

export default Upload;