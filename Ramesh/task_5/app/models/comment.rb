class Comment < ActiveRecord::Base
	validates_presence_of :commentbody
	belongs_to :country
	belongs_to :user
end
