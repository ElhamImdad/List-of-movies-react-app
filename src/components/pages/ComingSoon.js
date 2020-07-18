import React from 'react';
import { Card } from 'antd';

const comingSoon = () => {
    const { Meta } = Card;
    return (
        <Card
            hoverable
            className={'card-size'}
            cover={<img alt="Beats" src="https://resizing.flixster.com/fMBn4q4NsNqhsgwT-fUQFhVX0Xc=/206x305/v1.bTsxMzQ2MzM1OTtqOzE4NTE1OzEyMDA7MjAwMDszMDAw" />}
        >
            <Meta title="Beats" description="2021" />
        </Card>
    );
};

export default comingSoon;