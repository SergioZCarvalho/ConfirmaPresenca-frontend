import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export const formatDate = (date: Date) => {
  if (!date) {
    return '';
  }

  const result = format(new Date(date), 'dd MMM yyyy', {
    locale: ptBR,
  });

  return result;
};
