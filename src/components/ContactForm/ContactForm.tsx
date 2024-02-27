'use client'
import { useForm } from 'react-hook-form';
import '../ComponentsStyle/ContactForm.scss'
import { useState } from 'react';
import ToastContainer from '../Toast/ToastContainer';
import { useToast } from '@/store/store';

type ContactFormProps = {
  formTranslations: {
    h3: string;
    requiredMessage: string;
    namePlaceholder: string;
    phonePlaceholder: string;
    questionPlaceholder: string;
    button: string;
  }
}

function ContactForm({ formTranslations }: ContactFormProps) {
  const [stateMessage, setStateMessage] = useState()
  const addMessage = useToast(state=>state.addMessage)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    mode: 'onBlur'
  })

  const onSubmit = handleSubmit(async (data: any) => {
    try {
      const res = await fetch('http://localhost:3003/api/submit-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      const result = await res.json()
      addMessage(result.message)
      reset()
    } catch (error) {
      console.log(error)
    }
  })

  return (
    <form onSubmit={onSubmit} className='form'>
      <h3>{formTranslations.h3}</h3>
      <div className="form__input-box">
        <label >
          {formTranslations.namePlaceholder}
          <input
            {...register("name", {
              required: true
            })}
          />
          {errors?.name && <p>{formTranslations.requiredMessage}</p>}
        </label>
        <label>
          {formTranslations.phonePlaceholder}
          <input
            {...register("number", {
              required: true
            })}
          />
          {errors?.number && <p>{formTranslations.requiredMessage}</p>}
        </label>
      </div>
      <label>
        {formTranslations.questionPlaceholder}
        <textarea
          {...register("message", {
            required: true
          })}
        />
        {errors?.message && <p>{formTranslations.requiredMessage}</p>}
      </label>
      <button type='submit'>{formTranslations.button}</button>
      <ToastContainer/>
    </form>
  );
}

export default ContactForm;