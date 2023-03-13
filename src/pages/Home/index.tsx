import {
  ImageContainer,
  MainInfoProfile,
  OtherInfo,
  ProfileContainer,
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

      <div>
        <form>
          <input type="text" />
        </form>
      </div>
      <div></div>
    </div>
  )
}
