import { format, isSameDay } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export const useFormatDate = () => {
  const dateWithRange = (initialDate: Date, endDate: Date) => {
    if (!initialDate || !endDate) {
      return '';
    }
    const formattedInitial = format(new Date(initialDate), 'dd MMM yyyy HH:MM', {
      locale: ptBR,
    });
    const formattedEnd = format(new Date(endDate), 'dd MMM yyyy HH:MM', {
      locale: ptBR,
    });
    const formattedEndOnlyHour = format(new Date(endDate), 'HH:MM', {
      locale: ptBR,
    });
    if (isSameDay(new Date(initialDate), new Date(endDate))) {
      return `${formattedInitial} até ${formattedEndOnlyHour}`;
    }

    return `${formattedInitial} até ${formattedEnd}`;
  };

  return {
    dateWithRange,
  };
};
