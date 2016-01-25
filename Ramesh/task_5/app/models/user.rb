class User < ActiveRecord::Base
  before_save :encrypt_password
  validates_presence_of :username
  validates_uniqueness_of :username
  validates_confirmation_of :password

  def encrypt_password
    if password.present?
      self.password = Digest::MD5.hexdigest(password)
    end
  end

  def self.authenticate(username,password)
    user =  User.find_or_initialize_by_username(username)
    password = Digest::MD5.hexdigest(password)
    if(user && password == user.password  )
      return user
    else
      return false
    end
  end
end

