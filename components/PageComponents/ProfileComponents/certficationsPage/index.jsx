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

export default function CertificationsPage() {
  const certficationsList = [
    {
      name: 'C-- Programming Language',
      organization: 'Coursera',
      issueDate: 'JAN 2021',
      expiryDate: 'FEB 2023',
      isExpiry: true,
      certificateId: 'asgagsgVSagfsagsagfs',
      certificateURL: 'canwebe.in',
    },
    {
      name: 'P-- AI Language Course',
      organization: 'Lava',
      issueDate: 'JAN 2021',
      expiryDate: undefined,
      isExpiry: false,
      certificateId: undefined,
      certificateURL: 'canwebe.in',
    },
    {
      name: 'Number one Actor skill training',
      organization: 'Tollywood',
      issueDate: 'JAN 2021',
      expiryDate: undefined,
      isExpiry: false,
      certificateId: 'asgagsgVSagfsagsagfs',
      certificateURL: undefined,
    },
  ]

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
      <div className="profileList wrapper">
        {certficationsList.map((certificate, i) => (
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
    </div>
  )
}
