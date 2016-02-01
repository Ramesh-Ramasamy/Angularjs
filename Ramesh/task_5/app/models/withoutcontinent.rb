class Withoutcontinent < Country
	has_many :comments, :as => :country
end