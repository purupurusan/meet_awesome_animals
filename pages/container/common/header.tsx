import React from 'react';
import Link from 'next/link';
import Logo from '../../../images/logo';
import headerStyle from '../../../static/headerStyle';
import layout from '../../../static/layout';

const Header = () => (
  <header>
    <ul>
      <li><Link href='/'>
        <a className={'ourName'}><Logo /></a>
      </Link></li>
      <li><Link href='/container/hospital/hospital'>
        <a className={'nav hospital'}>hospital </a>
      </Link></li>
      <li><Link href='/container/salon/salon'>
        <a className={'nav salon'}>salon </a>
      </Link></li>
      <li><Link href='/'>
        <a className={'nav activity'}>activity </a>
      </Link></li>
      <li><Link href='/'>
        <a className={'nav sitter'}>sitter </a>
      </Link></li>
      <li><Link href='/'>
        <a className={'nav beOwner'}>be owner</a>
      </Link></li>
    </ul>
    {headerStyle}
    <style jsx global>{layout}</style>
  </header>
);

export default Header;
