import './index.css'
// import 'amfe-flexible'
import '../../../src/flexible'

import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import { Button } from 'antd';

ReactDOM.render(<div>
  <Button type="primary">按钮</Button>
</div>, document.getElementById('root'))