class Withoutcontinent < Country
	has_many :comments, :foreign_key => "country_id"
end