import HeadersBody from "../headersBody/HeadersBody";
import Users from "../users/Users";
import "./body.scss";

export default function Body() {
  return (
    <div className="body">
      <div className='bodyContainer'>
        <HeadersBody />
        <Users />
      </div>
    </div>
  );
}
