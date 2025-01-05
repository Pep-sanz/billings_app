import React, { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useDebounce } from 'use-debounce';
import { cn } from '@/lib/utils';
interface Props {
  placeholder?: string;
  onChange: (text: string) => void;
  className?: string;
}
const BaseInputSearch = ({ onChange, placeholder, className }: Props) => {
  const [text, setText] = useState('');
  const [value] = useDebounce(text, 1000);

  useEffect(() => {
    onChange(value);
  }, [value]);

  return (
    <div className={cn('relative ', className)}>
      <Input
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder={placeholder}
        className="w-full pr-2 md:max-w-sm"
      />
      <Search className="absolute right-2 top-2 h-5 w-5" />
    </div>
  );
};

export default BaseInputSearch;
