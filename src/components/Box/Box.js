import style from "./Box.module.scss";

export default function Box({
  children,
  width,
  height,
  left,
  right,
  paddingLeft,
  paddingRight,
}) {
  return (
    <div
      style={{
        width,
        height,
        marginLeft: left,
        marginRight: right,
        paddingLeft: paddingLeft,
        paddingRight: paddingRight,
      }}
      className={style.container}
    >
      {children}
    </div>
  );
}
