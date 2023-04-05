import Head from "next/head";
import A from "./A";

export default function MainContainer({ children }) {
  return (
    <>
      <Head>
        <meta keywors="snezhok next js"></meta>
        <title>Главная страница</title>
      </Head>
      <div>
        <A href={"/"} text={"Главная"} />
        <A href={"/users"} text={"Пользователи"} />
      </div>
      <div>{children}</div>
    </>
  );
}
