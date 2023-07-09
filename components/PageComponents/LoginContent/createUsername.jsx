import { useSelector } from 'react-redux'
import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import debounce from 'lodash.debounce'
import { RiLoader2Line } from 'react-icons/ri'

import s from '@/styles/Login.module.css'
import Button from '../../Shared/button'

import { checkUsername, createUserData } from '@/utils/helper-firebase'
import { selectUser } from '@/redux/features/authSlice'
import useLogout from '@/hooks/useLogout'

export default function CreateUsername() {
  // States
  const [isLoading, setIsLoading] = useState(false)
  const [username, setUsername] = useState('')
  const [isValid, setIsValid] = useState(false)
  const [formLoading, setFormLoading] = useState(false)

  // Logout
  const { handleLogout } = useLogout()

  // State Selectors
  const user = useSelector(selectUser)

  // Handling Input Change
  const handleChange = (e) => {
    const userValue = e.target.value.trim().toLowerCase()

    // Regular Expression for Username
    const re = /^(?=[a-zA-Z0-9._]{3,15}$)(?!.*[_.]{2})[^_.]/

    // If uesrname is less than 3 character
    if (userValue?.length < 3) {
      setUsername(userValue)
      setIsLoading(false)
      setIsValid(false)
    }

    // If username is more than 3 , Check with Regular Expression
    if (re.test(userValue)) {
      setUsername(userValue)
      setIsLoading(true)
      setIsValid(false)
    }
  }

  // Debounce Check Username for Availability
  const checkAvailability = useCallback(
    debounce(async (value) => {
      try {
        if (value?.length >= 3) {
          const isExist = await checkUsername(value)
          setIsValid(!isExist) // False if username exist
          setIsLoading(false)
        }
      } catch (error) {
        console.error('Checking Username', error.message)
        setIsLoading(false)
      }
    }, 700),
    []
  )

  // Check for username everytime username changes
  useEffect(() => {
    checkAvailability(username)
  }, [username])

  // Submit Function
  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      // Start Loading
      setFormLoading(true)
      toast.loading(<b>Creating user data wait..</b>, { id: 'createuser' })
      // Create Userdata in DB
      await createUserData(user, username)
      setFormLoading(false)
      toast.success(<b>Hurrey! {username}, You are now an upDash user</b>, {
        id: 'createuser',
      })
    } catch (error) {
      console.error('User creation error', error.message)
      setFormLoading(false)
      toast.error(<b>Something went wrong, Try Again!</b>, { id: 'createuser' })
    }
  }

  return (
    <>
      <h2>Choose Username</h2>
      <p>One more step to go, Now create a unique username for your account</p>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={username}
          type="text"
          placeholder="Eg:- devRabbani"
          required
        />
        {username?.length >= 3 ? (
          <div className={s.checking}>
            {isLoading ? (
              <p className={s.waiting}>
                <RiLoader2Line /> checking for availability...
              </p>
            ) : isValid ? (
              <p className={s.available}>
                <strong>{username}</strong> is available
              </p>
            ) : (
              <p className={s.notAvailable}>
                <strong>{username}</strong> already exist
              </p>
            )}
          </div>
        ) : null}

        <div className="btnDiv">
          <Button disabled={!isValid || formLoading}>Create</Button>
          <Button
            disabled={formLoading}
            onClick={handleLogout}
            variant="grey"
            type="button"
          >
            Close
          </Button>
        </div>
      </form>
    </>
  )
}
