import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import {PlusOutlined } from '@ant-design/icons';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import Loader from './Loader';

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return <Loader />;

  return (
    <>
      <div>
        <div class="global-stats" >
        <div className="space">
          <div>
            <p class="title">Cryptocurrencies</p>
            <p class="num">{globalStats.total}</p>
          </div>
        </div>
        <div className="space">
          <div class="ban">
            <p class="title">Exchanges</p>
            <p class="num">{millify(globalStats.totalExchanges)}</p>
          </div>
        </div>
        <div className="space">
          <div>
            <p class="title">Market Cap</p>
            <p class="num">{`$${millify(globalStats.totalMarketCap)}`}</p>
          </div>
        </div>
        <div className="space">
          <div>
            <p class="title">24h Volume</p>
            <p class="num">{`$${millify(globalStats.total24hVolume)}`}</p>
          </div>
        </div>
        <div className="space">
          <div>
            <p class="title">Markets</p>
            <p class="num">{millify(globalStats.totalMarkets)}</p>
          </div>
        </div>
        </div>
      </div>

      <div className="home-heading-container">
        <h1 class="home-title">Top 10 Cryptos In The World</h1>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">{<PlusOutlined />}</Link></Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <h1 class="home-title">Latest Crypto News</h1>
        <Title level={3}><Link to="/news">{<PlusOutlined />}</Link></Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;