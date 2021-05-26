/*
 * -组件
 * zl
 */
import React from "react";
import { observer, inject } from "mobx-react";
import { Row, Col, Checkbox } from "antd";
import "./index.less";
@inject("home")
@observer
class Home extends React.Component {
  render() {
    const { checkAll, check1, check2 } = this.props.home;
    return (
      <div>
        <Row gutter={16}>
          <Col span={12}>
            <Checkbox
              value={checkAll}
              onchange={(e) => {
                this.props.home.onCheck("checkAll", e.target.checked);
              }}
            >
              checkAll
            </Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox
              value={check1}
              onchange={(e) => {
                this.props.home.onCheck("check1", e.target.checked);
              }}
            >
              check1
            </Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox
              value={check2}
              onchange={(e) => {
                this.props.home.onCheck("check2", e.target.checked);
              }}
            >
              check2
            </Checkbox>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Home;
