import React, { Component } from 'react';
import { Input, Select, message } from 'antd';
import fetch from '../../fetch';
import md5 from 'md5'
import './home.css';

const Search = Input.Search;
const Option = Select.Option;
const dataList = [
    {
        key: 'zhongtong', 
        name: '中通'
    },
    {
        key: 'yuantong', 
        name: '圆通'
    },
    {
        key: 'shunfeng', 
        name: '顺丰'
    },
    {
        key: 'yunda', 
        name: '韵达'
    },
    {
        key: 'tiantian', 
        name: '天天'
    },
    {
        key: 'jingdong', 
        name: '京东'
    },
    {
        key: 'baishihuitong', 
        name: '百世汇通'
    }
]
const optionList = dataList.map((el, index) => {   
    return (<Option value={ el.key } key={ index }>{ el.name }</Option>)
})
const selectBefore = (
    <Select defaultValue={ dataList[0].key } style={{ width: 80 }}> 
        { optionList }
    </Select>
  );
// 快递查询链接
const BASEURL = '/poll/query.do';
const KEY = 'ilItbswV4700'
const CUSTOMER = '89B83402BF4C0EAE31CB157CBC2B6958'

class Home extends Component{
    doFetch(value) {
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
            if (response.data && response.data.state === '0') {
                console.log(response.data)
            } else {
                message.error(response.data.message)
            }
          }).catch(function (error) {
            console.log(error);
          });
    }
    searchAction(value) {
        // 校验
        this.doFetch(value)
    }
    
    render() {
        return (
            <div className="homePage">
                <Search
                    addonBefore={selectBefore}
                    placeholder="输入快递单号"
                    enterButton="查询"
                    size="large"
                    onSearch={ this.searchAction.bind(this) }
                    />
            </div>
          )
    }
}
export default Home