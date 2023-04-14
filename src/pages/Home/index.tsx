import { PencilSimple, Plus, TrashSimple } from "@phosphor-icons/react";
import Box from "../../components/atoms/Box";
import P from "../../components/atoms/Typography/P";
import Title from "../../components/atoms/Typography/Title";
import * as S from "./styles";
import Button from "../../components/atoms/Button";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <S.Container>
      <S.UsersList>
        <Box>
          <S.Header>
            <Title color="var(--white)" size="small">
              Users
            </Title>
            <Link to={"/new"}>
              <Button>
                <Plus size={16} />
                <P color="var(--white)">Add new contact</P>
              </Button>
            </Link>
          </S.Header>

          <S.Search type="text" placeholder="Search" />

          <S.User>
            <S.ContainerLeft>
              <S.Avatar>GT</S.Avatar>
              <P color="var(--white)">Gustavo Tartare</P>
            </S.ContainerLeft>
            <S.ContainerRigth>
              <Button variant="icon">
                <PencilSimple size={16} />
              </Button>
              <Button variant="icon">
                <TrashSimple size={16} />
              </Button>
            </S.ContainerRigth>
          </S.User>
          <S.User>
            <S.ContainerLeft>
              <S.Avatar>GT</S.Avatar>
              <P color="var(--white)">Gustavo Tartare</P>
            </S.ContainerLeft>
            <S.ContainerRigth>
              <Button variant="icon">
                <PencilSimple size={16} />
              </Button>
              <Button variant="icon">
                <TrashSimple size={16} />
              </Button>
            </S.ContainerRigth>
          </S.User>

          <S.User>
            <S.ContainerLeft>
              <S.Avatar>GT</S.Avatar>
              <P color="var(--white)">Gustavo Tartare</P>
            </S.ContainerLeft>
            <S.ContainerRigth>
              <Button variant="icon">
                <PencilSimple size={16} />
              </Button>
              <Button variant="icon">
                <TrashSimple size={16} />
              </Button>
            </S.ContainerRigth>
          </S.User>
        </Box>
      </S.UsersList>
    </S.Container>
  );
};
