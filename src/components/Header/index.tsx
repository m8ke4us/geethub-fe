import Logo from '@/components/Logo';

function Header() {
  return (
    <header className="p-layout flex items-center justify-center md:justify-between">
      <Logo />
      <div className="ml-4">username | 로그인을 해주세요!</div>
    </header>
  );
}

export default Header;
