import { useRouter } from 'next/router'
import React from 'react'

const Detail = () => {
const { query } = useRouter()
const { id } = query
  return (
    <div>detail </div>
  )
}

export default Detail