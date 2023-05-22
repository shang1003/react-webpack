import React, { Component } from 'react'
import { Card, Button } from 'antd'
import { inject, observer } from 'mobx-react'
@inject('rootStore')
@observer
class MobxTest extends Component {
    changeData=()=>{
        this.props.rootStore.setNum()
    }
    render() {
        return <Card
            title="测试mobx"
            style={{
                width: 300,
            }}
        >
            <p>随机数是：{this.props.rootStore.num}</p>
            <Button onClick={this.changeData}>点击改变store中num</Button>
        </Card>
    }
}

export default MobxTest