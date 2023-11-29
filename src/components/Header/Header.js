import {MobileMenuIcon} from '../../images/MobileMenuIcon'
import ContainerHeader from '../ContainerHeader/ContainerHeader'
import style from './Header.module.scss'

export default function Header(){
    return(
        <header className={style.container}>
         <ContainerHeader >
              
        <MobileMenuIcon />
        <span className={style.logo}>IDCUBE(NOIDA)</span>
  
        </ContainerHeader>
      </header>
    )
}