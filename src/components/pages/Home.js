import React from 'react';
import ListMovies from './ListMovies';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import '../../styles/Styles.scss';
import ComingSoon from './ComingSoon';

const Home = () => {
    const { Header, Content, Footer, Sider } = Layout;

    return (
        <Layout>
        <Header className="Home-Header">List Of Movies</Header>
        <BrowserRouter>
            <Layout>
                <Sider className="Home-Sider">
                    <nav>
                        <div>
                            <Link className="sider-content" to="/">Top Movies</Link>
                        </div>
                        <div>
                            <Link className="sider-content" to="/comingSoon">Coming Soon</Link>
                        </div>
                    </nav>
                </Sider>

                <Content className="Home-Content">
                    <Switch>
                        <Route path="/comingSoon">
                            <ComingSoon/>
                        </Route>
                        <Route path="/">
                            <ListMovies/>
                        </Route>
                    </Switch>
                </Content>
            </Layout>
        </BrowserRouter>
        <Footer className="Home-Footer"
                style={{ textAlign: 'center' }}>
                Movies App ©2020 Created by Elham Saleem
        </Footer>
        </Layout>
    );
};

export default Home;