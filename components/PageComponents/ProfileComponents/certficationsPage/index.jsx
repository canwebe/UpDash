import Header from '@/components/Shared/header'
import s from './certificationsPage.module.css'
import { RxExternalLink } from 'react-icons/rx'
import Link from 'next/link'
import { RiAddFill, RiEditBoxFill } from 'react-icons/ri'

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
    <div className={s.certificationsPage}>
      <Header title="Certifications">
        <div>
          <Link href="/add/project">
            <RiAddFill /> Add
          </Link>
          <button>
            <RiEditBoxFill /> Edit
          </button>
        </div>
      </Header>
      <div className={s.certificationsList}>
        {certficationsList.map((certificate, i) => (
          <div className={s.certificateCardWrapper} key={i}>
            <div className={`${s.certificateCard} wrapper`}>
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
          </div>
        ))}
      </div>
    </div>
  )
}
