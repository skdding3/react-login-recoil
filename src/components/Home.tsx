import React from "react";
import { Button, Input } from "@material-tailwind/react";

const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-5 py-72">
        <h1>로그인 하기</h1>
        <div className="flex flex-col w-72 gap-2">
          <Input type="text" label="username" />
          <Input type="password" label="password" />
        </div>
        <Button>Button</Button>
      </div>
    </>
  );
};

export default Home;
