import { ChangeEvent } from 'react';

interface Props {
  children: React.ReactNode;
  labelId: string;
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  required?: boolean;
  placeholder?: string;
}
export default function Input({ children, labelId, type, placeholder, onChange, value, required = false }: Props) {
  return (
    <div className="mb-3">
      <div className="flex justify-between">
        <label htmlFor={labelId} className="mb-2 block text-xs font-semibold">
          {children}
        </label>
      </div>
      <input
        id={labelId}
        name={labelId}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        required={required}
        className="block w-full rounded-md border border-gray-300 focus:border-main focus:outline-none focus:ring-1 focus:ring-main py-1 px-1.5 text-gray-500"
      />
    </div>
  );
}
