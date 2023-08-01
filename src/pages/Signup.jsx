import React, { useState } from 'react'
import Header from '../common/Header'
import Container from '../common/Container'
import { useNavigate } from 'react-router'
import * as St from '../styled/SighupStyled'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export default function Signup() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')

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
    if (name === 'passwordCheck') {
      setPasswordCheck(value)
    }
  }

  const Signup = async (e) => {
    e.preventDefault()
    if (!email) {
      alert('이메일을 입력해주세요')
    } else if (!password || !passwordCheck) {
      alert('비밀번호를 입력해주세요')
    } else if (password !== passwordCheck) {
      alert('비밀번호가 일치하지 않습니다')
    }

    if (password === passwordCheck) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        alert('회원가입에 성공했습니다.')
        setEmail('')
        setPassword('')
        setPasswordCheck('')
        navigate('/')
        console.log(userCredential)
      } catch (error) {
        console.error(error.code)
        if (error.code === 'auth/email-already-in-use') {
          alert('이미 사용된 이메일입니다.')
        } else if (error.code === 'auth/weak-password') {
          alert('비밀번호가 6자리 이하입니다.')
        } else if (error.code === 'auth/invalid-email') {
          alert('올바른 이메일 형식이 아닙니다.')
        } else {
          alert('회원가입에 실패 했습니다.')
        }
      }
    }
  }

  return (
    <>
      <Header />
      <Container>
        <St.SignupDiv>
          <form>
            <St.SignupInputDiv>
              <St.SignupInput placeholder='이메일' name='email' type='email' value={email} onChange={onChange} />
            </St.SignupInputDiv>
            <St.SignupInputDiv>
              <St.SignupInput
                placeholder='비밀번호'
                name='password'
                type='password'
                value={password}
                onChange={onChange}
              />
            </St.SignupInputDiv>
            <St.SignupInputDiv>
              <St.SignupInput
                placeholder='비밀번호 확인'
                name='passwordCheck'
                type='password'
                value={passwordCheck}
                onChange={onChange}
              />
            </St.SignupInputDiv>
            <St.SignupBtn1Div>
              <St.SignupBtn1 onClick={Signup}>회원가입하기</St.SignupBtn1>
            </St.SignupBtn1Div>
            <St.SignupBtn2Div>
              <St.SignupBtn2
                onClick={() => {
                  navigate('/login')
                }}
              >
                로그인하러 가기
              </St.SignupBtn2>
            </St.SignupBtn2Div>
          </form>
        </St.SignupDiv>
      </Container>
    </>
  )
}
