import type { FC } from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import style from './style.module.css'

export interface AppIconProps {
  size?: 'xs' | 'tiny' | 'small' | 'medium' | 'large'
  rounded?: boolean
  icon?: string            // 使うなら外から上書き可能に
  background?: string
  className?: string
}

const AppIcon: FC<AppIconProps> = ({
  size = 'medium',
  rounded = false,
  icon,
  background,
  className,
}) => {
  return (
    <span
      className={classNames(
        style.appIcon,
        size !== 'medium' && style[size],
        rounded && style.rounded,
        className ?? '',
      )}
      style={{ background }}
    >
      {/* 親が relative 指定なので fill でOK */}
      <Image
        src={icon ?? '/000.png'}
        alt="App icon"
        fill
        style={{ objectFit: 'cover', borderRadius: 'inherit' }}
        sizes="40px"
        priority
      />
    </span>
  )
}

export default AppIcon

