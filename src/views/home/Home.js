import React, { Component } from 'react';
import { Input } from 'antd';
import fetch from '../../fetch';
import md5 from 'md5'
import './home.css';

const Search = Input.Search;
// 快递查询链接
const BASEURL = 'https://poll.kuaidi100.com/poll/query.do';
const KEY = 'ilItbswV4700'
const CUSTOMER = '89B83402BF4C0EAE31CB157CBC2B6958'

class Home extends Component{
    searchAction(value) {
        // 校验
        fetch(value)
    }
    fetch(value) {
        const params = {
            customer: KEY,
            param: {
                com: 'yuantong',
                num: value,
                from: '',
                to: '',
                resultv2: ''
            }
        }
        params.sign = md5(JSON.stringify(params.param) + KEY + CUSTOMER)
        fetch.post( BASEURL, params).then(function (response) {
            console.log(response);
          }).catch(function (error) {
            console.log(error);
          });
    }
    
    render() {
        return (
            <div className="homePage">
                <Search
                    placeholder="输入快递单号"
                    enterButton="查询"
                    size="large"
                    onSearch={ this.searchAction }
                    />
            </div>
          )
    }
}
export default Home