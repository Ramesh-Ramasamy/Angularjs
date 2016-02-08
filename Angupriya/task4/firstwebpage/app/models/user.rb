class User < ActiveRecord::Base
	has_many :comments
	validates_presence_of :name, :password
	validates_uniqueness_of :name
	def self.authenticate(username,login_password)
			u = User.find_by_name(username)
			if u.present? 
			 if (u.password).eql?(login_password)
				return u
			end
		end
	end
end
