import style from './ContainerHeader.module.scss'

export default function ContainerHeader({children}){
   return(
    <div className={style.container}>
        {children}
    </div>
   )
}