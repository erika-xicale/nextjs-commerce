'use client';

import { Alert, Snackbar } from '@mui/material';
import clsx from 'clsx';
import { CurrentPerson, countryAreaChoices as countryAreaChoicesType } from 'lib/types';
import { useState, useTransition } from 'react';
import { useCountryArea, usePostalCode, useUser } from '../store';
import { updateAddress } from './actions';
import AddressInput from './address-form';

export default function Address({
  user,
  countryAreaChoices,
  black,
}: {
  user: CurrentPerson;
  countryAreaChoices: countryAreaChoicesType;
  black?: boolean;
}) {
  const [isError, setError] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState('');
  const [isPending, startTransition] = useTransition();
  const closeError = () => setError(false);
  const openError = () => setError(true);
  const userStore = useUser();
  const postalCode = usePostalCode();
  const countryArea = useCountryArea();

  function saveAddress() {
    startTransition(async () => {
      // Read the input parameters from the form
      const input = {
        firstName: userStore.firstName,
        lastName: userStore.lastName,
        streetAddress1: userStore.streetAddress1,
        streetAddress2: userStore.streetAddress2,
        city: userStore.city,
        postalCode: postalCode.postalCode,
        countryArea: countryArea.countryArea,
        phone: userStore.phone,
      };
      console.log(input);
      // Update the address if the user already has one
      const errors = await updateAddress(input);
      if (errors) {
        openError();
        setErrorMessage(errors);
      }
    });
  }

  return (
    <>
      <form className="text-xs lg:text-sm" action={saveAddress}>
        <div className="flex flex-col gap-2">
          <div>
            <Snackbar
              anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={isError}
              autoHideDuration={6000}
              onClose={closeError}
            >
              <Alert onClose={closeError} severity="error" variant="filled" sx={{ width: '100%' }}>
                {ErrorMessage}
              </Alert>
            </Snackbar>
          </div>
          <div>
            <AddressInput user={user} countryAreaChoices={countryAreaChoices} />
          </div>
          <div onClick={() => saveAddress()}>
            <div
              className={clsx(
                'h-[36px] w-1/2 self-end p-2 text-center uppercase text-white lg:w-1/3',
                {
                  hidden: isPending,
                  'bg-[hsl(28,30%,59%)] ': !black,
                  'bg-black': black,
                },
              )}
            >
              <div>Guardar</div>
            </div>
            <div
              className={clsx(
                'flex h-[36px] w-1/2 items-center justify-center space-x-3 self-end p-2 tracking-wider text-white lg:w-1/3',
                {
                  hidden: !isPending,
                  'bg-[hsl(28,30%,59%)] ': !black,
                  'bg-black': black,
                },
              )}
            >
              <div className="h-[8px] w-[8px] animate-bounce rounded-full bg-white [animation-delay:-0.3s]"></div>
              <div className="h-[8px] w-[8px] animate-bounce rounded-full bg-white [animation-delay:-0.15s]"></div>
              <div className="h-[8px] w-[8px] animate-bounce rounded-full bg-white"></div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
