import Header from '@/components/Shared/header'
import s from './certificationsPage.module.css'
import { RxExternalLink } from 'react-icons/rx'
import Link from 'next/link'
import {
  RiAddCircleLine,
  RiAddFill,
  RiEditBoxFill,
  RiEditLine,
} from 'react-icons/ri'
import Loader from '@/components/Shared/loaders/loader'
import { useSelector } from 'react-redux'
import {
  selectCertifications,
  selectProfileInfoLoading,
} from '@/redux/features/userProfileSlice'

export default function CertificationsPage({ type = 'own' }) {
  // Redux States
  const profileInfoLoading = useSelector((state) =>
    selectProfileInfoLoading(state, type)
  )
  const certificationsList = useSelector((state) =>
    selectCertifications(state, type)
  )

  // const certficationsList = [
  //   {
  //     name: 'C-- Programming Language',
  //     organization: 'Coursera',
  //     issueDate: 'JAN 2021',
  //     expiryDate: 'FEB 2023',
  //     isExpiry: true,
  //     certificateId: 'asgagsgVSagfsagsagfs',
  //     certificateURL: 'canwebe.in',
  //   },
  //   {
  //     name: 'P-- AI Language Course',
  //     organization: 'Lava',
  //     issueDate: 'JAN 2021',
  //     expiryDate: undefined,
  //     isExpiry: false,
  //     certificateId: undefined,
  //     certificateURL: 'canwebe.in',
  //   },
  //   {
  //     name: 'Number one Actor skill training',
  //     organization: 'Tollywood',
  //     issueDate: 'JAN 2021',
  //     expiryDate: undefined,
  //     isExpiry: false,
  //     certificateId: 'asgagsgVSagfsagsagfs',
  //     certificateURL: undefined,
  //   },
  // ]

  if (profileInfoLoading) {
    return <Loader variant="normal" />
  }

  return (
    <div className="profileSubPage">
      <Header title="Certifications">
        <div>
          <Link href="/add/project">
            <RiAddCircleLine /> Add
          </Link>
          <button>
            <RiEditLine /> Edit
          </button>
        </div>
      </Header>

      {certificationsList?.length ? (
        <div className="profileList wrapper">
          {certificationsList.map((certificate, i) => (
            <div className={s.certificateCard} key={i}>
              <h4 className={s.name}>{certificate.name}</h4>
              <p className={s.organization}>{certificate.organization}</p>
              <p className={s.date}>
                {certificate.isExpiry
                  ? `${certificate.issueDate} - ${certificate.expiryDate}`
                  : `Issued ${certificate.issueDate}`}
              </p>
              {certificate?.certificateId ? (
                <p className={s.certificateId}>
                  ID - {certificate.certificateId}
                </p>
              ) : null}
              {certificate?.certificateURL ? (
                <a
                  href={certificate.certificateURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.viewBtn}
                >
                  View Certificate <RxExternalLink />
                </a>
              ) : null}
            </div>
          ))}
        </div>
      ) : type === 'own' ? (
        <p className="noData">
          Unleash your accomplishments. Your profile is yearning for the
          addition of your certificates
        </p>
      ) : (
        <p className="noData">
          This user&apos;s certificate collection is waiting to be unveiled.
          They haven&apos;t uploaded any certificates yet
        </p>
      )}
    </div>
  )
}
