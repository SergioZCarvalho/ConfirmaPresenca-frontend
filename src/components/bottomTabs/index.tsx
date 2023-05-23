import * as S from './styles';
import { FiEdit, FiList } from 'react-icons/fi';

const BottomTabs = () => {
  const tabs = [
    { icon: <FiList />, name: 'Meus Eventos' },
    { icon: <FiEdit />, name: 'Criar Evento' },
  ];
  return (
    <>
      <S.Content>
        {tabs.map((tab) => (
          <S.Tabs key={tab.name}>
            {tab.icon} {tab.name}
          </S.Tabs>
        ))}
      </S.Content>
    </>
  );
};

export default BottomTabs;
