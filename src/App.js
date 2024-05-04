import { Switch } from '@headlessui/react'
import { useState } from 'react'

export default function Toggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className='p-8 flex justify-center'>
      <Switch.Group>
        <div className='flex items-center' onClick={() => setEnabled(!enabled)}>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${
              enabled ? 'bg-indigo-600' : 'bg-gray-200'
            } relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2`}
          >
            <span
              className={`${
                enabled ? 'translate-x-6' : 'translate-x-1'
              } inline-block w-4 h-4 transform bg-white rounded-full shadow-lg transition-transform duration-200 ease-in-out`}
            />
          </Switch>
          <Switch.Label className='ml-3 text-sm'>
            <span className='font-medium text-gray-900'>Yıllık fatura</span>{' '}
            <span className='text-gray-500'>(10% Tasarruf Edin)</span>
          </Switch.Label>
        </div>
      </Switch.Group>
    </div>
  );
}