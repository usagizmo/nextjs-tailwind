import React, { FC } from 'react'
import Link from 'next/link'
import { ROUTE } from '../constants/route'
import classnames from 'classnames'

interface Props {
  pathname: string
  queryId?: string
}

const CNavigation: FC<Props> = ({ pathname, queryId }) => {
  return (
    <ul className="flex">
      <li
        className={classnames('px-4', {
          'text-gray-900': pathname === ROUTE.HOME,
          'text-gray-500 hover:text-gray-900': pathname !== ROUTE.HOME,
        })}
      >
        <Link href={ROUTE.HOME}>HOME</Link>
      </li>
      <li
        className={classnames('px-4', {
          'text-gray-900': pathname === ROUTE.DETAIL_ID && queryId === '1',
          'text-gray-500 hover:text-gray-900': pathname !== ROUTE.DETAIL_ID || queryId !== '1',
        })}
      >
        <Link href={{ pathname: ROUTE.DETAIL_ID, query: { id: 1 } }}>detail/1</Link>
      </li>
      <li
        className={classnames('px-4', {
          'text-gray-900': pathname === ROUTE.DETAIL_ID && queryId === '2',
          'text-gray-500 hover:text-gray-900': pathname !== ROUTE.DETAIL_ID || queryId !== '2',
        })}
      >
        <Link href={{ pathname: ROUTE.DETAIL_ID, query: { id: 2 } }}>detail/2</Link>
      </li>
    </ul>
  )
}

export default CNavigation
