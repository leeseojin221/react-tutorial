import React, { useState } from 'react'
import Header from '../common/Header'
import Container from '../common/Container'
import { useNavigate } from 'react-router'
import * as St from '../styled/LoginStyled'
import { signInWithEmailAndPassword } from 'firebase/auth'
import auth from '../firebase'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event
    if (name === 'email') {
      setEmail(value)
    }
    if (name === 'password') {
      setPassword(value)
    }
  }

  const signIn = async (e) => {
    e.preventDefault()

    if (!email) {
      alert('이메일을 입력해주세요')
    } else if (!password) {
      alert('비밀번호를 입력해주세요')
    }

    try {
      const a = await signInWithEmailAndPassword(auth, email, password)
      console.log(a)
      navigate('/')
    } catch (error) {
      console.error(error)
    }
    setEmail('')
    setPassword('')
  }

  return (
    <>
      <Header />
      <Container>
        <St.LoginDiv1>
          <form>
            <St.LoginDiv2>
              <St.LoginInput placeholder='이메일' name='email' value={email} onChange={onChange} />
            </St.LoginDiv2>
            <St.LoginDiv2>
              <St.LoginInput
                placeholder='비밀번호'
                name='password'
                type='password'
                value={password}
                onChange={onChange}
              />
            </St.LoginDiv2>
            <St.LoginDiv2>
              <St.LoginBtn1 onClick={signIn}>로그인하기</St.LoginBtn1>
            </St.LoginDiv2>
            <St.LoginDiv3>
              <St.LoginBtn2
                onClick={() => {
                  navigate('/signup')
                }}
              >
                회원가입하러 가기
              </St.LoginBtn2>
            </St.LoginDiv3>
          </form>
        </St.LoginDiv1>
      </Container>
    </>
  )
}
