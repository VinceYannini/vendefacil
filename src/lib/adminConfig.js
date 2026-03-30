const splitCsv = (value) =>
  value
    ?.split(',')
    .map((entry) => entry.trim().toLowerCase())
    .filter(Boolean) ?? []

export const adminConfig = {
  allowedEmails: splitCsv(import.meta.env.VITE_ADMIN_ALLOWED_EMAILS),
  accessCode: import.meta.env.VITE_ADMIN_ACCESS_CODE ?? '',
}

export const isAllowedEmail = (email) => {
  if (adminConfig.allowedEmails.length === 0) {
    return true
  }

  return adminConfig.allowedEmails.includes(email.trim().toLowerCase())
}

export const isValidAccessCode = (value) => {
  if (!adminConfig.accessCode) {
    return true
  }

  return value === adminConfig.accessCode
}
