import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import { FiEdit, FiList } from 'react-icons/fi';
import { useAuthStore } from '@/store';

const BottomTabs = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();

  const tabs = [
    { icon: <FiList />, name: 'Meus Eventos', onclick: () => navigate('/my-events') },
    { icon: <FiEdit />, name: 'Criar Evento', onclick: () => navigate('/create-event') },
  ];

  if (!user) {
    return null;
  }

  return (
    <S.Content>
      {tabs.map((tab) => (
        <S.Tabs key={tab.name} onClick={tab.onclick}>
          {tab.icon} {tab.name}
        </S.Tabs>
      ))}
    </S.Content>
  );
};

export default BottomTabs;
