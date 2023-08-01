import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import * as St from '../styled/HeaderStyled'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

export default function Header() {
  const [currentUser, setCurrentUser] = useState(null)
  const navigate = useNavigate()

  const Logout = async () => {
    const confirmLogout = window.confirm('로그아웃하시겠습니까?')
    if (confirmLogout) {
      await signOut(auth)
      setCurrentUser(null)
    }
  }

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user?.email)
    })
  }, [])

  return (
    <>
      {currentUser ? (
        // 로그인 상태일때 헤드 화면
        <St.CommonHeader>
          <St.CommonH1>
            <FaHome
              onClick={() => {
                navigate('/')
              }}
            />
          </St.CommonH1>
          <St.Commondiv>
            <div>{currentUser}</div>
            <button onClick={Logout}>로그아웃</button>
          </St.Commondiv>
        </St.CommonHeader>
      ) : (
        // 로그인 상태가 아닐때 헤드 화면
        <St.CommonHeader>
          <St.CommonH1>
            {/* //1.홈 로고 클릭 시 메인페이지(/)로 이동 */}
            <FaHome
              onClick={() => {
                navigate('/')
              }}
            />
          </St.CommonH1>
          <St.Commondiv>
            <Link to='/login'>로그인</Link>
            <Link to='/signup'>회원가입</Link>
          </St.Commondiv>
        </St.CommonHeader>
      )}
    </>
  )
}
