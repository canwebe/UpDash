import { db } from '@/lib/firebase'
import { doc, getDoc, writeBatch } from 'firebase/firestore'

// Check Username Exist
export const checkUsername = async (username) => {
  const docRef = doc(db, 'usernames', username)

  const docSnap = await getDoc(docRef)

  return docSnap.exists()
}

// Create User Data
export const createUserData = async (user, username) => {
  // Refs
  const userRef = doc(db, 'users', user?.uid)
  const usernameRef = doc(db, 'usernames', username)

  const userData = {
    username,
    uid: user?.uid,
    photoURL: user?.photoURL,
    displayName: user?.displayName?.toLowerCase(),
    projectsUp: 0,
    skillsUp: 0,
    recommendsUp: 0,
  }

  const batch = writeBatch(db)
  // Batch Writing

  // Setting User Data
  batch.set(userRef, userData)

  // // Setting Username
  batch.set(usernameRef, { uid: user?.uid })

  // Comitting Changes
  await batch.commit()
}

// Submiting Edit Profile
export const updateProfileData = async (basicInfo, extendedInfo) => {
  const uid = extendedInfo?.uid

  const userRef = doc(db, 'users', uid)
  const userProfilesRef = doc(db, 'userProfiles', uid)

  const batch = writeBatch(db)

  // Batch Writing
  // Check If basic info got changes
  if (Object.keys(basicInfo)?.length) {
    batch.update(userRef, basicInfo)
  }
  batch.set(userProfilesRef, extendedInfo, { merge: true })

  // Commit changes
  await batch.commit()
}
