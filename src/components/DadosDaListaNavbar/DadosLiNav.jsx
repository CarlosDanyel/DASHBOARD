import style from "./style.module.less";

export function DadosLiNav(props) {
  return (
    <li className={style.dadosListaNavbar}>
      {props.svg}
      {props.name}
    </li>
  );
}
