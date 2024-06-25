import style from "./style.module.less";

export function Header(props) {
  return (
    <header className={style.header}>
      <div>
        <strong>Olá, user</strong>
        <span>Aqui estão as informações sobre suas vendas.</span>
      </div>
      <div className={style.userAvatarText}>
        <label htmlFor="Barra de pesquisa da plataforma">
          Barra de pesquisa da plataforma
        </label>
        <input
          type="text"
          id="Barra de pesquisa da plataforma"
          style={{
            backgroundImage: `url('data:image/svg+xml,%3Csvg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 19.5C15.4183 19.5 19 15.9183 19 11.5C19 7.08172 15.4183 3.5 11 3.5C6.58172 3.5 3 7.08172 3 11.5C3 15.9183 6.58172 19.5 11 19.5Z" stroke="%23272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3C/path%3E%3Cpath d="M21 21.5L16.65 17.15" stroke="%23272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3C/path%3E%3C/svg%3E%0A')`,
          }}
        />
        <span
          className={style.notification}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18 8.5C18 6.9087 17.3679 5.38258 16.2426 4.25736C15.1174 3.13214 13.5913 2.5 12 2.5C10.4087 2.5 8.88258 3.13214 7.75736 4.25736C6.63214 5.38258 6 6.9087 6 8.5C6 15.5 3 17.5 3 17.5H21C21 17.5 18 15.5 18 8.5Z' stroke='%23272727' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M13.73 21.5C13.5542 21.8031 13.3019 22.0547 12.9982 22.2295C12.6946 22.4044 12.3504 22.4965 12 22.4965C11.6496 22.4965 11.3054 22.4044 11.0018 22.2295C10.6982 22.0547 10.4458 21.8031 10.27 21.5' stroke='%23272727' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A`,
          }}
        ></span>
        <div className={style.ContainerUsuario}>
          <img
            src="https://github.com/CarlosDanyel.png"
            alt="Foto do Usuario {user}"
          />
          <span className={style.user}>Carlos</span>
        </div>
      </div>
    </header>
  );
}
