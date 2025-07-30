import React, { useState } from 'react';


import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

import TabMenu from '@/components/TabMenu';
import Accordion from '@/components/Accordion';
import SwitchExample from '@/components/SwitchExample';
import LayerPopup from '@/components/LayerPopup';




function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-slate-600 dark:text-zinc-200 dark:hover:text-slate-600"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {

  const panels = [
    {
      label:'1',
      content:"11111111111111"
    },
    {
      label:'2',
      content:"22222222222222"
    },
    {
      label:'3',
      content:"333333333333333"
    },
    {
      label:'4',
      content:"444444444444444"
    },
    {
      label:'5',
      content:"55555555555555555"
    },
    {
      label:'6',
      content:"6666666666666666"
    },
  ]


  const [ isPopup1Open, setIsPopup1Open ] = useState(false);
  const [ isPopup2Open, setIsPopup2Open ] = useState(false);
  const [ isPopup3Open, setIsPopup3Open ] = useState(false);

  return (
    <>
      <Head>
        <title>React Template</title>
        <meta
          name="description"
          content="React Template"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="temp-title">탭메뉴</div>
          <div className="lg:pl-20">
            <TabMenu />
          </div>
          <div className="temp-title">아코디언메뉴</div>
          <div className="lg:order-first lg:row-span-2">
            <Accordion panels={panels} />
          </div>
          <div className="temp-title">토글 (Toggle switch)</div>
          <div className="lg:pl-20">
            <SwitchExample />
          </div>


          <div className="temp-title">레이어팝업</div>
          <div className="lg:pl-20">
            <button 
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 hover:-translate-y-1"
              onClick={() => setIsPopup1Open(true)}
            >
              기본 팝업 열기
            </button>


            <button 
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-lg hover:-translate-y-1 ml-4"
              onClick={() => setIsPopup2Open(true)}
            >
              폼 팝업 열기
            </button>

            <button 
              className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-lg hover:-translate-y-1 ml-4"
              onClick={() => setIsPopup3Open(true)}
            >
              큰 팝업 열기
            </button>
          </div>

          {/* 기본 팝업 */}
          <LayerPopup
            isOpen={isPopup1Open}
            onClose={() => setIsPopup1Open(false)}
            title="기본 팝업"
          >
            <div className="space-y-4">
              <p className="text-gray-600">
                이것은 기본 레이어 팝업 입니다.
              </p>
              <p className="text-gray-600">배경을 클릭하거나 X버튼을 클릭하면 닫힘</p>
              <div className="flex justify-end space-x-2 pt-4">
                <button 
                  className="px-4 py-2 text-gray-500 hover:text-gray-700 transition-all duration-200 hover:bg-gray-100 rounded transform hover:scale-105 active:scale-95"
                  onClick={() => setIsPopup1Open(false)}
                >
                  취소
                </button>
                <button 
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all duration-200 transform hover:scale-105 active:scale-95 hover:shadow-lg"
                  onClick={() => setIsPopup1Open(false)}
                >
                  확인
                </button>
              </div>
            </div>
          </LayerPopup>


          {/* 폼 팝업 */}
        <LayerPopup
          isOpen={isPopup2Open}
          onClose={() => setIsPopup2Open(false)}
          title="사용자 정보 입력"
          width="500px"
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                이름
              </label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 transform focus:scale-[1.02]"
                placeholder="이름을 입력하세요"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                이메일
              </label>
              <input 
                type="email" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 transform focus:scale-[1.02]"
                placeholder="이메일을 입력하세요"  
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                메시지
              </label>
              <textarea 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 transform focus:scale-[1.02]"
                rows="3"
                placeholder="메시지를 입력하세요"
              />
            </div>
            
            <div className="flex justify-end space-x-2 pt-4">
              <button 
                className="px-4 py-2 text-gray-500 hover:text-gray-700 transition-all duration-200 hover:bg-gray-100 rounded transform hover:scale-105 active:scale-95"
                onClick={() => setIsPopup2Open(false)}
              >
                취소
              </button>
              <button 
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-all duration-200 transform hover:scale-105 active:scale-95 hover:shadow-lg"
                onClick={() => setIsPopup2Open(false)}
              >
                저장
              </button>
            </div>
          </div>
        </LayerPopup>

        {/* 큰 팝업 */}
        <LayerPopup
          isOpen={isPopup3Open}
          onClose={() => setIsPopup3Open(false)}
          title="상세 정보"
          width="600px"
          height="500px"
        >
          <div className="space-y-4 h-full">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded transition-all duration-200 hover:bg-gray-100 hover:shadow-md transform hover:-translate-y-1">
                <h3 className="font-semibold text-gray-800 mb-2">정보 1</h3>
                <p className="text-gray-600 text-sm">
                  여기에 상세한 정보가 들어갑니다. 
                  이 팝업은 더 큰 크기로 만들어졌습니다.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded transition-all duration-200 hover:bg-gray-100 hover:shadow-md transform hover:-translate-y-1">
                <h3 className="font-semibold text-gray-800 mb-2">정보 2</h3>
                <p className="text-gray-600 text-sm">
                  그리드 레이아웃을 사용하여 
                  정보를 체계적으로 표시할 수 있습니다.
                </p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded transition-all duration-200 hover:bg-blue-100 hover:shadow-md transform hover:-translate-y-1">
              <h3 className="font-semibold text-blue-800 mb-2">주요 특징</h3>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• 반응형 디자인</li>
                <li>• 배경 클릭으로 닫기</li>
                <li>• ESC 키 지원 (추가 가능)</li>
                <li>• 커스터마이징 가능한 크기</li>
              </ul>
            </div>
            
            <div className="flex justify-end space-x-2 pt-4">
              <button 
                className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-all duration-200 transform hover:scale-105 active:scale-95 hover:shadow-lg"
                onClick={() => setIsPopup3Open(false)}
              >
                확인
              </button>
            </div>
          </div>
        </LayerPopup>

          <div className="temp-title">토글 (Colored draggable switch with label)</div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="mailto:vjordan.cs@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                vjordan.cs@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
