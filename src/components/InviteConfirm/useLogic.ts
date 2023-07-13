import { useConfirmEvent } from '@/service';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLayoutEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

type FormData = {
  name: string;
  email: string;
};

export type Props = {
  eventId: string;
  handleCloseModal: () => void;
};

const useLogic = ({ eventId, handleCloseModal }: Props) => {
  const [acceptedState, setAcceptedState] = useState<'ACCEPTED' | 'DENIED' | 'NONE'>('NONE');
  const formSchema = Yup.object().shape({
    name: Yup.string().required(' o nome é obrigatório'),
    email: Yup.string().required(' o Email é obrigatório'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
    },
    resolver: yupResolver(formSchema),
  });

  const { confirmEventIsLoading, confirmEventMutate } = useConfirmEvent({
    onSuccess(data) {
      console.log('data', data);
    },
  });

  const onAcceptSubmit = (data: FormData) => {
    confirmEventMutate({
      ...data,
      event: eventId,
      hasAccepted: true,
    });
    setAcceptedState('ACCEPTED');
  };

  const onDenySubmit = (data: FormData) => {
    confirmEventMutate({
      ...data,
      event: eventId,
      hasAccepted: false,
    });
    setAcceptedState('DENIED');
  };

  useLayoutEffect(() => {
    const expanded = document.querySelector('#expanded');
    const invite = document.querySelector('#invite');
    if (!invite || !expanded) return;
    expanded.setAttribute('style', `height: ${invite.clientHeight}px`);
  });

  return {
    register,
    handleSubmit,
    onAcceptSubmit,
    onDenySubmit,
    acceptedState,
    handleCloseModal,
  };
};

export default useLogic;
