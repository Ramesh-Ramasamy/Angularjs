class Comment < ActiveRecord::Base
  belongs_to :counter
  validates_presence_of :name, :feedback
end
