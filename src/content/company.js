export const company = {
  name: 'Punch Care',
  legalName: 'Punch Care Ltda.',
  phone: '(19) 99838-5373',
  whatsapp: '5519998385373',
  email: 'punchcare@punchcare.com.br',
  street: 'Av. Laurita Ortega Mari, 1288 – Vila das Oliveiras',
  city: 'Taboão da Serra – SP',
  zip: '06766-360',
  adamus: 'https://www.adamus.com.pl/en/',
  social: [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/punch-care-ltda' },
    { name: 'YouTube', href: 'https://www.youtube.com/@PunchCare' },
    { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100092682912472' },
    { name: 'Instagram', href: 'https://www.instagram.com/punchcare/' },
  ],
}

export const whatsappLink = (message) =>
  `https://wa.me/${company.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ''}`

export const mailtoLink = (subject, body = '') =>
  `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
