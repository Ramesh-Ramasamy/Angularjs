class Withcontinent < Country
	has_many :comments, :as => :country	
end