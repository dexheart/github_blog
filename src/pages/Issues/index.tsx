import {
  BaseLinkBox,
  GeneralInfo,
  IssueContent,
  IssueInfoContainer,
  IssueTitle,
  OneOfInfo,
} from './styles'
import arrow from '../../assets/allIcons/arrow.svg'
import { NavLink, useParams } from 'react-router-dom'

import leftArrow from '../../assets/allIcons/left_arrow.svg'
import githubIcon from '../../assets/allIcons/github.svg'
import calendarIcon from '../../assets/allIcons/calendar.svg'
import commentIcon from '../../assets/allIcons/comment.svg'

import { api } from '../../lib/axios'
import { useEffect, useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import ReactMarkdown from 'react-markdown'

interface UserIssueProps {
  login: string
}

interface IssueProps {
  html_url: string
  created_at: string
  comments: number
  title: string
  body: string
  user: UserIssueProps
}

export function Issues() {
  const { numberIssue } = useParams()

  const [issueInfo, setUserInfo] = useState<IssueProps>({} as IssueProps)

  async function loadIssue() {
    const issueResponse = await api.get<IssueProps>(
      'repos/dexheart/github_blog/issues/' + numberIssue,
    )

    const issue = issueResponse.data

    const issueData: IssueProps = {
      html_url: issue.html_url,
      created_at: issue.created_at,
      comments: issue.comments,
      title: issue.title,
      body: issue.body,
      user: issue.user,
    }

    setUserInfo(issueData)
  }

  useEffect(() => {
    loadIssue()
  }, [])

  // console.log('O valor com problema é', issueInfo.user.login)

  return (
    <>
      <IssueInfoContainer>
        <div className="linkContainer">
          <BaseLinkBox>
            <NavLink to={'/'}>
              <img src={leftArrow} alt="" />
              <span>voltar</span>
            </NavLink>
          </BaseLinkBox>

          <BaseLinkBox>
            <a href={issueInfo.html_url}>
              <span>ver no github</span>
              <img src={arrow} alt="" />
            </a>
          </BaseLinkBox>
        </div>

        <IssueTitle>
          <h4>{issueInfo.title}</h4>
        </IssueTitle>

        <GeneralInfo>
          <OneOfInfo>
            <img src={githubIcon} alt="" />
            <span>{issueInfo.user?.login}</span>
          </OneOfInfo>

          <OneOfInfo>
            <img src={calendarIcon} alt="" />
            <span>
              {issueInfo.created_at
                ? formatDistanceToNow(new Date(issueInfo.created_at), {
                    addSuffix: true,
                    locale: ptBR,
                  })
                : ' '}
            </span>
          </OneOfInfo>

          <OneOfInfo>
            <img src={commentIcon} alt="" />
            <span>
              {issueInfo.comments &&
                (issueInfo.comments === 1
                  ? issueInfo.comments + ' comentário'
                  : issueInfo.comments + ' comentários')}{' '}
            </span>
          </OneOfInfo>
        </GeneralInfo>
      </IssueInfoContainer>
      <IssueContent>
        <ReactMarkdown className="markdown">{issueInfo.body}</ReactMarkdown>
      </IssueContent>
    </>
  )
}
