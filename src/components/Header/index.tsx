import Logo from '@/components/Logo';

function Header() {
  return (
    <header className="flex items-center p-4">
      <div className="mr-2">
        <Logo />
      </div>
      <div>username | 로그인을 해주세요!</div>
    </header>
  );
}

export default Header;
