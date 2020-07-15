import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositorios no Github.</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img 
          src="https://avatars3.githubusercontent.com/u/31639140?s=460&u=c6139737c207d358607693edba59475b93cda879&v=4" 
          alt="Francisco Pinto" />
          <div>
            <strong>
              frapimoneto/goStack01
            </strong>
            <p>Exercícios realizados no módulo um do bootcamp goStack Rocketseat</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img 
          src="https://avatars3.githubusercontent.com/u/31639140?s=460&u=c6139737c207d358607693edba59475b93cda879&v=4" 
          alt="Francisco Pinto" />
          <div>
            <strong>
              frapimoneto/goStack01
            </strong>
            <p>Exercícios realizados no módulo um do bootcamp goStack Rocketseat</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img 
          src="https://avatars3.githubusercontent.com/u/31639140?s=460&u=c6139737c207d358607693edba59475b93cda879&v=4" 
          alt="Francisco Pinto" />
          <div>
            <strong>
              frapimoneto/goStack01
            </strong>
            <p>Exercícios realizados no módulo um do bootcamp goStack Rocketseat</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard;