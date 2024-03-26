import React from 'react';
import NavLink from '../small-components/NavLink';
import { AiOutlineHome } from 'react-icons/ai';
import { RxDashboard } from 'react-icons/rx';
import { BsTrainFront } from 'react-icons/bs';
import { MdOutlinePolicy, MdOutlineQuiz } from 'react-icons/md';
import { GiProgression } from 'react-icons/gi';
import { IoIdCardOutline } from 'react-icons/io5';
const SideBar = () => {
	return (
		<div className='w-48 h-screen bg-gray-100'>
			<div className='space-y-2'>
				<NavLink to='/home' label='Home' icon={<AiOutlineHome />} />
				<NavLink to='/dashboard' label='Dashboard' icon={<RxDashboard />} />
				<NavLink to='/training' label='Training' icon={<BsTrainFront />} />
				<NavLink to='/policy' label='User Policy' icon={<MdOutlinePolicy />} />
				<NavLink to='/quiz' label='Quiz' icon={<MdOutlineQuiz />} />
				<NavLink to='/progress' label='Progress' icon={<GiProgression />} />
				<NavLink
					to='/idCard'
					label='Gnerate ID card'
					icon={<IoIdCardOutline />}
				/>
				<NavLink to='/test' label='Support Ticket' icon={<IoIdCardOutline />} />
			</div>
		</div>
	);
};

export default SideBar;
