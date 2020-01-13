import React from 'react';
import footerStyle from '../../../static/footerStyle';

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
    {footerStyle}
  </footer>
);

export default Footer;