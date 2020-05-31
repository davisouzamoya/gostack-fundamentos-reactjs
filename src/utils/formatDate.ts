import { format, parseISO } from 'date-fns';

const formatDate = (value: Date): string =>
  // Intl.DateTimeFormat('pt-BR').format(value);
  format(new Date(value), 'dd/MM/yyyy');

export default formatDate;
