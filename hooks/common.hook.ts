import { fetcher } from '@/lib/fetcher';
import { useMutation } from '@tanstack/react-query';

import { AxiosError } from 'axios';
import { useEffect } from 'react';
import { useToast } from './use-toast';

export const useUploadFile = () => {
  const { toast } = useToast();

  const mutation = useMutation<any, Error, any>({
    mutationFn: async (acceptedFiles: File) => {
      const formData = new FormData();
      formData.append('file', acceptedFiles);
      const result = await fetcher.post('/operator/common/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          accept: '*/*',
        },
      });
      return result.data;
    },
    // onSuccess untuk memicu ulang query tertentu setelah mutasi sukses
  });

  useEffect(() => {
    const status = mutation.status;
    if (status == 'success') {
      toast({
        title: 'Sukses',
        variant: 'default',
        description: 'Sukses upload',
      });
    }

    if (status == 'error') {
      const error = mutation.error as AxiosError<any>;

      const messageError = Object.values(
        error.response?.data.errors?.[0] || {},
      ) as any;
      toast({
        title: 'Login Error',
        variant: 'destructive',
        description: messageError || 'Internal Server Error',
      });

      //   enqueueSnackbar({
      //     message: messageError?.[0]?.[0] || "Internal Server Error",
      //     variant: "error",
      //   });
    }
  }, [mutation.status]);

  return mutation;
};
