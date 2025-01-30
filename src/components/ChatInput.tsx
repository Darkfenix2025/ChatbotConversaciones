import { useState } from 'react';
interface ChatInputProps {
  onSend: (content: string) => void;
  disabled?: boolean;
}
export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      onSend(inputValue);
      setInputValue('');
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Escribe aquí tu mensaje..."
        className="flex-1 rounded-md border p-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        disabled={disabled}
      />
      <button
        type="submit"
        className="rounded-md bg-blue-500 px-4 py-2 font-bold text-white disabled:opacity-50"
        disabled={disabled}
      >
        Enviar
      </button>
    </form>
  );
}