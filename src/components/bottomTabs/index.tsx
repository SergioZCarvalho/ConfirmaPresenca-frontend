import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import { FiEdit, FiList } from 'react-icons/fi';

const BottomTabs = () => {
  const navigate = useNavigate();
  const tabs = [
    { icon: <FiList />, name: 'Meus Eventos', onclick: () => navigate('/my-events') },
    { icon: <FiEdit />, name: 'Criar Evento', onclick: () => navigate('/create-event') },
  ];
  return (
    <>
      <S.Content>
        {tabs.map((tab) => (
          <S.Tabs key={tab.name} onClick={tab.onclick}>
            {tab.icon} {tab.name}
          </S.Tabs>
        ))}
      </S.Content>
    </>
  );
};

export default BottomTabs;
