import React, { Component } from 'react';
import { Input, Select, message } from 'antd';
import md5 from 'md5';
import fetch from '../../fetch';
import { CARRIERLIST } from "../../static/config";
import { APICONFIG } from "../../static/config";

const Search = Input.Search;
const Option = Select.Option;

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.com = CARRIERLIST[0].key
  }
  handleChange(value) {
    this.com = value
  }
  doFetch(value) {
    const params = {
      customer: APICONFIG.key,
      param: {
        com: this.com,
        num: value,
        from: '',
        to: '',
        resultv2: ''
      }
    }
    params.sign = md5(JSON.stringify(params.param) + APICONFIG.key + APICONFIG.customer)
    fetch.post(APICONFIG.baseurl, params).then(function (response) {
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
  searchAction(value) {
    // 校验
    this.doFetch(value)
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