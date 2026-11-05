import { PageHeader } from '../components/PageHeader'
import { useLanguage } from '../language'
import { company } from '../content/company'

export function Legal({ type }) {
  const { t } = useLanguage()
  const page = t[type]

  return (
    <>
      <PageHeader title={page.title} />
      <section className="section">
        <div className="container legal">
          <p className="lead">{page.intro}</p>
          {page.sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.text.map((text) => (
                <p key={text}>{text}</p>
              ))}
              {section.list && (
                <ul>
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {section.after && (
                <p>
                  {section.after} <a href={`mailto:${company.email}`}>{company.email}</a>
                </p>
              )}
            </section>
          ))}
        </div>
      </section>
    </>
  )
}
