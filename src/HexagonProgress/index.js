
import React from 'react';
import jq from './plugins/jquery.hexagonprogress';
import styles from './index.less';

const HexagonProgress = ({ size= "parent",
value= 0.2,
startAngle= 0.0,
lineWidth= null,
lineCap= "round",
clip= false,
background= null,
lineBackFill= {
    color: "rgba(0, 0, 0, .1)"
},
lineFrontFill= {
    gradient: ["#fb141d", "#fb0c58"]
},
animationStartValue= 0,
animation=false,
style=styles.hexagon
}) => {
    setTimeout(() => {
    console.log(jq("#hexagon-02"));
      jq("#hexagon-02").hexagonProgress({
        value:value,
        animation:animation,
        startAngle: startAngle,
        lineWidth: lineWidth,
        lineBackFill: lineBackFill,
        background: background,
        lineFrontFill: lineFrontFill
     });
      
    }, 50);
  
  return (
    <div>
      <div id="hexagon-02" className={style}></div>
    </div>
  );
};
export default HexagonProgress;

       