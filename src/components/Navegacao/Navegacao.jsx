import { GridIcon } from "../../assets/svg/GridIcon";
import { PowerIcon } from "../../assets/svg/PowerIcon";
import { SaveIcon } from "../../assets/svg/SaveIcon";
import { SettingsIcon } from "../../assets/svg/SettingsIcon";
import { ShoIcon } from "../../assets/svg/ShoIcon";
import { UserIcon } from "../../assets/svg/UserIcon";
import { DadosLiNav } from "../DadosDaListaNavbar/DadosLiNav";

import style from "./style.module.less";

export function Navegacao(props) {
  return (
    <nav className={style.navegacao}>
      <strong>
        <span>e</span>
        Front
      </strong>
      <ul>
        <DadosLiNav name="Dashboard" svg={<GridIcon />} />
        <DadosLiNav name="Carteira" svg={<SaveIcon />} />
        <DadosLiNav name="Transações" svg={<ShoIcon />} />
        <DadosLiNav name="Suporte" svg={<UserIcon />} />
        <li className={style.line}></li>
        <DadosLiNav name="Ajustes" svg={<SettingsIcon />} />
        <DadosLiNav name="Desconectar" svg={<PowerIcon />} />
      </ul>
    </nav>
  );
}
