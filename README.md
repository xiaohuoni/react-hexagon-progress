# oni-react-hexagon-progress
[![NPM version](https://img.shields.io/npm/v/oni-react-hexagon-progress.svg?style=flat)](https://npmjs.org/package/oni-react-hexagon-progress)
[![NPM downloads](http://img.shields.io/npm/dm/oni-react-hexagon-progress.svg?style=flat)](https://npmjs.org/package/oni-react-hexagon-progress)

change for [HexagonProgress](https://github.com/AndrewListat/HexagonProgress)

<img src="./page.png" width=300 />

## Getting Started

Install

```bash
# Install
$ npm install oni-react-hexagon-progress --save

```

#### Usage Examples

```javascript
function App(props) {
  const data ={
    value:0.5,
    animation:true,
    startAngle: 0,
    lineWidth: 20,
    lineBackFill: { color : "#fff"},
    background: { color : "rgba(0,0,0,0)" },
    // lineFrontFill: { image :bgImg },
    lineFrontFill: { color:'red' },
    style:styles.hexagon
};
  return (
    <div className={styles.wrap}>
    <HexagonProgress {...data}/>
     </div>
  );
}
```
## License

[MIT](https://tldrlegal.com/license/mit-license)
