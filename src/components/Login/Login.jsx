import React from 'react'

export const Login = () => {
  return (
		<div className="login">
			<div className="register">
				<Link
					to="/register"
					className="register-log">
					Ro'yxatdan o'tish
				</Link>
			</div>
			<form onSubmit={handleSubmit} className="mt-12">
				<input
					ref={usernameRef}
					type="text"
					placeholder="Foydalanuvchi nomi"
					className="outline-none text-[14px] pb-2 border-b mt-3 w-[340px]"
				/>
				<input
					ref={passwordRef}
					type="password"
					placeholder="Elektron pochta (optinal)"
					className="outline-none text-[14px] pb-2 border-b mt-3 w-[340px]"
				/>
				<button onSubmit={handleReload} className="bg-[#53B175] w-[340px] py-2 text-white font-semibold rounded-3xl mt-16">
					Tizimga kirish
				</button>
			</form>
		</div>
	);
}
