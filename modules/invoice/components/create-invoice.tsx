import FormGenerator from '@/components/elements/form-generator';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { invoiceSchema } from '@/types/invoice.type';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function CreateInvoice(props: Props) {
  // Inisialisasi useForm dengan defaultValues dari props.division
  const form = useForm({
    resolver: zodResolver(invoiceSchema),
  });

  //   useEffect(() => {
  //     if (status == 'success') {
  //       props.onClose();
  //     }
  //   }, [status]);

  return (
    <Dialog open={props.isOpen} onOpenChange={props.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tambah Tagihan</DialogTitle>
          {/* <DialogDescription>
            Lakukan perubahan pada divisi. Klik simpan ketika sudah selesai.
          </DialogDescription> */}
        </DialogHeader>

        <FormGenerator
          form={form}
          id="form"
          onSubmit={() => console.log(form.getValues)}
          data={[
            {
              name: 'customer',
              type: 'text',
              placeholder: 'Pilih Pelanggan',
              label: 'Nama Pelanggan',
            },
            {
              name: 'price',
              type: 'text',
              placeholder: 'Rp. 150.000',
              label: 'Harga',
            },
            {
              name: 'date',
              type: 'date',
              placeholder: 'Masukan Tanggal',
              label: 'Tanggal',
            },
            {
              name: 'dueDate',
              type: 'date',
              placeholder: '17:00',
              label: 'Jatuh Tempo',
            },
          ]}
        />

        <DialogFooter>
          <Button type="submit" form="form" loading={status == 'pending'}>
            Simpan Perubahan
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
