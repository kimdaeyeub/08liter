import React, { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Cookies from 'js-cookie';

const SigninPage = () => {

  const API_URL = `https://dev-rest.08liter.com/api-v200/beta/member/login`;

  const [Token, setToken] = useState(null);
  const [RememberMe, setRememberMe] = useState(false);

  const SocialButton = [
    { snsCode: "0113", src: "/icons/login_kakaotalk.svg", alt: "카카오로 로그인" },
    { snsCode: "0156", src: "/icons/login_google.svg", alt: "구글로 로그인" },
    { snsCode: "0152", src: "/icons/login_apple.svg", alt: "애플로 로그인" },
    { snsCode: "0102", src: "/icons/login_facebook.svg", alt: "페이스북으로 로그인" }
  ];

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
    }
  });

  function rememberMe() {
    let next = !RememberMe;
    setRememberMe(next);
    localStorage.setItem("rememberMe", next.toString());
  };

  async function onSubmit(a) {
    let data = {
      snsCode: "0101",
      snsId: a.email,
      passwd: a.password,
      os: "WEB"
    };
    axios
      .post(API_URL, data, {
        timeout: 10000
      })
      .then((res) => {
        if (res.data.statusCode === "0000") {
          let token = res.data.result['X-08liter-token']
          let userInfo = {
            isCertOwn: res.data.result.isCertOwn,
            mustWriteReview: res.data.result.mustWriteReview,
            hasLiterPermit: res.data.result.literPermit
          };
          let expires = RememberMe ? 7 : undefined;
          Cookies.set('token', token, { expires });
          Cookies.set('userInfo', JSON.stringify(userInfo), { expires });
          Cookies.set('rememberMe', RememberMe ? 'true' : false, { expires });
          setToken(token);
        } else {
          window.alert(res.data.message);
        };
      })
      .catch((e) => {
        console.error(e);
      })
  };

  function socialLogin(a) {
    console.log(a);
  };

  useEffect(() => {
    const me = localStorage.getItem("rememberMe") === "true";
    setRememberMe(me);
  }, []);

  useEffect(() => {
    if (Token !== null) {
      window.location.href = "/";
    };
  }, [Token]);

  return (
    <div className="bg-[#F3F2F8] h-screen flex justify-center">
      <section className="w-[440px] mx-auto mt-[140px]">
        <div className="flex justify-center">
          <img src="/icons/login_logo.svg" alt="logo" className="mb-[60px]" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input className="bg-white w-full h-[46px] rounded-tl-[4px] rounded-tr-[4px] border border-[#CCCCCC] px-[20px] flex items-center font-medium text-sm text-[#1b1b1b] placeholder:text-[#999999]" type="email" name="email" id="email" placeholder="이메일"
            {...register("email", {
              required: "이메일을 입력해주세요.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "유효한 이메일 주소를 입력해주세요."
              }
            })} />
          {errors.email && (<p className="text-[#FF0101] text-sm font-medium mt-1">{errors.email.message}</p>)}
          <input className="bg-white w-full h-[46px] rounded-bl-[4px] rounded-br-[4px] border-l border-r border-b border-[#CCCCCC] px-[20px] flex items-center font-medium text-sm text-[#1b1b1b] placeholder:text-[#999999]" type="password" name="password" id="password" placeholder="비밀번호"
            {...register("password", {
              required: "비밀번호를 입력해주세요.",
              minLength: {
                value: 8,
                message: "비밀번호는 최소 8자 이상이어야 합니다."
              }
            })} />
          {errors.password && (<p className="text-[#FF0101] text-sm font-medium mt-1">{errors.password.message}</p>)}
          <div className="flex justify-between mt-[12.5px] mb-[40.5px]">
            <div onClick={() => rememberMe()} className="flex items-center gap-2 cursor-pointer">
              <img src={RememberMe ? "/icons/circle_checkbox_selected.svg" : "/icons/circle_checkbox.svg"} alt="checkbox" className="w-[18px] h-[18px]" />
              <span className="font-medium text-sm text-[#777777]">로그인 상태 유지</span>
            </div>
            <span className="font-medium text-sm text-[#777777] underline cursor-pointer">
              비밀번호 찾기
            </span>
          </div>
          <button type="submit" className="bg-[#1B1B1B] rounded-[4px] h-[60px] flex items-center justify-center w-full cursor-pointer mb-[30px]">
            <span className="text-white font-bold text-lg">로그인</span>
          </button>
        </form>
        <div className="flex items-center justify-center gap-[30px] mb-[60px]">
          {SocialButton.map((i, idx) => (
            <img key={idx} className="cursor-pointer" onClick={() => socialLogin(i.snsCode)} src={i.src} alt={i.alt} />
          ))}
        </div>
        <div className="flex flex-col items-center justify-center gap-[3px] mb-[20px]">
          <strong className="font-bold text-base text-[#1B1B1B]">
            리뷰가 수익이 되는 공팔리터와 함께 해주세요!
          </strong>
          <span className="font-medium text-sm text-[#777777]">
            회원가입 후 다양한 혜택을 누려보세요 :)
          </span>
        </div>
        <button onClick={() => window.location.href = '/signup'} className="rounded-[4px] h-[60px] flex items-center justify-center w-full cursor-pointer border border-[#1B1B1B]/50">
          <span className="text-[#1B1B1B] font-bold text-lg">회원가입</span>
        </button>
      </section>
    </div>
  );
};

export default SigninPage;
