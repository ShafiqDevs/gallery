import Link from 'next/link';
import { useRouter } from 'next/router';
import NavItem from './NavItem';
import {
	BiHome,
	BiHelpCircle,
	BiEdit,
	BiInfoCircle,
	BiMapAlt,
	BiLike,
	BiBookOpen,
	BiBrushAlt,
} from 'react-icons/bi';
import { HiOutlineArchive } from 'react-icons/hi';
import { IoChevronBackCircleOutline, IoPeopleOutline } from 'react-icons/io5';
import { useState } from 'react';
import ProfileController from './ProfileController';

export default function NavBar() {
	const [collapseNav, setCollapseNav] = useState<boolean>(false);

	const lockPage = true;

	const handleCollapseNav = () => {
		setCollapseNav((prev) => !prev);
	};

	const NavBarTitle = (title: string) => {
		return collapseNav ? (
			<div className='flex w-full items-center justify-center h-[3rem] p-2 mb-4 '>
				<span
					className='text-4xl mt-2 text-icon rotate-180 hover:cursor-pointer'
					onClick={handleCollapseNav}>
					<IoChevronBackCircleOutline />
				</span>
			</div>
		) : (
			<div className='flex w-full items-center h-[3rem] px-3 group mb-4'>
				<h1 className='text-white text-xl group-hover:underline'>{title}</h1>
				<span
					className='text-4xl mt-2 text-icon ml-auto hover:cursor-pointer'
					onClick={handleCollapseNav}>
					<IoChevronBackCircleOutline />
				</span>
			</div>
		);
	};

	const subHeader = (text: string) => {
		return <h1 className='text-icon pl-3 text-xs mb-4'>{text}</h1>;
	};

	return (
		<div
			// main navbar container
			className={`fixed h-screen py-6 ${
				collapseNav ? `w-28 pr-72 ` : `w-[18rem]`
			} hidden md:pl-9 md:pr-4 md:flex flex-col  left-0 top-0 bg-primary moveIt `}>
			{/* webApp title and navbar toggler */}
			{NavBarTitle(`MidGallery`)}
			{/* sub container */}
			<div className='w-full h-fit border-b-[2px] pb-6 mb-5 flex flex-col items-center gap-2 border-gray-800'>
				<NavItem
					icon={<BiHome />}
					text={`Home`}
					link={`/`}
					isCollapesed={collapseNav}
					isLocked={!lockPage}
				/>
				<NavItem
					icon={<IoPeopleOutline />}
					text={`Community Gallery`}
					link={`/community`}
					isCollapesed={collapseNav}
					isLocked={!lockPage}
				/>
			</div>
			{/* sub container */}
			{subHeader(`TOOLS`)}
			<div className='w-full h-fit border-b-[2px] pb-6 mb-5 flex flex-col items-center gap-2 border-gray-800'>
				<NavItem
					icon={<BiMapAlt />}
					text={`Map`}
					link={`/map`}
					isCollapesed={collapseNav}
					isLocked={lockPage}
				/>
				<NavItem
					icon={<BiLike />}
					text={`Ranking`}
					link={`/ranking`}
					isCollapesed={collapseNav}
					isLocked={lockPage}
				/>
				<NavItem
					icon={<HiOutlineArchive />}
					text={`Archive`}
					link={`/archive`}
					isCollapesed={collapseNav}
					isLocked={lockPage}
				/>
				<NavItem
					icon={<BiBookOpen />}
					text={`Dictionary`}
					link={`/dictionary`}
					isCollapesed={collapseNav}
					isLocked={lockPage}
				/>
				<NavItem
					icon={<BiBrushAlt />}
					text={`Styles`}
					link={`/styles`}
					isCollapesed={collapseNav}
					isLocked={lockPage}
				/>
			</div>
			{/* sub container */}
			{subHeader(`HELP`)}
			<div className='w-full h-fit border-b-[2px] pb-10 mb-5 flex flex-col items-center gap-2 border-gray-800'>
				<NavItem
					icon={<BiEdit />}
					text={`Manage Account`}
					link={`/account`}
					isCollapesed={collapseNav}
					isLocked={!lockPage}
				/>
				<NavItem
					icon={<BiHelpCircle />}
					text={`Help & FAQ`}
					link={`/help`}
					isCollapesed={collapseNav}
					isLocked={!lockPage}
				/>
				<NavItem
					icon={<BiInfoCircle />}
					text={`About & Careers`}
					link={`/about`}
					isCollapesed={collapseNav}
					isLocked={!lockPage}
				/>
			</div>

			{/* authenticated profile  */}
			<div className='mt-auto'>
				<ProfileController isCollapesed={collapseNav} />
			</div>
		</div>
	);
}
