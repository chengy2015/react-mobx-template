/*
 * -store
 * zl
 */
import React from "react";
import { observable, action, reaction } from "mobx";

class Home {
  @observable initData = {
    start: 0,
    end: 20,
    visible: false,
  };
  @observable highHold = "";
  @observable checkAll = false;
  @observable check1 = false;
  @observable check2 = false;

  @action changeShow(show) {
    this.visible = show;
  }
  @action changeHighHold(val) {
    this.highHold = val ? `${val}${this.initData.start}` : "无数据";
  }
  @action onCheck(key, checked) {
    if (!this[key]) return;
    this[key] = checked;
    if (key === "checkAll") {
      this.check1 = this.check2 = checked;
      return;
    }
    this.checkAll = this.check1 && this.check2;
  }
}
let home = new Home();
const initHome = () => {
  const newStore = new Home();
  home = newStore;
};
reaction(
  () => {
    [home.visible];
  },
  () => {}
);
export default home;
