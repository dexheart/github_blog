import {
  FormContainer,
  ImageContainer,
  MainInfoProfile,
  OtherInfo,
  ProfileContainer,
  PublishContainer,
} from './styles'

import Photo from '../../assets/Logo.svg'

import githubIcon from '../../assets/allIcons/github.svg'
import buildingIcon from '../../assets/allIcons/building.svg'
import usergroupIcon from '../../assets/allIcons/user-group.svg'

import arrowIcon from '../../assets/allIcons/arrow.svg'

export function Home() {
  return (
    <div>
      <ProfileContainer>
        <ImageContainer>
          <img src={Photo} alt="" />
        </ImageContainer>

        <MainInfoProfile>
          <div className="wrapper">
            <h2>Cameron Williamson</h2>
            <div className="github">
              <span>github</span>
              <img src={arrowIcon} alt="" />
            </div>
          </div>

          <div className="description">
            <span>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              volutpat pulvinar vel mass. Tristique volutpat pulvinar vel massa,
              pellentesque egestas.
            </span>
          </div>

          <OtherInfo>
            <div>
              <img src={githubIcon} alt="" />
              <span>cameronwll</span>
            </div>

            <div>
              <img src={buildingIcon} alt="" />
              <span>Rocketseat</span>
            </div>

            <div>
              <img src={usergroupIcon} alt="" />
              <span>32 seguidores</span>
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
            <input type="text" placeholder="Buscar conteúdo" />
          </form>
        </div>
      </FormContainer>

      <PublishContainer>
        <div>
          <h4>JavaScript data types and data structures</h4>
          <span>Há 1 dia</span>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn.
          </p>
        </div>
      </PublishContainer>
    </div>
  )
}
