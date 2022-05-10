import { ReactNode } from 'react';

interface WidgetFormProps {
  children: ReactNode;
}

function WidgetForm({ children }: WidgetFormProps) {
  return (
    <>
      <h1>WidgetForm</h1>
      {children}
    </>
  );
}

export default WidgetForm;
