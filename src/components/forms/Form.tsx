import { ChangeEvent, FormEvent } from 'react';
import { Input } from '@/components/forms';
import { Spinner } from '../ui';

interface Config {
  labelText: string;
  labelId: string;
  type: string;
  value: string;
  required?: boolean;
  placeholder?: string;
}

interface Props {
  config: Config[];
  isLoading: boolean;
  btnText: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export default function Form({ config, isLoading, onChange, onSubmit, btnText }: Props) {
  return (
    <form onSubmit={onSubmit}>
      {config.map((input) => (
        <Input key={input.labelId} labelId={input.labelId} type={input.type} onChange={onChange} placeholder={input.placeholder} value={input.value} required={input.required}>
          {input.labelText}
        </Input>
      ))}
      <div className="flex items-center mt-2">
        <input id="remember" required type="checkbox" className="mr-1 mb-2 checked:bg-main" />
        <label className="mr-auto text-xs font-semibold mb-2">Принять лицензионное соглашение</label>
      </div>
      <button className="block w-full text-center text-white bg-main hover:bg-mainLight duration-200 px-2 py-1.5 rounded-md">{isLoading ? <Spinner /> : `${btnText}`}</button>
    </form>
  );
}
