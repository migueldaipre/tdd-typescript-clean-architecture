import { EmailValidatorAdapter } from '../utils/email-validator'

describe('EmailValidator Adapater', () => {
  test('should return false if validator returns false', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('invalid_email@mail.com')
    expect(isValid).toBe(false)
  })
})
