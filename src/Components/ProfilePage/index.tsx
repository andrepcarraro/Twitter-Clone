import React from 'react';

import Feed from '../Feed';

import { 
    Container, 
    Banner, 
    Avatar,
    ProfileData,
    LocationIcon,
    CakeIcon,
    Followage,
    EditButton 
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
        <Banner>
            <Avatar />
        </Banner>
        <ProfileData>
            <EditButton outlined>
                Editar Perfil
            </EditButton>
            <h1>André Carraro</h1>
            <h2>@andr_carraro</h2>

            <p>
                Developer at <a href= "https://www.dtidigital.com.br/">@dtidigital</a>
            </p>

            <ul>
                <li>
                    <LocationIcon />
                    Belo Horizonte, Brasil
                </li>
                <li>
                    <CakeIcon />
                    Nascido(a) em 05 de Junho de 2000
                </li>
            </ul>

            <Followage>
                <span>
                    <strong>100</strong> seguindo  
                </span>
                <span>
                    <strong>67M</strong> seguidores
                </span>
            </Followage>
        </ProfileData>
        <Feed />
    </Container>
  );
}

export default ProfilePage;