class Comment < ActiveRecord::Base
	belongs_to :country, :polymorphic => true
end
