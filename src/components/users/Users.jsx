import "./users.scss";

export default function Users() {
  return (
    <div className="users">
      <div className="usersHeader">
        <div>№</div>
        <div>ФИО пользователя</div>
        <div>Роль</div>
        <div>Дата рождения</div>
        <div>Место рождения</div>
        <div>Почта</div>
        <div>Телефон</div>
        <div>Регистрация</div>
        <div>Изменение</div>
        <div>Ред</div>
        <div>Удалить</div>
      </div>

      <div className="usersBody"></div>
    </div>
  );
}
