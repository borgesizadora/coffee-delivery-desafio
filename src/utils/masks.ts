export const maskCep = (value: string) => {
  return (
    value
      .replace(/\s/g, '')
      .replace(/\D/g, '')
      .replace(/^(\d{5})(\d)/, '$1-$2')
      .substring(0, 9) || ''
  )
}
