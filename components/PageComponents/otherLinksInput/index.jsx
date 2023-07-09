import Button from '@/components/Shared/button'
import s from './otherLinksInput.module.css'
import {
  RiAddCircleFill,
  RiAddFill,
  RiErrorWarningLine,
  RiIndeterminateCircleFill,
  RiInformationLine,
} from 'react-icons/ri'

export default function OtherLinksInput({
  fields,
  errors,
  register,
  append,
  remove,
}) {
  return (
    <>
      <h3 className="headerBorder">Other Links</h3>
      {fields.map((field, i) => (
        <div key={field?.id} className={s.otherLinks_div}>
          <div className={s.otherLinks_labelDiv}>
            <label className={s.otherLinks_label} htmlFor={field?.id}>{`Link ${
              i + 1
            }`}</label>
            {i !== 0 ? (
              <Button
                onClick={() => remove(i)}
                type="button"
                variant="text sm textRed"
              >
                <RiIndeterminateCircleFill /> remove
              </Button>
            ) : null}
          </div>

          <div className={s.otherLinks_inputs}>
            <input
              id={field?.id}
              placeholder="Link Name"
              type="text"
              {...register(`otherLinks.${i}.name`)}
            />

            <input
              placeholder="Link URL"
              type="text"
              {...register(`otherLinks.${i}.url`)}
            />
          </div>
          {errors?.otherLinks?.[i]?.name ? (
            <p className="formErrorText">
              <RiErrorWarningLine /> {errors?.otherLinks?.[i]?.name?.message}
            </p>
          ) : null}
          {errors?.otherLinks?.[i]?.url ? (
            <p className="formErrorText">
              <RiErrorWarningLine /> {errors?.otherLinks?.[i]?.url?.message}
            </p>
          ) : null}
        </div>
      ))}
      {fields?.length < 5 ? (
        <Button
          onClick={() => append({ name: '', url: '' })}
          type="button"
          variant="text"
        >
          <RiAddCircleFill /> add more
        </Button>
      ) : null}
    </>
  )
}
