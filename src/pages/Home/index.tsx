import {
  FormContainer,
  ImageContainer,
  MainInfoProfile,
  OneOfPublishBox,
  OtherInfo,
  ProfileContainer,
  PublishContainer,
} from './styles'

import githubIcon from '../../assets/allIcons/github.svg'
import buildingIcon from '../../assets/allIcons/building.svg'
import usergroupIcon from '../../assets/allIcons/user-group.svg'
import arrowIcon from '../../assets/allIcons/arrow.svg'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { useForm } from 'react-hook-form'

interface UserDataProps {
  login: string
  name: string
  avatarUrl: string
  bio: string
  company: string
  followers: number
  url: string
}

export function Home() {
  const [userData, setUserData] = useState<UserDataProps>({} as UserDataProps)

  const { register, watch } = useForm()

  const searchField = watch('query')

  console.log(searchField)

  async function loadProfile() {
    const response = await api.get('diego3g')

    const profile: UserDataProps = {
      login: response.data.login,
      name: response.data.name,
      avatarUrl: response.data.avatar_url,
      bio: response.data.bio,
      company: response.data.company,
      followers: response.data.followers,
      url: response.data.html_url,
    }

    setUserData(profile)
  }

  useEffect(() => {
    loadProfile()
  }, [])

  return (
    <div>
      <ProfileContainer>
        <ImageContainer>
          <img src={userData.avatarUrl} alt="" />
        </ImageContainer>

        <MainInfoProfile>
          <div className="wrapper">
            <h2>{userData.name}</h2>
            <div className="github">
              <a href={userData.url}>
                <span>github</span>
                <img src={arrowIcon} alt="" />
              </a>
            </div>
          </div>

          <div className="description">
            <span>{userData.bio}</span>
          </div>

          <OtherInfo>
            <div>
              <img src={githubIcon} alt="" />
              <span>{userData.login}</span>
            </div>

            <div>
              <img src={buildingIcon} alt="" />
              <span>{userData.company}</span>
            </div>

            <div>
              <img src={usergroupIcon} alt="" />
              <span>
                {userData.followers > 1
                  ? userData.followers + ' seguidores'
                  : userData.followers + ' seguidor'}
              </span>
            </div>
          </OtherInfo>
        </MainInfoProfile>
      </ProfileContainer>

      <FormContainer>
        <div className="publishInfo">
          <h3>Publicações</h3>
          <span>6 Publicações</span>
        </div>

        <div className="formSearch">
          <form>
            <input
              type="text"
              placeholder="Buscar conteúdo"
              {...register('query')}
            />
          </form>
        </div>
      </FormContainer>

      <PublishContainer>
        <OneOfPublishBox>
          <div className="titleBox">
            <h4>JavaScript data types and data structures</h4>
            <span>Há 1 dia</span>
          </div>

          <div className="textBox">
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn.
            </p>
          </div>
        </OneOfPublishBox>

        <OneOfPublishBox>
          <div className="titleBox">
            <h4>JavaScript data types and data structures</h4>
            <span>Há 1 dia</span>
          </div>

          <div className="textBox">
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn.
            </p>
          </div>
        </OneOfPublishBox>

        <OneOfPublishBox>
          <div className="titleBox">
            <h4>JavaScript data types and data structures</h4>
            <span>Há 1 dia</span>
          </div>

          <div className="textBox">
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn.
            </p>
          </div>
        </OneOfPublishBox>

        <OneOfPublishBox>
          <div className="titleBox">
            <h4>JavaScript data types and data structures</h4>
            <span>Há 1 dia</span>
          </div>

          <div className="textBox">
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn.
            </p>
          </div>
        </OneOfPublishBox>

        <OneOfPublishBox>
          <div className="titleBox">
            <h4>JavaScript data types and data structures</h4>
            <span>Há 1 dia</span>
          </div>

          <div className="textBox">
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn.
            </p>
          </div>
        </OneOfPublishBox>
      </PublishContainer>
    </div>
  )
}
