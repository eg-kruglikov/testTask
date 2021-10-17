import { useSelector } from "react-redux";
import "./headersBody.scss";

export default function HeadersBody() {
  const users = useSelector((state) => state.users);

  return (
    <div className="headersbody">
      <div>сортировка</div>
      <div>всего пользователей: {users.total}</div>
    </div>
  );
}
