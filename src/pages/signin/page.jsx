import { useForm } from 'react-hook-form'

import React from "react";

const SigninPage = () => {
  return (
    <div className="bg-[#F3F2F8] h-screen flex justify-center">
      <section className="w-[440px] mx-auto mt-[140px]">
        <div className="flex justify-center">
          <img src="/icons/login_logo.svg" alt="logo" className="mb-[60px]" />
        </div>
        <div>
          <input className="bg-white w-full h-[46px] rounded-tl-[4px] rounded-tr-[4px] border border-[#CCCCCC] px-[20px] flex items-center font-medium text-sm text-[#1b1b1b] placeholder:text-[#999999]" type="email" name="email" id="email" placeholder="이메일" />
          <input className="bg-white w-full h-[46px] rounded-bl-[4px] rounded-br-[4px] border-l border-r border-b border-[#CCCCCC] px-[20px] flex items-center font-medium text-sm text-[#1b1b1b] placeholder:text-[#999999]" type="password" name="password" id="password" placeholder="비밀번호" />        
        </div>
      </section>
    </div>
  )
};

export default SigninPage;
