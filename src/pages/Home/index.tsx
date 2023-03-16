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
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface UserDataProps {
  login: string
  name: string
  avatarUrl: string
  bio: string
  company: string
  followers: number
  url: string
}

interface UserIssueProps {
  title: string
  created_at: string
  body: string
  number: number
}

interface IssuesResponse {
  items: UserIssueProps[]
}

export function Home() {
  const [userData, setUserData] = useState<UserDataProps>({} as UserDataProps)

  const [userIssueList, setUserIssueList] = useState<UserIssueProps[]>([])
  const [filteredIssuesList, setFilteredIssuesList] = useState<
    UserIssueProps[]
  >([])

  console.log(userIssueList)

  function handleFilteredList(filter: string) {
    console.log(filter)
    const filteredList = userIssueList.filter(
      (issue) =>
        issue.title.toLowerCase().includes(filter.toLowerCase()) ||
        issue.body.toLocaleLowerCase().includes(filter.toLowerCase()),
    )
    setFilteredIssuesList(filteredList)
  }

  async function loadProfile() {
    const response = await api.get('users/dexheart')

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

  async function loadIssueList() {
    const issuesResponse = await api.get<IssuesResponse>(
      'search/issues?q=repo:dexheart/github_blog',
    )
    const issues = issuesResponse.data.items
    const sanitizedIssues = issues.map((issue) => ({
      body: issue.body,
      created_at: issue.created_at,
      title: issue.title,
      number: issue.number,
    }))

    setUserIssueList(sanitizedIssues)
    setFilteredIssuesList(sanitizedIssues)
  }

  useEffect(() => {
    loadProfile()
    loadIssueList()
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

          <div className="bio">
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
          <span>
            {filteredIssuesList.length > 1 && filteredIssuesList.length !== 0
              ? filteredIssuesList.length + ' publicações'
              : filteredIssuesList.length + ' publicação'}
          </span>
        </div>

        <div className="formSearch">
          <form>
            <input
              type="text"
              placeholder="Buscar conteúdo"
              onChange={(e) => handleFilteredList(e.target.value)}
            />
          </form>
        </div>
      </FormContainer>

      <PublishContainer>
        {filteredIssuesList.map((issue) => (
          <OneOfPublishBox key={issue.number}>
            <div className="titleBox">
              <h4>{issue.title}</h4>
              <span>
                {formatDistanceToNow(new Date(issue.created_at), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </span>
            </div>
            <div className="textBox">
              <p>{issue.body}</p>
            </div>
          </OneOfPublishBox>
        ))}
      </PublishContainer>
    </div>
  )
}
