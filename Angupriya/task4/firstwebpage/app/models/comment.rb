class Comment < ActiveRecord::Base
  belongs_to :counter
  belongs_to :user
  validates_presence_of :feedback
  end
