import React from 'react';

import * as S from './styles';

const FooterComponent = () => {
  return (
    <S.footerContainer>
      <S.textContainer>
        Site desenvolvido por :
        <S.linkContainer href="https://sergiozanata.com.br/">
          &nbsp; &nbsp;Sergio Z Carvalho
        </S.linkContainer>
      </S.textContainer>
    </S.footerContainer>
  );
};

export default FooterComponent;
