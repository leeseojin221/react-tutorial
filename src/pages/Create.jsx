import React, { useEffect, useState } from 'react'
import * as St from '../styled/CreateStyled'
import Header from '../common/Header'
import Container from '../common/Container'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/list'
import { auth } from '../firebase'

export default function Create() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setAuthor(user?.email)
    })
  }, [])

  const handleAddItem = (e) => {
    e.preventDefault()

    const newItem = {
      title,
      content,
      author,
    }

    dispatch(addItem(newItem))
    setTitle(``)
    setContent(``)

    navigate('/')
  }

  return (
    <>
      <Header />
      <Container>
        <St.CreateForm1 onSubmit={handleAddItem}>
          <div>
            <St.CreateInput1 placeholder='제목' type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <St.CreateDiv1>
            <St.CreateText1 placeholder='내용' value={content} onChange={(e) => setContent(e.target.value)} />
          </St.CreateDiv1>
          <St.CreateBtn1 type='submit'>추가하기</St.CreateBtn1>
        </St.CreateForm1>
      </Container>
    </>
  )
}
