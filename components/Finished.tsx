'use client'

import React from 'react'
import Image from 'next/image'
import * as S from './Finished.module.css'
import caixaLogo from '../images/caixa.png'
import smileLogo from '../images/smile-logo.png'
import checkedIcon from '../images/checked.png'
import logo from '../images/logo.png'

export default function Finished() {
  const openWhatsapp = () => {
    // location.href = 'https://api.whatsapp.com/send?phone=553171412894&text=Solicitar%20Empr%C3%A9stimo!'
  }

  return (
    <div className={S.container}>
      <div className={S.panel}>
        <div className={S.imageContainer}>
          <Image
            src={caixaLogo}
            width={40}
            height={40}
            alt='Picture of the author'
          />
        </div>
        <div className={S.caixaLogo}>
          <Image
            src={logo}
            layout='responsive'
            alt='Caixa Tem Logo'
          />
        </div>
        <div className={S.smileLogo}>
          <Image
            src={checkedIcon}
            layout='responsive'
            alt='Caixa Tem Logo'
          />
        </div>
        <button className={S.button} onClick={openWhatsapp}>
          CADASTRO EFETUADO COM SUCESSO!
        </button>
        <div className={S.help}>
          <span>Favor retornar por meio do WhatsApp</span>
          <span>Preciso de ajuda</span>
          <div className={S.version}>V1.87.1</div>
        </div>
      </div>
    </div>
  )
}
