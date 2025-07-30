import Image from 'next/future/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import youphoria from '@/images/logos/YOUphoria.png'
import orb from '@/images/logos/orb.gif'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoHeart from '@/images/logos/gwc.png'

const projects = [
  {
    name: '배경컬러 스타일',
    description1:'<div class="bg-zinc-50">', description11:'연한 아연색',
    description2:'<div class="bg-white">', description22:'흰색',
    description3:'<div class="bg-gray-100">', description33:'연한 회색',
    description4:'<div class="bg-blue-50">', description44:'연한 파란색',
    description5:'<div class="bg-green-50">', description55:'연한 초록색',
    description6:'<div class="bg-red-50">', description66:'연한 빨간색',
    description7:'<div class="bg-purple-50">', description77:'연한 보라색',
    description8:'<div class="bg-slate-100">', description88:'슬레이트 색상',

    link: {
      href: 'https://#',
    },
    logo: youphoria,
  },
  {
    name: '기본 숫자 기본단위(4px 단위)',
    title: 'width 클래스 단위',
    width1:'w-0', description11:'0px',
    width2:'w-1', description22:'4px',
    width3:'w-2', description33:'8px',
    width4:'w-3', description33:'12px',
    width5:'w-4', description33:'16px',
    width6:'w-5', description33:'20px',
    description7:'w-6', description33:'24px',
    // description3:'w-7', description33:'20px',
    description3:'w-8', description33:'32px',
    description3:'w-10', description33:'40px',
    description3:'w-12', description33:'48px',
    description3:'w-14', description33:'56px',
    description3:'w-16', description33:'64px',
    description3:'w-20', description33:'80px',
    description3:'w-24', description33:'96px',
    description3:'w-28', description33:'112px',
    description3:'w-32', description33:'128px',
    description3:'w-36', description33:'144px',
    description3:'w-40', description33:'160px',
    description3:'w-44', description33:'176px',
    description3:'w-48', description33:'192px',
    description3:'w-52', description33:'208px',
    description3:'w-56', description33:'224px',
    description3:'w-60', description33:'240px',
    description3:'w-64', description33:'256px',
    description3:'w-72', description33:'288px',
    description3:'w-80', description33:'320px',
    description3:'w-96', description33:'384px',
    
    link: {
      href: 'https://tailwind-animation-exploration.vercel.app/',
      label: 'tailwind-animation-exploration.vercel.app/',
    },
    logo: orb,
  },
  {
    name: 'Girls Who Code TXST',
    description:
      "I've created the entire structure of our Girls Who Code chapter, including our website! It utilizes Stripe's API to accept donations that fund our events and activities.",
    link: { href: 'http://gwc-txst.com', label: 'gwc-txst.com' },
    logo: logoHeart,
  },
  {
    name: 'Java vs. C++',
    description:
      'Creating an ad-free website that highlights the syntax differences between Java and C++ to benefit the curriculum of my Object Oriented Programming class.',
    link: {
      href: 'https://cpp-vs-java.vercel.app/',
      label: 'cpp-vs-java.vercel.app',
    },
    logo: logoAnimaginary,
  },
  // {
  //   name: 'OpenShuttle',
  //   description:
  //     'The schematics for the first rocket I designed that successfully made it to orbit.',
  //   link: { href: '#', label: 'github.com' },
  //   logo: logoOpenShuttle,
  // },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Victoria Jordan</title>
        <meta
          name="description"
          content="Things I’ve made trying to put my dent in the universe."
        />
      </Head>
      <SimpleLayout
        title="Tailwind CSS 스타일 정리"
        intro="React, Next.js, and TailwindCSS"
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-2"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8 rounded-full"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>
                <div>{project.description1}{project.description11}</div>
                <div>{project.description2}{project.description22}</div>
                <div>{project.description3}{project.description33}</div>
                <div>{project.description4}{project.description44}</div>
                <div>{project.description5}{project.description55}</div>
                <div>{project.description6}{project.description66}</div>
                <div>{project.description7}{project.description77}</div>
                <div>{project.description8}{project.description88}</div>
              </Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-slate-600 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
