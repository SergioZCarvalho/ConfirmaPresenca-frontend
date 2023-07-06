import { UseEventDetails, useCreateEvent } from '@/service';
import { useUploadEventCover } from '@/service/mutations/useUploadEventCover';
import { yupResolver } from '@hookform/resolvers/yup';
import { format, isSameDay } from 'date-fns';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import * as Yup from 'yup';
import { InferType } from 'yup';

const UseLogic = () => {
  const navigate = useNavigate();
  const { id: updatingId } = useParams();

  const [isSingleDay, setIsSingleDay] = useState(false);
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [isEventPaid, setIsEventPaid] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsSingleDay(event.target.checked);
    if (event.target.checked) {
      setValue('endEvent', null);
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target;
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const imageFile = fileInput.files[0];
      if (
        imageFile.type !== 'image/jpeg' &&
        imageFile.type !== 'image/png' &&
        imageFile.type !== 'image/jpg' &&
        imageFile.type !== 'image/webp'
      ) {
        alert('Apenas imagens PNG e JPG são aceitas');
        setCoverImage(null);
        return;
      }
      setCoverImage(imageFile);
      const reader = new FileReader();
      reader.onload = (e) => {
        if (!e.target) return;
        const base64Image = e.target.result as string;
        setCurrentImage(base64Image);
      };
      reader.readAsDataURL(imageFile);
    }
  };

  const handlePaidCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsEventPaid(event.target.checked);
    if (!event.target.checked) {
      setValue('price', 0);
    }
  };

  const formSchema = Yup.object().shape({
    name: Yup.string().required(' o nome é obrigatório').nonNullable(),
    description: Yup.string().required(' a descrição é obrigatório').nonNullable(),
    startEvent: Yup.mixed().required('A data de início é obrigatória').nonNullable(),
    endEvent: Yup.mixed().nullable(),
    startEventTime: Yup.string().nonNullable(),
    endEventTime: Yup.string().nonNullable(),
    address: Yup.string().required(' o endereço é obrigatório').nonNullable(),
    city: Yup.string().required(' a cidade é obrigatório').nonNullable(),
    number: Yup.string().required(' o numero é obrigatório').nonNullable(),
    zipCode: Yup.string().required(' o CEP é obrigatório').nonNullable(),
    price: Yup.number().nullable(),
    state: Yup.string().required(' o estado é obrigatório').nonNullable(),
    whatsapp: Yup.string().required(' o contato é obrigatório').nonNullable(),
    localName: Yup.string().required(' o local é obrigatório').nonNullable(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      description: '',
      startEvent: new Date(),
      endEvent: null,
      address: '',
      city: '',
      number: '',
      zipCode: '',
      state: '',
      price: 0,
      startEventTime: '',
      endEventTime: '',
      whatsapp: '',
      localName: '',
    },
    resolver: yupResolver(formSchema),
  });

  const { useEventDetailsData, useEventDetailsisFetching } = UseEventDetails({
    eventId: updatingId ?? '',
    enabled: !!updatingId,
  });

  useEffect(() => {
    if (useEventDetailsData && updatingId && !useEventDetailsisFetching) {
      const { startEvent, endEvent, ...rest } = useEventDetailsData;
      const startEventDate = new Date(startEvent);
      const endEventDate = new Date(endEvent);
      setIsSingleDay(isSameDay(startEventDate, endEventDate));
      setIsEventPaid(useEventDetailsData.price > 0);
      setCurrentImage(useEventDetailsData.cover ?? null);
      reset({
        ...rest,
        startEvent: format(startEventDate, 'yyyy-MM-dd'),
        endEvent: format(endEventDate, 'yyyy-MM-dd'),
        startEventTime: format(startEventDate, 'HH:mm'),
        endEventTime: format(endEventDate, 'HH:mm'),
      });
    }
  }, [useEventDetailsData]);

  const { createEventIsLoading, createEventMutate } = useCreateEvent({
    onSuccess(data) {
      if (!coverImage) {
        if (updatingId) navigate('/my-events', { replace: true });
        return;
      }
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

  const onSubmit = (data: InferType<typeof formSchema>) => {
    const buildStartMinutes =
      Number(data.startEventTime?.split(':')[0]) * 60 + Number(data.startEventTime?.split(':')[1]);
    const buildEndMinutes =
      Number(data.endEventTime?.split(':')[0]) * 60 + Number(data.endEventTime?.split(':')[1]);
    const startEvent = new Date(data.startEvent as Date);
    startEvent.setMinutes(buildStartMinutes);
    const endEvent = new Date((data.endEvent as Date) || (data.startEvent as Date));
    endEvent.setMinutes(buildEndMinutes);
    createEventMutate({
      ...data,
      startEvent: startEvent,
      endEvent: endEvent,
      price: data.price || 0,
    });
  };

  const isSubmitDisabled = () => {
    if (updatingId) {
      return createEventIsLoading || Object.keys(errors).length > 0;
    }
    return createEventIsLoading || Object.keys(errors).length > 0 || !coverImage;
  };

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
    currentImage,
    updatingId,
  };
};
export default UseLogic;
