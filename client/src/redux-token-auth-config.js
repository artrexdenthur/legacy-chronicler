import {generateAuthActions } from 'redux-token-auth'
import { authUrl } from '../constants'

const config = {
  authUrl,
  userAttributes: {
    provider: 'provider',
    uid: 'uid',
    encrypted_password: 'encrypted_password',
    reset_password_token: 'reset_password_token',
    reset_password_sent_at: 'reset_password_sent_at',
    allow_password_change: 'allow_password_change',
    remember_created_at: 'remember_created_at',
    confirmation_token: 'confirmation_token',
    confirmed_at: 'confirmed_at',
    confirmation_sent_at: 'confirmation_sent_at',
    unconfirmed_email: 'unconfirmed_email',
    name: 'name',
    nickname: 'nickname',
    image: 'image',
    email: 'email',
    tokens: 'tokens',
    created_at: 'created_at',
    updated_at: 'updated_at',
    sign_in_count: 'sign_in_count',
    current_sign_in_at: 'current_sign_in_at',
    last_sign_in_at: 'last_sign_in_at',
    current_sign_in_ip: 'current_sign_in_ip',
    last_sign_in_ip: 'last_sign_in_ip',

  },
  userRegistrationAttributes: {
    provider: 'provider',
    uid: 'uid',
    encrypted_password: 'encrypted_password',
    created_at: 'created_at',
    updated_at: 'updated_at'
  }
}

const {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
} = generateAuthActions(config)

export {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials
}