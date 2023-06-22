import { useCreateEvent } from '@/service';
import { useUploadEventCover } from '@/service/mutations/useUploadEventCover';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import * as Yup from 'yup';

type FormData = {
  name: string;
  description: string;
  startEvent: Date;
  endEvent: Date;
  startEventTime: string;
  endEventTime: string;
  address: string;
  city: string;
  number: string;
  zipCode: string;
  price: number;
  state: string;
};

const UseLogic = () => {
  const navigate = useNavigate();

  const [isSingleDay, setIsSingleDay] = useState(false);
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [isEventPaid, setIsEventPaid] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsSingleDay(event.target.checked);
    if (event.target.checked) {
      setValue('endEvent', getValues('startEvent'));
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target;
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const imageFile = fileInput.files[0];
      setCoverImage(imageFile);
    }
  };

  const handlePaidCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsEventPaid(event.target.checked);
    if (!event.target.checked) {
      setValue('price', 0);
    }
  };

  const formSchema = Yup.object().shape({
    name: Yup.string().required(' o nome é obrigatório'),
    description: Yup.string().required(' a descrição é obrigatório'),
    startEvent: Yup.date().required(' a data de início é obrigatório'),
    endEvent: Yup.date().nullable(),
    startEventTime: Yup.string().nullable(),
    endEventTime: Yup.string().nullable(),
    address: Yup.string().required(' o endereço é obrigatório'),
    city: Yup.string().required(' a cidade é obrigatório'),
    number: Yup.string().required(' o numero é obrigatório'),
    zipCode: Yup.string().required(' o CEP é obrigatório'),
    price: Yup.number().nullable(),
    state: Yup.string().required(' o estado é obrigatório'),
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
      description: '',
      startEvent: new Date(),
      endEvent: new Date(),
      address: '',
      city: '',
      number: '',
      zipCode: '',
      state: '',
      price: 0,
      startEventTime: '',
      endEventTime: '',
    },
    resolver: yupResolver(formSchema),
  });

  const { createEventIsLoading, createEventMutate } = useCreateEvent({
    onSuccess(data) {
      console.log('data', data);
      if (!coverImage) return;
      uploadEventCoverMutate({
        eventId: data.id,
        file: coverImage,
      });
    },
  });

  const { uploadEventCoverIsLoading, uploadEventCoverMutate } = useUploadEventCover({
    onSuccess(data) {
      navigate('/my-events', { replace: true });
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    const buildStartMinutes =
      Number(data.startEventTime?.split(':')[0]) * 60 + Number(data.startEventTime?.split(':')[1]);
    const buildEndMinutes =
      Number(data.endEventTime?.split(':')[0]) * 60 + Number(data.endEventTime?.split(':')[1]);
    const startEvent = new Date(data.startEvent);
    startEvent.setMinutes(buildStartMinutes);
    const endEvent = new Date(data.endEvent || data.startEvent);
    endEvent.setMinutes(buildEndMinutes);
    createEventMutate({
      ...data,
      startEvent: startEvent,
      endEvent: endEvent,
      price: data.price || 0,
    });
  };

  const isSubmitDisabled = createEventIsLoading || Object.keys(errors).length > 0 || !coverImage;

  return {
    onSubmit,
    register,
    handleSubmit,
    errors,
    handlePaidCheckboxChange,
    handleImageChange,
    handleCheckboxChange,
    isEventPaid,
    isSingleDay,
    isSubmitDisabled,
  };
};
export default UseLogic;
