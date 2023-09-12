import Image from 'next/image';

import { AVATAR_SRC } from '@/constants';

interface AvatarProps {
  path: string;
  alt: string;
  size: number;
}

function Avatar({ path, alt, size }: AvatarProps) {
  return (
    <div className="inline-block overflow-hidden rounded-full border-2 border-neutral-800">
      <Image src={`${AVATAR_SRC}/${path}`} alt={alt} width={size} height={size} />
    </div>
  );
}

export default Avatar;
