import React from "react";
import Layout from "../../../layouts/layout";
import loginTopStyle from "../../../styles/loginTopStyle";

const LoginTop: React.FC = () => {
  return (
    <>
      <Layout>
        {loginTopStyle}
        <div className="firstWrapper">
          <form>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <input type="submit" />
          </form>
        </div>
      </Layout>
    </>
  );
};

export default LoginTop;
