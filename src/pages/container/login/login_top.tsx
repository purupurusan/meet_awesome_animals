import React from "react";
import Layout from "../../../layouts/layout";

const index: React.FC = () => {
  return (
    <>
      <Layout>
        <form>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <input type="submit" />
        </form>
      </Layout>
    </>
  );
};

export default index;
