import style from './TitleForTable.module.scss'

export default function ({children}){
    return(<p className={style.title}>{children}</p>)
}