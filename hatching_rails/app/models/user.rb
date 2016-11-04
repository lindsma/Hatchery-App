require 'securerandom'

class User < ApplicationRecord
  before_create :generate_auth_token
  validates :auth_token, uniqueness: true
  has_secure_password

  def generate_auth_token
    return if auth_token.present?
    self.auth_token = SecureRandom.uuid.gsub(/\-/,'')
  end
end
