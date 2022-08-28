import React from 'react';
import { BiDotsHorizontalRounded } from 'react-icons/bi';

type Props = {
	imgUrl?: string;
	profileName?: string;
	profileId?: string;
	isCollapesed: boolean;
};

export default function ProfileController(props: Props) {
	const handleCollapseProfile = () => {
		return props.isCollapesed ? (
			<>
				<img
					src={`https://cdn.discordapp.com/avatars/421326536176566272/10336eaabc1ee01bb92a60b395a32152.png`}
					alt={`imgUrl`}
					width={`43px`}
					className={`rounded-full border-2 p-1`}
				/>
			</>
		) : (
			<>
				<img
					src={`https://cdn.discordapp.com/avatars/421326536176566272/10336eaabc1ee01bb92a60b395a32152.png`}
					alt={`imgUrl`}
					width={`43px`}
					className={`rounded-full `}
				/>
				<div className='flex flex-col'>
					<h1 className='text-white mb-[-4px]'>Shaf</h1>
					<h1 className='text-gray-400/60 font-bold'>{`#7467`}</h1>
				</div>
				<div
					className={`hover:bg-secondary hover:cursor-pointer flex items-center justify-center  h-9 w-9 ml-auto rounded-lg`}>
					<span className='text-2xl text-icon'>
						<BiDotsHorizontalRounded />
					</span>
				</div>
			</>
		);
	};

	return (
		<div className={`${props.isCollapesed? `bg-transparent`: `bg-secondary/50`} w-full h-fit p-3 rounded-2xl flex gap-3 items-center`}>
			{handleCollapseProfile()}
		</div>
	);
}
