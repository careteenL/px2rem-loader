# @careteen/px2rem-loader

> [px2rem-loader](https://github.com/Jinjiang/px2rem-loader)不支持`exlude`，正是本库的动机。

## 快速使用

```shell
npm i @careteen/px2rem-loader
```

```js
  {
    test: /\.css$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: '@careteen/px2rem-loader',
        options: {
          remUnit: 75,
          remPrecision: 8,
          exclude: /antd\.css/,
        }
      }
    ]
  }
```
