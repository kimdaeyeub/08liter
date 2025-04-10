import { Controller, useForm } from 'react-hook-form';
import React, { useEffect, useState } from "react";
import axios from 'axios';

const SignupPage = () => {

  const API_URL = `https://dev-rest.08liter.com/api-v200/beta/member/join`;

  const [FormValid, setFormValid] = useState(false);

  const { register, handleSubmit, watch, setValue, control, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      name: '',
      phoneNumber: '',
      password: '',
      passwordConfirm: '',
      nickname: '',
      country: 'kr',
      agreeAll: false,
      serviceTerms: false,
      personalInfo: false,
      locationInfo: false
    }
  });

  const { email, password, passwordConfirm, nickname } = watch();

  async function onSubmit(a) {
    let data = {
      email: a.email,
      passwd: a.password,
      ckpasswd: a.passwordConfirm,
      nickname: a.nickname,
      tag: 'a,b,c,d,e',
      snsCode: '0101',
      snsId: a.email,
      provisions: a.serviceTerms ? [5, 6] : [],
      memberDetails: [
        {
          memberDetailId: null,
          groupValue: 'F01015',
          groupKey: '0101',
          groupCode: '0100',
        },
      ],
      regionId: '18,40',
      categoryId: '4,5,7',
      birthday: '19000101',
      country: a.country,
      gender: 'M',
      description: '',
      marriedYn: 'N',
      children: '1',
    };
    axios
      .post(API_URL, data, {
        timeout: 10000
      })
      .then((res) => {
        if (res.data.statusCode === '0000') {
          window.alert("회원가입 성공.");
          window.location.href = "/signin";
        } else {
          window.alert(`[${res.data.statusCode}]: ${res.data.message}`);
        }
      })
      .catch((e) => {
        console.error(e);
      })
  };

  useEffect(() => {
    setFormValid(
      email !== '' &&
      password !== '' &&
      passwordConfirm !== '' &&
      nickname !== '',
    );
  }, [email, password, passwordConfirm, nickname]);

  return (
    <div className="bg-[#F3F2F8] flex justify-center pb-[200px]">
      <section className="w-[440px] mx-auto mt-[100px]">
        <div className="flex justify-center">
          <img src="/icons/login_logo.svg" alt="logo" className="mb-[60px]" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[10px]">
            <label className="font-medium text-sm text-[#1B1B1B]" htmlFor="email">이메일</label>
            <input className="bg-white w-full h-[46px] rounded-[4px] border border-[#CCCCCC] px-[14px] flex items-center font-medium text-sm text-[#1b1b1b] placeholder:text-[#999999]" id="email" type="email" placeholder="이메일 주소를 입력해주세요."
              {...register('email', {
                required: '이메일을 입력해주세요.',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: '유효한 이메일 주소가 아닙니다.',
                },
              })} />
            {errors.email && (<p className="font-medium text-base text-[#FF0101]">{errors.email.message}</p>)}
          </div>
          <div className="flex flex-col gap-[10px]">
            <label className="font-medium text-sm text-[#1B1B1B]" htmlFor="name">이름</label>
            <input className="bg-white w-full h-[46px] rounded-[4px] border border-[#CCCCCC] px-[14px] flex items-center font-medium text-sm text-[#1b1b1b] placeholder:text-[#999999]" id="name" type="text" placeholder="이름을 입력해주세요."
              {...register('name', {
                required: '이름을 입력해주세요.',
              })} />
            {errors.name && (<p className="font-medium text-base text-[#FF0101]">{errors.name.message}</p>)}
          </div>
          <div className="flex flex-col gap-[10px]">
            <label className="font-medium text-sm text-[#1B1B1B]" htmlFor="phoneNumber">핸드폰 번호</label>
            <input className="bg-white w-full h-[46px] rounded-[4px] border border-[#CCCCCC] px-[14px] flex items-center font-medium text-sm text-[#1b1b1b] placeholder:text-[#999999]" id="phoneNumber" type="text" placeholder="핸드폰 번호를 입력해주세요."
              {...register('phoneNumber', {
                required: '핸드폰 번호를 입력해주세요.',
              })} />
            {errors.phoneNumber && (<p className="font-medium text-base text-[#FF0101]">{errors.phoneNumber.message}</p>)}
          </div>
          <div className="flex flex-col gap-[10px]">
            <label className="font-medium text-sm text-[#1B1B1B]" htmlFor="password">비밀번호</label>
            <input className="bg-white w-full h-[46px] rounded-[4px] border border-[#CCCCCC] px-[14px] flex items-center font-medium text-sm text-[#1b1b1b] placeholder:text-[#999999]" id="password" type="password" placeholder="영문, 숫자 조합 8~15자리"
              {...register('password', {
                required: '비밀번호를 입력해주세요.',
                minLength: { value: 8, message: '최소 8자 이상이어야 합니다.' },
                maxLength: {
                  value: 15,
                  message: '최대 15자까지 입력 가능합니다.'
                }
              })} />
            {errors.password && (<p className="font-medium text-base text-[#FF0101]">{errors.password.message}</p>)}
          </div>
          <div className="flex flex-col gap-[10px]">
            <label className="font-medium text-sm text-[#1B1B1B]" htmlFor="passwordConfirm">비밀번호 확인</label>
            <input className="bg-white w-full h-[46px] rounded-[4px] border border-[#CCCCCC] px-[14px] flex items-center font-medium text-sm text-[#1b1b1b] placeholder:text-[#999999]" id="passwordConfirm" type="password" placeholder="비밀번호를 다시 입력해주세요."
              {...register('passwordConfirm', {
                required: '비밀번호 확인을 입력해주세요.',
                validate: (val) => {
                  const { password } = watch()
                  if (password !== val) {
                    return '비밀번호가 일치하지 않습니다.'
                  }
                }
              })} />
            {errors.passwordConfirm && (<p className="font-medium text-base text-[#FF0101]">{errors.passwordConfirm.message}</p>)}
          </div>
          <div className="flex justify-between gap-[24px]">
            <div className="flex flex-col gap-[10px] w-full">
              <label className="font-medium text-sm text-[#1B1B1B]" htmlFor="nickname">닉네임</label>
              <input className="bg-white w-full h-[46px] rounded-[4px] border border-[#CCCCCC] px-[14px] flex items-center font-medium text-sm text-[#1b1b1b] placeholder:text-[#999999]" id="nickname" type="text" placeholder="사용할 닉네임을 입력해주세요."
                {...register('nickname', {
                  required: '닉네임을 입력해주세요.',
                })} />
              {errors.nickname && (<p className="font-medium text-base text-[#FF0101]">{errors.nickname.message}</p>)}
            </div>
            <div className="flex flex-col gap-[10px] min-w-[150px]">
              <label className="font-medium text-sm text-[#1B1B1B]" htmlFor="country">국가 선택</label>
              <select className="bg-white w-full h-[46px] rounded-[4px] border border-[#CCCCCC] px-[14px] flex items-center font-medium text-sm text-[#1b1b1b] placeholder:text-[#999999]" id="country"{...register('country')}>
                <option value="kr">한국</option>
                <option value="us">미국</option>
                <option value="jp">일본</option>
                <option value="etc">기타</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <span className="font-medium text-sm text-[#1B1B1B]">이용약관 동의</span>
            <div className="bg-white rounded-[4px] p-[16px] flex flex-col gap-[10px]">
              <div>
                <Controller name="agreeAll" control={control} render={({ field }) => (
                  <label className="inline-flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="peer sr-only" checked={field.value} onChange={(e) => {
                      field.onChange(e.target.checked)
                      if (e.target.checked) {
                        setValue('serviceTerms', true)
                        setValue('personalInfo', true)
                        setValue('locationInfo', true)
                      } else {
                        setValue('serviceTerms', false)
                        setValue('personalInfo', false)
                        setValue('locationInfo', false)
                      };
                    }} />
                    <div className="flex gap-[10px] items-start">
                      <div className="w-[18px] h-[18px] min-w-[18px] min-h-[18px]">
                        <img alt="checkbox" className="w-full h-full" src={
                          field.value
                            ? '/icons/circle_checkbox_selected.svg'
                            : '/icons/circle_checkbox.svg'
                        } />
                      </div>
                      <span className="font-normal text-sm text-[#1B1B1B]">전체 동의하기</span>
                    </div>
                  </label>
                )} />
              </div>
              <div className="w-full h-[1px] bg-[#CCCCCC]/80" />
              <div className="flex items-center justify-between">
                <Controller name="serviceTerms" control={control} render={({ field }) => (
                  <label className="inline-flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="peer sr-only" checked={field.value} onChange={field.onChange} />
                    <div className="w-[18px] h-[18px] min-w-[18px] min-h-[18px]">
                      <img alt="checkbox" className="w-full h-full" src={
                        field.value
                          ? '/icons/circle_checkbox_selected.svg'
                          : '/icons/circle_checkbox.svg'
                      } />
                    </div>
                    <span className="font-medium text-sm text-[#999999]">서비스 이용약관 동의 및 연령 확인</span>
                  </label>
                )} />
                <button type="button" className="font-medium text-sm text-[#458EF6] underline cursor-pointer">전문보기</button>
              </div>
              <div className="flex items-center justify-between">
                <Controller name="personalInfo" control={control} render={({ field }) => (
                  <label className="inline-flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="peer sr-only" checked={field.value} onChange={field.onChange} />
                    <div className="w-[18px] h-[18px] min-w-[18px] min-h-[18px]">
                      <img alt="checkbox" className="w-full h-full"
                        src={
                          field.value
                            ? '/icons/circle_checkbox_selected.svg'
                            : '/icons/circle_checkbox.svg'
                        } />
                    </div>
                    <span className="font-medium text-sm text-[#999999]">개인정보 수집 및 이용 동의</span>
                  </label>
                )} />
                <button type="button" className="font-medium text-sm text-[#458EF6] underline cursor-pointer">전문보기</button>
              </div>
              <div className="flex items-center justify-between">
                <Controller name="locationInfo" control={control} render={({ field }) => (
                  <label className="inline-flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="peer sr-only" checked={field.value} onChange={field.onChange} />
                    <div className="w-[18px] h-[18px] min-w-[18px] min-h-[18px]">
                      <img alt="checkbox" className="w-full h-full"
                        src={
                          field.value
                            ? '/icons/circle_checkbox_selected.svg'
                            : '/icons/circle_checkbox.svg'
                        } />
                    </div>
                    <span className="font-medium text-sm text-[#999999]">위치정보 수집 및 이용 동의</span>
                  </label>
                )} />
                <button type="button" className="font-medium text-sm text-[#458EF6] underline cursor-pointer">전문보기</button>
              </div>
            </div>
          </div>
          <button type="submit" disabled={!FormValid} className={
            FormValid
              ? 'w-full h-[60px] bg-[#1B1B1B] rounded-[4px] cursor-pointer'
              : 'w-full h-[60px] bg-[#CCCCCC] rounded-[4px] cursor-not-allowed'
          } >
            <span className="font-bold text-lg text-white">가입하기</span>
          </button>
        </form>
      </section>
    </div >
  )
};

export default SignupPage;
