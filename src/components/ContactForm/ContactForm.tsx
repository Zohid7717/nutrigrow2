'use client'
import { useForm } from 'react-hook-form';
import '../ComponentsStyle/ContactForm.scss'

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
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onBlur'
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form'>
      <h3>{formTranslations.h3}</h3>
      <div className="form__input-box">
        <label >
          {formTranslations.namePlaceholder}
          <input
            {...register("firstname", {
              required: true
            })}
          />
          {errors?.firstname && <p>{formTranslations.requiredMessage}</p>}
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
      <button>{formTranslations.button}</button>
    </form>
  );
}

export default ContactForm;