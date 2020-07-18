import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Card, Space, Row, Col, Divider } from 'antd';
import styles from '../../styles/Styles.scss';

const ListMovies = () => {
    const { Meta } = Card;
    //const style = {padding: '20px 0' };
    const [data, setData] = useState({ results: [] });
 
    useEffect(() => {
        const fetchData = async () => {
        const response = await axios.get(
            'https://api.themoviedb.org/3/movie/popular?api_key=b135b1b6b41176924f60581906216e59&language=en-US&page=1',
        )
        setData(response.data);
        };
    
        fetchData();
    }, []);
    return (
        <div>
            <Divider orientation="left" style={{ color: 'rgb(53, 12, 39)', fontWeight: 'normal' }}>
            Adult movies:
            </Divider>
            {data.results.map(item => (
                    <Space direction="vertical">
                    <Card
                        hoverable
                        className={'card-size'}
                       // style={style}
                        key={item.id}
                        style={{ width: 260 }}
                        // cover={<img alt="example" src={item.backdrop_path} />}
                    >
                        <Meta title={item.original_title} description={item.overview} />
                    </Card>
                    </Space>
                )
            )}
        </div>
    );
};

export default ListMovies;