import style from "./CardItem.module.scss";

export default function CardItem() {
  return (
    <li className={style.container}>
      <p className={style.title}>Treadmill users</p>
      <div className={style.counterBtnContainer}>
        <div className={style.counterContainer}>
          <span className={style.counterValue}>0</span>
          <span>Yesterday</span>
        </div>
        <div className={style.counterContainer2}>
        <span className={style.counterValue}>0</span>
          <span>Selected period</span>
        </div>
      </div>

<div className={style.backdrop}>
  <p className={style.subtitle}>Daily trend</p>
<div className={style.context}></div>
</div>
    
    </li>
  );
}




