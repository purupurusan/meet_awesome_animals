import React from 'react';

const Footer = () => (
  <footer>
    <ul>
      <li><a href="jsp/about_us.jsp">私たちについて</a></li>
      <li><a href="jsp/terms_of_service.jsp">利用規約</a></li>
      <li><a href="jsp/privacy_policy.jsp">プライバシーポリシー</a></li>
      <li><a href="jsp/disclaimer.jsp">免責事項</a></li>
      <li><a href="jsp/help.jsp">お問い合わせ・広告掲載</a></li>
    </ul>
    <p>Copyright© eing, All rights reserved.</p>
    <style jsx>{`
      footer {
        border-top: 1px solid white;
        padding-top: 5px;
        margin-top: 5px;
        text-align: center;
        background-color: white;
        color: black;
        padding-bottom: 0;
      }

      footer li {
        display: inline-block;
        padding-right: 8%;
      }

      footer a {
       text-decoration: none;
       color: black;
      }

      footer a:hover {
        text-decoration: underline;
      }

      footer p {
        font-size: 70%;
        padding-top: 3%;
      }

      }
    `}</style>
  </footer>
);

export default Footer;