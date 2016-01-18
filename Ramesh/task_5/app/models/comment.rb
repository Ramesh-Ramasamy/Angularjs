class Comment < ActiveRecord::Base
  validates_presence_of :name, :commentbody
  belongs_to :country
end
