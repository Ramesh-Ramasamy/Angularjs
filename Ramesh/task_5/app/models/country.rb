class Country < ActiveRecord::Base
	validates_presence_of :countryname
	validates_uniqueness_of :countryname
	validates_presence_of :countrydesc
	has_many :comments  
end
