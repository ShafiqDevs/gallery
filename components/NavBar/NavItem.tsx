import Link from 'next/link';
import { Component, JSXElementConstructor } from 'react';
import { IconType } from 'react-icons';
import { Router, useRouter } from 'next/router';
import { useState } from 'react';

type Props = {
	icon: React.ReactElement<any, any>;
	text: string;
	link: string;
	isCollapesed: boolean;
	isLocked: boolean;
};

export default function NavItem(props: Props) {
	const router = useRouter();

	const bgColor = () => {
		return router.pathname === props.link
			? `bg-secondary`
			: `bg-transparent hover:bg-hover`;
	};
	const cursorPointer = () => {
		return props.isLocked
			? `hover:cursor-not-allowed opacity-30  `
			: `hover:cursor-pointer`;
	};

	{
		return props.isCollapesed ? (
			<div
				className={`${bgColor()} ${cursorPointer()} w-full h-fit  rounded-xl shadow-icon flex items-center  gap-3 p-3`}>
				<Link href={props.link}>
					<span className='text-2xl text-icon'>{props.icon}</span>
				</Link>
			</div>
		) : (
			<div
				className={`${bgColor()} ${cursorPointer()} w-full h-[3rem] rounded-xl shadow-icon flex items-center gap-3 pl-3`}>
				<span className='text-2xl text-icon'>{props.icon}</span>
				<Link href={props.link}>
					<h1 className='text-lg text-white'>{props.text}</h1>
				</Link>
			</div>
		);
	}
}
