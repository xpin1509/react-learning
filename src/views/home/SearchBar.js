import React, { Component } from 'react';
import { Input, Select, message } from 'antd';
import md5 from 'md5';
import fetch from '../../fetch';
import { CARRIERLIST } from "../../static/config";
import { APICONFIG } from "../../static/config";

const Search = Input.Search;
const Option = Select.Option;
/**
 * js对象序列化
 * @param {Object} obj 
 */
const objSerialize = function (obj) {
  const arr = []
  for (const i in obj) {
    arr.push(`${i}=${typeof obj[i] != 'string' ? JSON.stringify(obj[i]) : obj[i]}`)
  }
  return arr.join('&')
}

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.com = CARRIERLIST[0].key
  }
  handleChange(value) {
    this.com = value
  }
  searchAction(value) {
    // 校验
    this.doFetch(value)
  }
  doFetch(value) {
    const paramObj = {
      customer: APICONFIG.customer,
      param: {
        com: this.com,
        num: value,
        from: '',
        to: '',
        resultv2: 0
      }
    }
    paramObj.sign = md5(JSON.stringify(paramObj.param) + APICONFIG.key + APICONFIG.customer).toLocaleUpperCase()

    fetch.post(APICONFIG.baseurl, objSerialize(paramObj)).then(function (response) {
      if (response.data && response.data.state === '0') {
        console.log(response.data)
        // this.props.changeData(params)
      } else {
        message.error(response.data.message)
      }
    }).catch(function (error) {
      console.log(error);
    });
  }
  render() {
    const optionList = CARRIERLIST.map((el, index) => {
      return <Option value={el.key} key={index}>{el.name}</Option>
    })
    const selectBefore = (
      <Select defaultValue={ this.com } style={{ width: 80 }} onChange={ this.handleChange.bind(this) }>
        {optionList}
      </Select>
    );
    return (
      <div className="searchBar">
        <Search
          addonBefore={selectBefore}
          placeholder="输入快递单号"
          enterButton="查询"
          size="large"
          onSearch={this.searchAction.bind(this)}
        />
      </div>
    );
  }
}
export default SearchBar;